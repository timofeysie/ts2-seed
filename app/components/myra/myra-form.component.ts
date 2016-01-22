import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {RouteParams, Router} from 'angular2/router';
import {MyraService} from '../../services/myra.service';
import { Myra }    from './myra';
@Component({
  selector: 'myra-form',
  styleUrls: ['./components/myra/myra-styles.css'],
  templateUrl: './components/myra/myra-form.component.html',
  inputs: ['myra'],
  providers: [MyraService]
})
export class MyraFormComponent {
    public myra: Myra;
    public classes;
    private stylar1 = true;
    private stylar2 = true;
    constructor(
        private _router:Router,
        private _routeParams:RouteParams,
        private _service: MyraService) {}
    ngOnInit() {
        let id = this._routeParams.get('id');
        this._service.getMyra(id).then(myra => this.myra = myra);
        this.myra.power ? this.stylar1 = true: this.stylar1 = false;
        this.myra.alterEgo ? this.stylar2 = true: this.stylar2 = false;
        console.log('this.stylar1',this.stylar1,'this.stylar2',this.stylar2);
    }
    
  public selectedMyra: Myra;
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new Myra(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  setClasses() { 
      this.myra.power ? this.stylar1 = true: this.stylar1 = false;
      this.myra.alterEgo ? this.stylar2 = true: this.stylar2 = false;
  }
}