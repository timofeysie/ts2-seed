import {Directive, ElementRef, Renderer, Input} from 'angular2/core';
@Directive({
  selector: '[myHighlight]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
/**
 * The highlightColor property is called an "input" property because data
 *  flows from the binding expression into our directive
 */
export class HighlightDirective {
  @Input('myHighlight') highlightColor: string;
  private _defaultColor = 'DarkSalmon';
   @Input() set defaultColor(colorName:string){
    this._defaultColor = colorName || this._defaultColor;
  }
  constructor(private el: ElementRef, private renderer: Renderer) { }
  onMouseEnter() { this._highlight(this.highlightColor || this._defaultColor); }
  onMouseLeave() { this._highlight("LightGoldenRodYellow"); }
  private _highlight(color:string) {
    this.renderer.setElementStyle(this.el, 'backgroundColor', color);
  }
}