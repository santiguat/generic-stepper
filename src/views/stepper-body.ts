import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators';
import { LabelValue, Step } from 'src/interfaces/stepper.entities';
import { StateMixin } from 'src/mixins/state.mixin';
import { StepperConfig } from '../interfaces';

@customElement('stepper-body')
export class StepperBody extends StateMixin(LitElement) {
  @property({ converter: String })
  stepChange: string;

  @property({ converter: Object })
  config = {} as StepperConfig;


  connectedCallback(): void {
    super.connectedCallback();
    this.
  }

  render() {
    const { steps } = this.config;
    const formattedSteps = steps.map((step: Step) => ({
      name: step.label,
      fields: step.fields.map((field: LabelValue) => html`<input-field .fieldConfig="${field}"></input-field>`),
    }));

    const builtForm = html`${formattedSteps.map((step) => {
      const fieldsContainer = html`
        <div><h4>${step.name}</h4>${step.fields}</div>
        `;
      return html` ${fieldsContainer}`;
    })}`;
    
    return html`<motion-carousel .stepChange=${this.stepChange}>${builtForm}</motion-carousel>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'stepper-body': StepperBody;
  }
}
