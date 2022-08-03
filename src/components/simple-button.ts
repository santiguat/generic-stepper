import { LabelValue } from 'src/interfaces/stepper.entities';
import { simpleButtonStyles } from '../styles';
import { customElement, property, query } from 'lit/decorators';
import { html, LitElement } from 'lit';

@customElement('simple-button')
export class SimpleButton extends LitElement {
  @property({ converter: Object })
  config = {} as LabelValue;

  @property({ converter: String })
  id = '';

  @query('#carousel')
  carousel: any;

  static styles = [simpleButtonStyles];

  render() {
    const { label } = this.config;
    return html`
      <div class="btn">
        <input class="button-6" id="${this.id}" type="button" value="${label}" @click=${this._handleClick} />
      </div>
    `;
  }

  private _handleClick(event: Event): void {
    const detail = { direction: (event.target as HTMLElement).id };
    const customEvent = new CustomEvent('buttonPressed', { detail, bubbles: true, composed: true });
    this.dispatchEvent(customEvent);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'simple-button': SimpleButton;
  }
}
