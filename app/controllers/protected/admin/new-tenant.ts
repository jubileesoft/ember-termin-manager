import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { CreateTenantInput } from 'ember-termin-manager/gql/types';

export default class ProtectedAdminNewTenant extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  @tracked name: string = '';
  @tracked adminEmail: string = '';
  @tracked dbName: string = '';

  get canSave() {
    if (this.name && this.adminEmail && this.dbName) {
      return true;
    }
    return false;
  }

  @action
  async save() {
    if (!this.args.createTenant || !this.canSave) {
      return;
    }

    const input: CreateTenantInput = {
      name: this.name,
      adminEmail: this.adminEmail,
      dbName: this.dbName,
    };

    try {
      await this.args.createTenant(input);
    } catch (error) {
      // error handling
    }
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'protected/admin/new-tenant': ProtectedAdminNewTenant;
  }
}
