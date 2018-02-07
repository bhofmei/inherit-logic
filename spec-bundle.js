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
//require('@ng-bootstrap/ng-bootstrap');
//require('ng2-dnd');
//require('ngx-breadcrumbs');
//require('angular-skyhook');
//require('react-dnd-touch-backend');
var testing = require('@angular/core/testing');
var browser = require('@angular/platform-browser-dynamic/testing');

testing.TestBed.initTestEnvironment(
  browser.BrowserDynamicTestingModule,
  browser.platformBrowserDynamicTesting()
);

var testContext = require.context('./public/app', true, /.spec\.ts/)

function requireAll(requireContext) {
  return requireContext.keys()
    .map(requireContext);
}

//var modules = requireAll(testContext);
var modules = [require('./public/app/scenario/list/list.component.spec.ts')
];
