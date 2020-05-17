import Controller from '@ember/controller';
import { action } from '@ember/object';
import { queryManager } from 'ember-apollo-client';
import { tracked } from '@glimmer/tracking';

import CreateAdminDatabaseMutation from 'ember-termin-manager/gql/mutations/create-admin-database.graphql';

const BUTTON_TEXT = {
  CREATE_ADMIN_DB: 'Anlegen',
  CREATE_ADMIN_DB_ONGOING: 'Wird angelegt ...',
};

export default class ProtectedAdmin extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  // #region Services

  @queryManager apollo: any;

  // #endregion Services

  // #region Properties

  @tracked isCreatingAdminDb = false;
  @tracked createAdminDbButtonText = BUTTON_TEXT.CREATE_ADMIN_DB;

  // #endregion Properties

  @action
  async createAdminDb() {
    try {
      debugger;
      this.isCreatingAdminDb = true;
      this.createAdminDbButtonText = BUTTON_TEXT.CREATE_ADMIN_DB_ONGOING;

      const result = await this.apollo.mutate(
        { mutation: CreateAdminDatabaseMutation },
        'createAdminDatabase'
      );
      this.isCreatingAdminDb = false;
      this.createAdminDbButtonText = BUTTON_TEXT.CREATE_ADMIN_DB;

      this.model = result;
      
    } catch (error) {
      this.isCreatingAdminDb = false;
      this.createAdminDbButtonText = BUTTON_TEXT.CREATE_ADMIN_DB;
      throw error;
    }
  }

  @action
  newTenant() {
    this.transitionToRoute('protected.admin.new-tenant')
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'protected/admin': ProtectedAdmin;
  }
}
