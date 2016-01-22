import {Myra} from '../components/myra/myra';
import {MYRAS} from '../components/myra/mock-myras';
import {Injectable} from 'angular2/core';

@Injectable()
export class MyraService {
    getMyras() {
            return Promise.resolve(MYRAS);
    }
    getMyrasSlowly() {
        return new Promise(resolve =>
        setTimeout(()=>resolve(MYRAS), 2000) // 2 seconds
        );
    }
    getMyra(id: number | string) {
        return myrasPromise
        .then(myras => myras.filter(h => h.id === +id)[0]);
  }
}
var myrasPromise = Promise.resolve(MYRAS);