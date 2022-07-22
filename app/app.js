var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, html, LitElement } from '../../node_modules/lit-element/lit-element.js';
import './views';
let GenericStepper = class GenericStepper extends LitElement {
    constructor() {
        super(...arguments);
        this.config = {};
    }
    connectedCallback() {
        super.connectedCallback();
        const data = this.children[0];
        this.config = JSON.parse(data.innerHTML);
    }
    render() {
        return html ` <stepper-header .config=${this.config}></stepper-header> `;
    }
};
GenericStepper = __decorate([
    customElement('generic-stepper')
], GenericStepper);
export { GenericStepper };
//# sourceMappingURL=app.js.map