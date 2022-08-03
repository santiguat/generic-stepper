import { LitElement, html, PropertyValues, PropertyValueMap } from 'lit';
import { customElement, property } from 'lit/decorators';
import { StepChange } from '../app';

@customElement('motion-carousel')
export class MotionCarousel extends LitElement {
  private previous = 0;
  selectedInternal = 0;

  get maxSelected() {
    return this.childElementCount - 1;
  }

  @property({ type: Number })
  selected = 0;

  @property({ type: String })
  stepChange = '';

  connectedCallback(): void {
    super.connectedCallback();
  }

  protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    const detail = { renderRoot: this.shadowRoot?.host };
    const event = new CustomEvent('carouselRendered', { detail, bubbles: true, composed: true });
    this.dispatchEvent(event);
  }

  protected updated(changedProperties: PropertyValues) {
    if (changedProperties.has('selected') && this.hasValidSelected()) {
      this.updateSlots();
      this.previous = this.selected;
    }

    if (changedProperties.has('stepChange')) {
      this.stepHandler();
    }
  }

  private updateSlots() {
    this.children[this.previous]?.removeAttribute('slot');
    this.children[this.selected]?.setAttribute('slot', 'selected');
  }

  private stepHandler() {
    const i = this.selected + (this.stepChange === StepChange.Next ? 1 : this.selected ? -1 : 0);
    this.selected = i > this.maxSelected ? 0 : i < 0 ? this.maxSelected : i;
    const change = new CustomEvent('change', { detail: this.selected, bubbles: true, composed: true });

    this.dispatchEvent(change);
  }

  hasValidSelected() {
    return this.selected >= 0 && this.selected <= this.maxSelected;
  }

  render() {
    if (this.hasValidSelected()) {
      this.selectedInternal = this.selected;
    }
    return html`
      <div id="carousel" class="fit">
        <slot name="selected"></slot>
      </div>
    `;
  }
}
