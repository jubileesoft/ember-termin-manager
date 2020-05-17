import Route from '@ember/routing/route';
import { queryManager } from 'ember-apollo-client';
import getAllTenantsQuery from 'ember-termin-manager/gql/queries/get-all-tenants.graphql';

export default class ProtectedIndex extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here
  @queryManager apollo: any;

  model() {
    return null;
    
    return this.apollo.watchQuery({ query: getAllTenantsQuery });
  }
}
