import Controller from '@ember/controller';
import { action } from '@ember/object';
import { queryManager } from 'ember-apollo-client';
import { tracked } from '@glimmer/tracking';

import CreateAdminDatabaseMutation from 'ember-termin-manager/gql/mutations/create-admin-database.graphql';

export default class ProtectedAdmin extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  // #region Services

  @queryManager apollo: any;

  // #endregion Services

  // #region Properties

  @tracked isCreatingAdminDb = false;

  // #endregion Properties

  @action
  async createAdminDb() {
    try {
      this.isCreatingAdminDb = true;
      const result = await this.apollo.mutate(
        { mutation: CreateAdminDatabaseMutation },
        'data'
      );
      this.isCreatingAdminDb = false;
    } catch (error) {
      this.isCreatingAdminDb = false;
      throw error;
    }
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'protected/admin': ProtectedAdmin;
  }
}
