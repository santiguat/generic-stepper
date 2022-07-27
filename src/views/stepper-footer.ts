import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators';
import { LabelValue } from 'src/interfaces/stepper.entities';
import { stepperFooterStyles } from '../styles';

@customElement('stepper-footer')
export class StepperFooter extends LitElement {
  @property({ converter: Object })
  config = {} as { buttons: LabelValue[] };

  static styles = [stepperFooterStyles];

  connectedCallback() {
    super.connectedCallback();
    console.log(this.config);
  }

  render() {
    const { buttons } = this.config;
    return html` <div class="btns-container">
      ${buttons.map(
        (btn: LabelValue) =>
          html`<simple-button .config="${btn}"></simple-button> `
      )}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'stepper-footer': StepperFooter;
  }
}
