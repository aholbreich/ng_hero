import {Component, OnInit} from 'angular2/core';
import {Crisis, CrisisService} from './crisis.service';
import {RouteParams, Router} from 'angular2/router';
import {CanDeactivate, ComponentInstruction} from 'angular2/router';
import {DialogService} from '../dialog.service';

/**
 * Editing of Crisis detals.
 * Interesting part:
 */
@Component({
  template: `
  <div *ngIf="crisis">
    <h3>"{{editName}}"</h3>
    <div>
      <label>Id: </label>{{crisis.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="editName" placeholder="name"/>
    </div>
    <button (click)="save()">Save</button>
    <button (click)="cancel()">Cancel</button>
  </div>
  `,
  styles: ['input {width: 20em}']
})
export class CrisisDetailComponent implements OnInit, CanDeactivate {
  public crisis: Crisis;
  public editName: string;
  
  /**
   * Constructor injects needed services
   */
  constructor(
    private _service: CrisisService,
    private _router: Router,
    private _routeParams: RouteParams,
    private _dialog: DialogService
    ) { }
    
   /**
    * Lifecycle hook
    */
  ngOnInit() {
    let id = +this._routeParams.get('id'); //get url parameter 'id'
    this._service.getCrisis(id).then(crisis => {
      if (crisis) {
        this.editName = crisis.name;
        this.crisis = crisis;
      } else { // id not found
        this.gotoCrises();
      }
    });
  }
  
  /** Router Lifecycle Hook 
   * https://angular.io/docs/ts/latest/guide/router.html
   */
  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
    // Allow navigation (`true`) if no crisis or the crisis is unchanged.
    // Otherwise ask the user with the dialog service and return its
    // promise which resolves true-or-false when the user decides
    return !this.crisis ||
           this.crisis.name === this.editName ||
           this._dialog.confirm('Discard changes?');
  }
  
  cancel() {
    this.editName = this.crisis.name;
    this.gotoCrises();
  }
  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }
  
  
  gotoCrises() {
    //Manual routing with params
    let route = ['CrisisList',  {id: this.crisis ? this.crisis.id : null} ]
    this._router.navigate(route);
  }
}