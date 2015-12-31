import {Component, OnInit} from 'angular2/core';
import {Crisis, CrisisService} from './crisis.service';
import {Router, RouteParams} from 'angular2/router';

/**
 * List Crisises by utilizing ngFor directive.
 */
@Component({
  template: `
    <ul>
      <li *ngFor="#crisis of crises"
        [class.selected]="isSelected(crisis)"
        (click)="onSelect(crisis)">
        <span class="badge">{{crisis.id}}</span> {{crisis.name}}
      </li>
    </ul>
  `,
})
export class CrisisListComponent implements OnInit {
  public crises: Crisis[];
  private _selectedId: number;
  constructor(
    private _service: CrisisService,
    private _router: Router,
    routeParams: RouteParams) {
      this._selectedId = +routeParams.get('id');
  }
  
  /**
   * Lifecycle hook
   */
  ngOnInit() {
    this._service.getCrises().then(crises => this.crises = crises);
  }
  
  isSelected(crisis: Crisis) { return crisis.id === this._selectedId; }
  onSelect(crisis: Crisis) {
      //Programtical navigation with parameter.
    this._router.navigate( ['CrisisDetail', { id: crisis.id }]  );
  }
}