import Service from '@ember/service';
import ENV from 'ember-appo-admin/config/environment';

export default class Store extends Service.extend({
  // anything which *must* be merged to prototype here
}) {
  // normal class body definition here

  


  public async getTenants() {

  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'store': Store;
  }
}
