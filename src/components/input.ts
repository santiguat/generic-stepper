import { customElement, html, LitElement, property } from 'lit-element';
import { LabelValue } from 'src/interfaces/stepper.entities';
import { inputStyles } from '../styles';

@customElement('input-field')
export class InputField extends LitElement {
  @property({ converter: Object })
  fieldConfig = {} as LabelValue;

  static styles = [inputStyles];

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    const { label, value } = this.fieldConfig;
    return html`
      <div class="input">
        <label class="input-label">${label}</label>
        <div class="input-container">
          <input
            class="effect"
            type="text"
            placeholder="Placeholder Text"
            value="${value || ''}"
          />
          <span class="focus-bg"></span>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'input-field': InputField;
  }
}
