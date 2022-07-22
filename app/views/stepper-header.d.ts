import { LitElement } from '../../../node_modules/lit-element/lit-element.js';
import { StepperConfig } from '../interfaces';
export declare class StepperHeader extends LitElement {
    config: StepperConfig;
    connectedCallback(): void;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'stepper-header': StepperHeader;
    }
}
//# sourceMappingURL=stepper-header.d.ts.map