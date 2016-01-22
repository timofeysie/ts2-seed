import {Component, ViewEncapsulation} from 'angular2/core';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';
// import {HTTP_PROVIDERS} from 'angular2/http';

import {HomeCmp} from '../home/home';
import {AboutCmp} from '../about/about';
import {HeroComponent} from '../heroes/hero-master.component';
import {HeroDetailComponent} from '../heroes/hero-detail.component';
import {MyraComponent} from '../myra/myra-master.component';
import {MyraDetailComponent} from '../myra/myra-detail.component';
import {NameList} from '../../services/name_list';

@Component({
  selector: 'app',
  viewProviders: [NameList],
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/',              component: HomeCmp, as: 'Home' },
  { path: '/heroes',        component: HeroComponent, as: 'Heroes' }, // aka HeroListComponent w/ name Heroes
  { path: '/about',         component: AboutCmp, as: 'About' },
//   { path: '/crisis-center', name: 'CrisisCenter', component: CrisisListComponent},
   { path: '/hero/:id',      name: 'HeroDetail',   component: HeroDetailComponent},
   { path: '/myra',        component: MyraComponent, as: 'Myra' },
   { path: '/myra/:id',      name: 'MyraDetail',   component: MyraDetailComponent}
])
export class AppCmp {}
