import Torii from 'ember-simple-auth/authenticators/torii';
import ENV from 'ember-termin-manager/config/environment';
import { inject as service } from '@ember/service';
import fetch, { Headers, Request, Response, AbortController } from 'fetch';

export default class ToriiAuthenticator extends Torii {
  @service torii;

  // async authenticate(options) {
  //   let data = await super.authenticate(options);
  //   console.log(data);

  // let response = await fetch(
  //   ENV.torii.providers['google-oauth2'].tokenExchangeUri,
  //   {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       code: data.authorizationCode
  //     })
  //   }
  // );

  // console.log(response);

  // return this._super(options).then(function(data) {

  //   alert(
  //     `authorizationCode:\n${data.authorizationCode}\nprovider: ${data.provider}\nredirectUri: ${data.redirectUri}`
  //   );
  // });
  //}
}
