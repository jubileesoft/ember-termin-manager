import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

interface LoginViewArgs {}

export default class LoginView extends Component<LoginViewArgs> {
  @service session;


  @action
  login() {
    this.session.authenticate('authenticator:torii', 'google-oauth2-bearer-v2');
  }

  // invalidateSession() {
  //   this.get('session').invalidate();
  // }
}
