import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {HeroService} from '../../services/hero.service';
import {Hero} from './hero';
@Component({
  selector: 'my-hero-detail',
  styleUrls: ['./components/heroes/hero-styles.css'],
  templateUrl: './components/heroes/hero-detail.template.html',
  inputs: ['hero'],
  providers: [HeroService]
})

/** */
export class HeroDetailComponent {
    public hero: Hero;
    public classes;
    private stylar1 = true;
    private stylar2 = true;
    constructor(
        private _router:Router,
        private _routeParams:RouteParams,
        private _service: HeroService){}
    ngOnInit() {
        this.hero  = new Hero(0, ' ', ' ', ' ');
        let id = this._routeParams.get('id');
        this._service.getHero(id).then(hero => {
            this.hero = hero;
            this.updateClasses();
            this.setClasses();
            console.log('received',hero);
        });
    }
    // this is from the forms section.
    // public selectedHero: Hero;
    powers = ['Really Smart', 'Super Flexible',
                'Super Hot', 'Weather Changer',
                'Fetch any object at any distance'];
    //model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = true;
    onSubmit() { this.submitted = true; }
    updateClasses() { 
      this.hero.power ? this.stylar1 = true: this.stylar1 = false;
      this.hero.alterEgo ? this.stylar2 = true: this.stylar2 = false;
    }
    setClasses() {
        this.classes =  {
            power: this.stylar1,      
            alterEgo: this.stylar2,
            standard: true
        }
        return this.classes;
    }
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.hero); }
}
/** 
 * The HeroComponent creates an instance of HeroDetail by virtue of the <my-hero-detail>
 * tag at the bottom of its template. That HeroDetail is a child of the AppComponent.
 * If the HeroDetailComponent needed its parent component's HeroService, 
 * it would ask Angular to inject the service into its constructor which would look
 * just like the one for AppComponent:
 * hero-detailcomponent.ts (constructor)
 * constructor(private _heroService: HeroService) { }
 * The HeroDetailComponent must not repeat it's parent's directives array! Here's why:
 * Because that tells Angular to create a new instance of the HeroService at the
 * HeroDetailComponent level. The HeroDetailComponent doesn't want its own service instance;
 * it wants its parent's service instance. Adding the providers array creates a
 * new service instance that shadows the parent * instance.
 * 
 * Think carefully about where and when to register a provider. 
 * Understand the scope of that registration.
 * Be careful not to create a new service instance at the wrong level.
 * The AppComponent is the top level component of our application. 
 * There should be only one instance of that component and only one instance of 
 * the HeroService in our entire app. */
 