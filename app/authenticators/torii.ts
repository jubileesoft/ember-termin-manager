import Torii from 'ember-simple-auth/authenticators/torii';
import ENV from 'ember-appo-admin/config/environment';
import { inject as service } from '@ember/service';
import fetch, { Headers, Request, Response, AbortController } from 'fetch';

export default Torii.extend({
  torii: service(),

  async authenticate(options) {
    let data = await this._super(options);
    console.log(data);

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
  }
});
