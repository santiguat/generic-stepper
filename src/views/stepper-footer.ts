import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators';
import { ButtonsConfig } from 'src/interfaces/stepper.entities';
import { stepperFooterStyles } from '../styles';

@customElement('stepper-footer')
export class StepperFooter extends LitElement {
  @property({ converter: Object })
  config = {} as { buttons: ButtonsConfig};

  static styles = [stepperFooterStyles];

  connectedCallback() {
    super.connectedCallback();
    console.log(this.config);
  }

  render() {
    const { buttons } = this.config;
    const buttonKeys = Object.keys(buttons);
    return html` <div class="btns-container">
      ${buttonKeys.map(
        (key: string) =>
          html`<simple-button .id="${key}" .config="${buttons[key as keyof ButtonsConfig]}"></simple-button> `
      )}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'stepper-footer': StepperFooter;
  }
}
