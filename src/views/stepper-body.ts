import { customElement, html, LitElement, property } from 'lit-element';
import { LabelValue } from 'src/interfaces/stepper.entities';
import { StepperConfig } from '../interfaces';

@customElement('stepper-body')
export class StepperBody extends LitElement {
  @property({ converter: Object })
  config = {} as StepperConfig;

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    const { fields } = this.config;
    return html`${fields.map((field: LabelValue) => html`<input-field .fieldConfig="${field}"></input-field> `)}`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'stepper-body': StepperBody;
  }
}
