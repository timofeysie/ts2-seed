import {Component} from 'angular2/core';
import {Hero} from './hero';
@Component({
  selector: 'my-hero-detail',
  templateUrl: './components/heroes/hero-detail.template.html',
  inputs: ['hero']
})
export class HeroDetailComponent {}
