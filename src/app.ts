import { customElement, html, LitElement } from 'lit-element';
import { StepperConfig } from './interfaces';
import './views';
import './components';

@customElement('generic-stepper')
export class GenericStepper extends LitElement {
  config = {} as StepperConfig;

  connectedCallback(): void {
    super.connectedCallback();
    const data = this.children[0];
    this.config = JSON.parse(data.innerHTML);
  }

  render() {
    const { title, fields, buttons } = this.config;
    return html`
      <stepper-header .config=${{ title }}></stepper-header>
      <stepper-body .config=${{ fields }}></stepper-body>
      <stepper-footer .config=${{ buttons }}></stepper-footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'generic-stepper': GenericStepper;
  }
}
