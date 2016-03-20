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
// Imports for the typeahead wikipedia search service                    
import {bootstrap} from 'angular2/platform/browser';
import {Control} from 'angular2/common';
import {JSONP_PROVIDERS} from 'angular2/http';
import {WikipediaService} from '../../services/wikipedia-service'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

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
export class AppCmp {
    /*
    Trying to add the typeahead demo using obeservables.
    The problem is: EXCEPTION: No provider for WikipediaService! (AppCmp -> WikipediaService)
    Also, the wikepedia service is not findind the term string.
    This is just a configuration issue.
    There is a working plunker here: http://plnkr.co/edit/KuWUpfGoeJLDSPBibjrn?p=preview
    It's discussed in this blog: http://blog.thoughtram.io/angular/2016/01/07/taking-advantage-of-observables-in-angular2-pt2.html
    */
//   items: Observable<Array<string>>;
//   term = new Control();
//   constructor(private wikipediaService: WikipediaService) {
//     this.items = wikipediaService.search(this.term.valueChanges);
//   }
}
