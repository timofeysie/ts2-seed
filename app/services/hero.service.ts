import {Hero} from '../components/heroes/hero';
import {HEROES} from '../components/heroes/mock-heroes';
import {Injectable} from 'angular2/core';

@Injectable()
export class HeroService {
    getHeroes() {
            return Promise.resolve(HEROES);
    }
    getHeroesSlowly() {
        return new Promise(resolve =>
        setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
        );
    }
}
