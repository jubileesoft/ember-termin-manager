import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

interface AdminViewArgs {
  isCreatingAdminDb: boolean;
  createAdminDb(): Promise<boolean>;
}

const BUTTON_TEXT = {
  CREATE_ADMIN_DB: 'Admin Datenbank anlegen',
  CREATE_ADMIN_DB_ONGOING: 'Datenbank wird angelegt ...',
};

export default class AdminView extends Component<AdminViewArgs> {
  @tracked createAdminDbButtonText = BUTTON_TEXT.CREATE_ADMIN_DB;

  @action
  async createAdminDb() {
    if(!this.args.createAdminDb) {
      return;
    }

    try {
      this.createAdminDbButtonText = BUTTON_TEXT.CREATE_ADMIN_DB_ONGOING;
      await this.args.createAdminDb();  
    } catch (error) {
      // todo
    }
    
    this.createAdminDbButtonText = BUTTON_TEXT.CREATE_ADMIN_DB;
  }
}
