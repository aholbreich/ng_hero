import {Component} from 'angular2/core';
import {HighlightDirective} from './highlight.directive'


@Component({
 // selector: 'my-app',
  templateUrl: 'app/attribute-directive/highlight.html',
  directives: [HighlightDirective]
})

export class HighliterComponent { }