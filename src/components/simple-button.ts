import { LabelValue } from 'src/interfaces/stepper.entities';
import { simpleButtonStyles } from '../styles';
import { customElement, property } from 'lit/decorators'
import { html, LitElement } from 'lit';

@customElement('simple-button')
export class SimpleButton extends LitElement {
  @property({ converter: Object })
  config = {} as LabelValue;

  static styles = [simpleButtonStyles];

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    const { label } = this.config;
    return html`
      <div class="btn">
        <input class="button-6" type="button" value="${label}">
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'simple-button': SimpleButton;
  }
}
