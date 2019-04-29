require('core-js/es6');
require('core-js/es7/reflect');
require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/proxy'); // since zone.js 0.6.15
require('zone.js/dist/sync-test');
require('zone.js/dist/jasmine-patch'); // put here since zone.js 0.6.14
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');
require('rxjs/Rx');
require('lodash');
require('@ng-bootstrap/ng-bootstrap');
require('ngx-breadcrumbs');
var testing = require('@angular/core/testing');
var browser = require('@angular/platform-browser-dynamic/testing');
require('./public/app/testing');

testing.TestBed.initTestEnvironment(
  browser.BrowserDynamicTestingModule,
  browser.platformBrowserDynamicTesting()
);

var testContext = require.context('./public/app/mendelpede', true, /.spec\.ts/)

function requireAll(requireContext) {
  return requireContext.keys()
    .map(requireContext);
}

var modules = requireAll(testContext);
//var modules = [require('./public/app/cricket/location/plexer-room/plexer-room.component.spec')];
//var modules = [require('./public/app/authentication/reset-password/reset-password.component.spec')];
