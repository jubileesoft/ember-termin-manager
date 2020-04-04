import Route from '@ember/routing/route';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default class Login extends Route.extend(UnauthenticatedRouteMixin, {
  // anything which *must* be merged to prototype here
  routeIfAlreadyAuthenticated: 'protected'
}) {
  // normal class body definition here
}
