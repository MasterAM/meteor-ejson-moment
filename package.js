Package.describe({
  name: 'alon:ejson-moment',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/MasterAM/meteor-ejson-moment',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use(['ecmascript', 'moment']);
  api.addFiles('lib/moment_ejson.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('meteor-ejson-moment');
  api.addFiles('meteor-ejson-moment-tests.js');
});
