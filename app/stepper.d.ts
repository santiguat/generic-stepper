import { LitElement } from 'lit-element';
import { StepperConfig } from './interfaces';
export declare class Stepper extends LitElement {
    config: StepperConfig;
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-stepper': Stepper;
    }
}
//# sourceMappingURL=stepper.d.ts.map