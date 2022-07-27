import { LitElement, html, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators';

@customElement('motion-carousel')
export class MotionCarousel extends LitElement {
  private previous = 0;
 selectedInternal = 0;

  get maxSelected() {
    return this.childElementCount - 1;
  }

  @property({type: Number})
  selected = 0;

  protected updated(changedProperties: PropertyValues) {
    if (changedProperties.has('selected') && this.hasValidSelected()) {
      this.updateSlots();
      this.previous = this.selected;
    }
  }

  private updateSlots() {
    this.children[this.previous]?.removeAttribute('slot');
    this.children[this.selected]?.setAttribute('slot', 'selected');
  }


  hasValidSelected() {
    return this.selected >= 0 && this.selected <= this.maxSelected;
  }

  render() {
    if (this.hasValidSelected()) {
      this.selectedInternal = this.selected;
    }
    return html`
      <div class="fit">
        <slot name="selected"></slot>
      </div>
    `;
  }
}
