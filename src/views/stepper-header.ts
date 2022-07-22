import {css, customElement, html, LitElement, property} from 'lit-element';
import {StepperConfig} from '../interfaces';

@customElement('stepper-header')
export class StepperHeader extends LitElement {
  @property({converter: Object})
  config = {} as StepperConfig;

  static styles = css`
    h3 {
      color: green;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    console.log(this.config);

  }

  render() {
    const {title} = this.config;
    return html`<h3>${title}</h3>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'stepper-header': StepperHeader;
  }
}
