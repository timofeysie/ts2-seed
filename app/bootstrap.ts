import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {AppCmp} from './components/app/app';
/** We also import ROUTER_PROVIDERS from the router library. The router is a service
 *  implemented by a collection of Dependency Injection providers, most of which are
 *  identified in the ROUTER_PROVIDERS array. */
bootstrap(AppCmp, [
  provide(APP_BASE_HREF, { useValue: '<%= APP_ROOT %>' } ),
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
