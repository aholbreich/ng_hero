import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CrisisCenterComponent} from './crisis-center/crisis-center.component';
import {HeroListComponent}     from './heroes/hero-list.component';
import {HeroDetailComponent}   from './heroes/hero-detail.component';

/**
 * Navigation is defined here.
 * First placeholders are defined in the template.
 * Secondly: @Route config is special construct to fill them dinamically
 * Dont forget to define 'directives'
 */
@Component({
  selector: 'my-app',
  template: `
    <h1 class="title">Component Router</h1>
    <a [routerLink]="['CrisisCenter']">Crisis Center</a>
    <a [routerLink]="['Heroes']">Heroes</a>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})

/** See https://angular.io/docs/ts/latest/guide/router.html
 * for better understanding
 */
@RouteConfig([
  { // Crisis Center child route
    path: '/crisis-center/...',
    name: 'CrisisCenter',
    component: CrisisCenterComponent,
    useAsDefault: true
  },
  {path: '/heroes',   name: 'Heroes',     component: HeroListComponent},
  {path: '/hero/:id', name: 'HeroDetail', component: HeroDetailComponent},
  {path: '/disaster', name: 'Asteroid', redirectTo: ['CrisisCenter', 'CrisisDetail', {id:3}]}
])
export class AppComponent { }