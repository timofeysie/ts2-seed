import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {RouteParams, Router} from 'angular2/router';
import {HeroService} from '../../services/hero.service';
import { Hero }    from './hero';
@Component({
  selector: 'hero-form',
  styleUrls: ['./components/heroes/hero-styles.css'],
  templateUrl: './components/heroes/hero-form.component.html',
  inputs: ['hero'],
  providers: [HeroService]
})
export class HeroFormComponent {
    public hero: Hero;
    public classes;
    private stylar1 = true;
    private stylar2 = true;
    constructor(
        private _router:Router,
        private _routeParams:RouteParams,
        private _service: HeroService) {}
    ngOnInit() {
        let id = this._routeParams.get('id');
        this._service.getHero(id).then(hero => this.hero = hero);
        this.hero.power ? this.stylar1 = true: this.stylar1 = false;
        this.hero.alterEgo ? this.stylar2 = true: this.stylar2 = false;
        console.log('this.stylar1',this.stylar1,'this.stylar2',this.stylar2);
    }
    
  public selectedHero: Hero;
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  setClasses() { 
      this.hero.power ? this.stylar1 = true: this.stylar1 = false;
      this.hero.alterEgo ? this.stylar2 = true: this.stylar2 = false;
  }
}