import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {MyraService} from '../../services/myra.service';
import {Myra} from './myra';
@Component({
  selector: 'my-myra-detail',
  styleUrls: ['./components/myra/myra-styles.css'],
  templateUrl: './components/myra/myra-detail.template.html',
  inputs: ['myra'],
  providers: [MyraService]
})

/** */
export class MyraDetailComponent {
    public myra: Myra;
    public classes;
    private stylar1 = true;
    private stylar2 = true;
    constructor(
        private _router:Router,
        private _routeParams:RouteParams,
        private _service: MyraService){}
    ngOnInit() {
        this.myra  = new Myra(0, ' ', ' ', ' ');
        let id = this._routeParams.get('id');
        this._service.getMyra(id).then(myra => {
            this.myra = myra;
            this.updateClasses();
            this.setClasses();
            console.log('received',myra);
        });
    }
    // this is from the forms section.
    // public selectedmyra: myra;
    powers = ['Really Smart', 'Super Flexible',
                'Super Hot', 'Weather Changer',
                'Fetch any object at any distance'];
    //model = new myra(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = true;
    onSubmit() { this.submitted = true; }
    updateClasses() { 
      this.myra.power ? this.stylar1 = true: this.stylar1 = false;
      this.myra.alterEgo ? this.stylar2 = true: this.stylar2 = false;
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
 