import { StepperConfig } from './interfaces';
import './views';
import './components';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('generic-stepper')
export class GenericStepper extends LitElement {
  config = {} as StepperConfig;

  connectedCallback(): void {
    super.connectedCallback();
    const data = Array.from(this.children)[0];
    this.config = JSON.parse(data ? data.innerHTML : '');
  }

  render() {
    const { title, steps, buttons } = this.config;
    return html`
      <stepper-header .config=${{ title, steps }}></stepper-header>
      <stepper-body .config=${{ steps }}></stepper-body>
      <stepper-footer .config=${{ buttons }}></stepper-footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'generic-stepper': GenericStepper;
  }
}
