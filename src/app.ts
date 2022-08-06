import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './components';
import { StepperConfig } from './interfaces';
import { StateMixin } from './mixins/state.mixin';
import { generalStyles } from './styles';
import './views';

export enum StepChange {
  Previous = 'prev',
  Next = 'next',
}

@customElement('generic-stepper')
export class GenericStepper extends StateMixin(LitElement) {
  config = {} as StepperConfig;

  @property({ converter: Object, reflect: true })
  results = {};

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
    this.addEventListener('onSubmit', this._handleNextPage);

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
