import { LitElement } from 'lit-element';
import { StepperConfig } from '../interfaces';
export declare class StepperHeader extends LitElement {
    config: StepperConfig;
    static styles: import("lit-element").CSSResult;
    connectedCallback(): void;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'stepper-header': StepperHeader;
    }
}
//# sourceMappingURL=stepper-header.d.ts.map