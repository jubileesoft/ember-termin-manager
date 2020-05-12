import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ProtectedAdmin extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {
  @action
  createAdminDb() {
    console.log('create');
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'protected/admin': ProtectedAdmin;
  }
}
