'use strict';

module.exports = {
  name: 'ember-django-adapter',

  included: function(app) {
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    // This uses a private API with an Ember global, so it's not working in Ember 4.
    // app.import('vendor/ember-django-adapter/register-version.js');
  }
};
