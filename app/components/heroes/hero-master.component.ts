/** This class takes the place of app.component.ts from the tutorial. */
import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from '../../services/hero.service';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroFormComponent} from './hero-form.component';
@Component({
  selector: 'hero-selector',
  templateUrl: './components/heroes/hero-master.template.html',
  styleUrls: ['./components/heroes/hero-styles.css'],
  directives: [HeroDetailComponent, HeroFormComponent],
  providers: [HeroService]
})
export class HeroComponent implements OnInit {
    /** private variable (not part of the component's public API)
     * start with a _      */
    constructor(
        private _router: Router,
        private _heroService: HeroService) { }
  public title = 'Tour of Heroes';
  public heroes: Hero[];
  public selectedHero: Hero;
  /** Angular will call getHeroes if we implement the ngOnInit Lifecycle Hook. 
   * Angular offers a number of interfaces for tapping into critical moments in the component lifecycle:
   * at creation, after each change, and at its eventual destruction.
   * Each interface has a single method. When the component implements that method, 
   * Angular calls it at the appropriate time. */
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero) { 
      this.selectedHero = hero;
      this._router.navigate( ['HeroDetail', { id: hero.id }] ); }
  getHeroes() {
    this._heroService.getHeroes().then(
        heroes => {
            this.heroes = heroes;
        });
    // the slower method below uses a timeout to simulate a real connection.
    // But it causes the following errors in VSCode:
    // type '{}' is not assignable to type 'Hero[]'
    // property length is missing in type '{}'
    // this._heroService.getHeroesSlowly().then(
    //     heroes => this.heroes = heroes);
  }
}
