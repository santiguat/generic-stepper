import { StepperConfig } from './interfaces';
import './views';
import './components';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { generalStyles } from './styles';

export enum StepChange {
  Previous = 'prev',
  Next = 'next',
}

@customElement('generic-stepper')
export class GenericStepper extends LitElement {
  config = {} as StepperConfig;

  @property()
  stepChange: string;

  static styles = [generalStyles];

  private _handleNextPage(event: Event): void {
    const { detail } = (event as CustomEvent) || {};

    this.stepChange = detail.direction === StepChange.Next ? StepChange.Next : StepChange.Previous;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('buttonPressed', this._handleNextPage);

    const data = Array.from(this.children)[0];
    this.config = JSON.parse(data ? data.innerHTML : '');
  }

  render() {
    const { title, steps, buttons } = this.config;
    return html`
      <stepper-header .config=${{ title, steps }}></stepper-header>
      <stepper-body .config=${{ steps }} .stepChange=${this.stepChange}></stepper-body>
      <stepper-footer .config=${{ buttons }}></stepper-footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'generic-stepper': GenericStepper;
  }
}
