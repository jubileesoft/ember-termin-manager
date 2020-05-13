import { inject as service } from '@ember/service';
import ApolloService from 'ember-apollo-client/services/apollo';
import { onError } from 'apollo-link-error';
import { setContext } from 'apollo-link-context';

export default class Apollo extends ApolloService.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  @service session: any;

  link() {
    let httpLink = super.link();

    // Middleware
    let authLink = setContext(async (request, context) => {
      const token = this.session.data.authenticated.access_token;

      Object.assign(context, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      return context;
    });

    // Afterware
    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, path, extensions }) => {
          
          console.log(
            `[GraphQL error]: Message: ${message}, Path: ${path}, Extensions.code: ${extensions?.code}`
          )
          if(extensions?.code === 'UNAUTHENTICATED') {
            this.session.invalidate();
          }
        });
      // if (networkError && networkError.statusCode === 401) {
      //   // remove cached token on 401 from the server
      //   token = undefined;
      // }
    });

    const authFlowLink = authLink.concat(errorLink);
    return authFlowLink.concat(httpLink);
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    apollo: Apollo;
  }
}
