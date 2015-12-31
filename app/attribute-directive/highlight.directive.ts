import {Directive, ElementRef, Renderer, Input} from 'angular2/core';

/**
 * Directive declaration (Attribute directive)
 * https://angular.io/docs/ts/latest/guide/attribute-directives.html
 * 
 * The 'host' property refers to the DOM element that hosts our attribute directive
 */
@Directive({
  selector: '[myHighlight]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})

export class HighlightDirective {
  /*
  @Input() myHighlight: string;
  */
  @Input('myHighlight') highlightColor: string;

  private _defaultColor = 'red';
  
  @Input() set defaultColor(colorName:string){
    this._defaultColor = colorName || this._defaultColor;
  }

 /**
  * Constructor that inject el and renderer 
  */
  constructor(private el: ElementRef, private renderer: Renderer) 
  { }

  /**
   * Method bounded to mouseenter event.
   */
  onMouseEnter() { this._highlight(this.highlightColor || this._defaultColor); }
  
  /**
   * Method bounded to mouseleave event.
   */
  onMouseLeave() { this._highlight(null); }

  private _highlight(color:string) {
    this.renderer.setElementStyle(this.el, 'backgroundColor', color);
  }
}