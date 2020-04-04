import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Type from 'ember__routing';

interface LoginViewArgs {}

export default class LoginView extends Component<LoginViewArgs> {
  @service session;
  @service router!: Type.Router;

  @action
  async login() {
    try {
      await this.session.authenticate(
        'authenticator:torii',
        'google-oauth2-bearer-v2'
      );

    } catch (error) {
      // TODO
    }
  }
}
