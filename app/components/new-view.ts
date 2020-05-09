import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { CreateTenantInput } from 'ember-termin-manager/gql/types';

interface NewViewArgs {
  createTenant(input: CreateTenantInput): Promise<void>;
}

export default class NewView extends Component<NewViewArgs> {
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
