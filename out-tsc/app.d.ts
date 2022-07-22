import { LitElement } from 'lit-element';
import { StepperConfig } from './interfaces';
import './views';
export declare class GenericStepper extends LitElement {
    config: StepperConfig;
    connectedCallback(): void;
    render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'generic-stepper': GenericStepper;
    }
}
//# sourceMappingURL=app.d.ts.map