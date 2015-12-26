import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
@Component({
  selector: 'hero-selector',
  templateUrl: './components/heroes/hero-master.template.html',
  styleUrls: ['./components/heroes/hero-styles.css'],
  directives: [HeroDetailComponent]
})
export class HeroComponent {
  public title = 'Tour of Heroes';
  public heroes = HEROES;
  public selectedHero: Hero;
  onSelect(hero: Hero) { this.selectedHero = hero; }
}
var HEROES: Hero[] = [
  { 'id': 11, 'name': 'Mr. Nice' },
  { 'id': 12, 'name': 'Narco' },
  { 'id': 13, 'name': 'Bombasto' },
  { 'id': 14, 'name': 'Celeritas' },
  { 'id': 15, 'name': 'Magneta' },
  { 'id': 16, 'name': 'RubberMan' },
  { 'id': 17, 'name': 'Dynama' },
  { 'id': 18, 'name': 'Dr IQ' },
  { 'id': 19, 'name': 'Magma' },
  { 'id': 20, 'name': 'Tornado' }
];
