import { LitElement } from 'lit-element';
import { StepperConfig } from '../interfaces';
export declare class Stepper extends LitElement {
    config: StepperConfig;
    connectedCallback(): void;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'generic-stepper': Stepper;
    }
}
//# sourceMappingURL=stepper.d.ts.map