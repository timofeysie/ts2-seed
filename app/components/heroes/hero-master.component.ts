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
  public classes;
  private stylar1 = true;
  private stylar2 = true;
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
      hero.power ? this.stylar1 = true: this.stylar1 = false;
      hero.alterEgo ? this.stylar2 = true: this.stylar2 = false;
      this._router.navigate( ['HeroDetail', { id: hero.id }] ); 
   }
   getHeroes() {
    this._heroService.getHeroes().then(
        heroes => {
            this.heroes = heroes;
        });
   }
   setClasses() {
    this.classes =  {
        power: this.stylar1,      
        alterEgo: this.stylar2,
        standard: true
    }
        return this.classes;
    }
  
}
