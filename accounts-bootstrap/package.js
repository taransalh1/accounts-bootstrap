Package.describe({
  name: 'taransalh:accounts-bootstrap',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('2.15');
  api.use('ecmascript');
  api.mainModule('accounts-bootstrap.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('taransalh:accounts-bootstrap');
  api.mainModule('accounts-bootstrap-tests.js');
});
