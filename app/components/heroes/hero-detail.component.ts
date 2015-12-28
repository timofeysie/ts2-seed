import {Component} from 'angular2/core';
import {Hero} from './hero';
@Component({
  selector: 'my-hero-detail',
  templateUrl: './components/heroes/hero-detail.template.html',
  inputs: ['hero']
})
/** The HeroComponent creates an instance of HeroDetail by virtue of the <my-hero-detail>
 * tag at the bottom of its template. That HeroDetail is a child of the AppComponent.
 * If the HeroDetailComponent needed its parent component's HeroService, 
 * it would ask Angular to inject the service into its constructor which would look
 * just like the one for AppComponent:
 * hero-detailcomponent.ts (constructor)
 * constructor(private _heroService: HeroService) { }
 * The HeroDetailComponent must not repeat it's parent's directives array! Here's why:
 * Because that tells Angular to create a new instance of the HeroService at the
 * HeroDetailComponent level. The HeroDetailComponent doesn't want its own service instance;
 *  it wants its parent's service instance. Adding the providers array creates a
 *  new service instance that shadows the parent * instance.*/
export class HeroDetailComponent {}
/**Think carefully about where and when to register a provider. 
 * Understand the scope of that registration.
 * Be careful not to create a new service instance at the wrong level.
 * The AppComponent is the top level component of our application. 
 * There should be only one instance of that component and only one instance of 
 * the HeroService in our entire app. */