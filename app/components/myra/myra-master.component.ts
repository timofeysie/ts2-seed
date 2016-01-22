/** This class takes the place of app.component.ts from the tutorial. */
import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Myra} from './myra';
import {MyraService} from '../../services/myra.service';
import {MyraDetailComponent} from './myra-detail.component';
import {MyraFormComponent} from './myra-form.component';
import {HighlightDirective} from './highlight.directive';

@Component({
  selector: 'myra-selector',
  templateUrl: './components/myra/myra-master.template.html',
  styleUrls: ['./components/myra/myra-styles.css'],
  directives: [MyraDetailComponent, MyraFormComponent, HighlightDirective],
  providers: [MyraService]
})
export class MyraComponent implements OnInit {
    /** private variable (not part of the component's public API)
     * start with a _      */
    constructor(
        private _router: Router,
        private _MyraService: MyraService) { }
  public title = 'Myra the Ferryboat';
  public myras: Myra[];
  public selectedMyra: Myra;
  public classes;
  private stylar1 = true;
  private stylar2 = true;
  /** Angular will call getMyras if we implement the ngOnInit Lifecycle Hook. 
   * Angular offers a number of interfaces for tapping into critical moments in the component lifecycle:
   * at creation, after each change, and at its eventual destruction.
   * Each interface has a single method. When the component implements that method, 
   * Angular calls it at the appropriate time. */
  ngOnInit() {
    this.getMyras();
  }
  onSelect(myra: Myra) { 
      this.selectedMyra = myra;
      myra.power ? this.stylar1 = true: this.stylar1 = false;
      myra.alterEgo ? this.stylar2 = true: this.stylar2 = false;
      this._router.navigate( ['MyraDetail', { id: myra.id }] ); 
   }
   getMyras() {
    this._MyraService.getMyras().then(
        myras => {
            this.myras = myras;
            console.log('this',this.myras);
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
