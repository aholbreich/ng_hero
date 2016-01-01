import {Directive, Input} from 'angular2/core';
import {TemplateRef, ViewContainerRef} from 'angular2/core';

/**
 * Structural directive declaration.
 * 
 * The CSS syntax for selecting an attribute is a name in square brackets. We surround our directive name in square brackets
 */
@Directive({ selector: '[myUnless]' })
export class UnlessDirective {
  
  /**
   * Constructor with auto injected 
   * _templateRef https://angular.io/docs/ts/latest/api/core/TemplateRef-class.html
   * _viewContainer https://angular.io/docs/ts/latest/api/core/ViewContainerRef-class.html
   * 
   */
  constructor(
    private _templateRef: TemplateRef,
    private _viewContainer: ViewContainerRef
    ) { }
    
  /**
   * myUnless input binding
   */
  @Input() set myUnless(condition: boolean) {
    if (!condition) {
      /*
      *Instantiates an Embedded View based on the templateRef and inserts it into this container at the specified index.
      If index is not specified, the new View will be inserted as the last View in the container.
      */
      this._viewContainer.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainer.clear();
    }
  }
}