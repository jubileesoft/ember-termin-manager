import Route from '@ember/routing/route';
import { queryManager } from 'ember-apollo-client';
import GetAdminDatabaseInfoQuery from 'ember-termin-manager/gql/queries/get-admin-database-info.graphql';

export default class ProtectedAdmin extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  @queryManager apollo: any;

  model() {
    return this.apollo.query({query: GetAdminDatabaseInfoQuery}, 'getAdminDatabaseInfo');
  }
}
