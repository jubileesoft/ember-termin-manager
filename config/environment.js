'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'ember-termin-manager',
    environment,
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    apollo: {
      apiURL: 'http://localhost:3000/graphql',
      // Optionally, set the credentials property of the Fetch Request interface
      // to control when a cookie is sent:
      // requestCredentials: 'same-origin', // other choices: 'include', 'omit'
    },

    // appoAdmin: {
    //   backendUri: 'https://localhost:3000',
    // },

    torii: {
      routeIfAlreadyAuthenticated: 'protected',
      providers: {
        'google-oauth2-bearer-v2': {
          apiKey:
            '472845354613-qhjjmmug094kpv9b4iu35g65aa34v4u0.apps.googleusercontent.com',
          redirectUri:
            'https://termin.manager.jubileesoft.com/torii/redirect.html',
          scope: 'openid email profile',
        },
      },
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.torii.providers['google-oauth2-bearer-v2'].redirectUri =
      'http://localhost:4200/torii/redirect.html';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
