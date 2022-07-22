import { css, customElement, html, LitElement, property } from 'lit-element';
import { StepperConfig } from '../interfaces';

@customElement('stepper-footer')
export class StepperFooter extends LitElement {
  @property({ converter: Object })
  config = {} as StepperConfig;

  static styles = css`
    h3 {
      color: green;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    console.log(this.config)
  }

  render() {
    const { buttons } = this.config;
    return html`<button>${buttons[0].label}</button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'stepper-footer': StepperFooter;
  }
}
