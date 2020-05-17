import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { CreateTenantInput } from 'ember-termin-manager/gql/types';
import createTenantMutation from 'ember-termin-manager/gql/mutations/create-tenant.graphql';

export default class ProtectedAdminNewTenant extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  @service apollo: any;

  @tracked name: string = '';
  @tracked adminEmail: string = '';
  @tracked short: string = '';

  get canSave() {
    if (this.name && this.adminEmail && this.short) {
      return true;
    }
    return false;
  }

  @action
  async save() {
    if (!this.canSave) {
      return;
    }

    const input: CreateTenantInput = {
      name: this.name,
      adminEmail: this.adminEmail,
      short: this.short,
    };

    const variables = {
      input: input,
    };

    try {
      await this.apollo.mutate(
        { mutation: createTenantMutation, variables },
        'createTenant'
      );
      this.transitionToRoute('protected.admin.index');
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
