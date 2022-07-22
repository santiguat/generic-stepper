import {customElement, html, LitElement} from 'lit-element';
import {StepperConfig} from './interfaces';
import './views';

@customElement('generic-stepper')
export class GenericStepper extends LitElement {
  config = {} as StepperConfig;

  connectedCallback(): void {
    super.connectedCallback();
    const data = this.children[0];
    this.config = JSON.parse(data.innerHTML);
  }

  render() {
    return html` <stepper-header .config=${this.config}></stepper-header> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'generic-stepper': GenericStepper;
  }
}
