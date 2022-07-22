var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, html, LitElement, property } from 'lit-element';
let Stepper = class Stepper extends LitElement {
    constructor() {
        super(...arguments);
        this.config = {};
    }
    connectedCallback() {
        super.connectedCallback();
        console.log('ok');
    }
    render() {
        const { title } = this.config;
        return html ` <h3>${title}</h3> `;
    }
};
__decorate([
    property({ converter: Object })
], Stepper.prototype, "config", void 0);
Stepper = __decorate([
    customElement('generic-stepper')
], Stepper);
export { Stepper };
//# sourceMappingURL=stepper.js.map