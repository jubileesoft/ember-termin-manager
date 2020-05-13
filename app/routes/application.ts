import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { inject as service } from '@ember/service';

export default class Application extends Route.extend(ApplicationRouteMixin, {
  // anything which *must* be merged to prototype here
  routeAfterAuthentication: 'protected'
}) {
  @service intl: any;

  // normal class body definition here
  constructor() {
    super(...arguments);
    this.intl.locale = 'de';
  }
}
