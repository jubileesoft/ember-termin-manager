import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default class Application extends Route.extend(ApplicationRouteMixin, {
  // anything which *must* be merged to prototype here
  routeAfterAuthentication: 'protected'
}) {
  // normal class body definition here
}
