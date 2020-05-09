import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { CreateTenantInput } from 'ember-termin-manager/gql/types';
import createTenantMutation from 'ember-termin-manager/gql/mutations/create-tenant.graphql';

export default class ProtectedNew extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  @service apollo: any;

  @action
  createTenant(input: CreateTenantInput) {
    let variables = {
      input: input,
    };

    return this.apollo.mutate({ mutation: createTenantMutation, variables }, 'tenant');
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'protected/new': ProtectedNew;
  }
}
