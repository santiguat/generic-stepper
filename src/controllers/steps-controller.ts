// import { ReactiveController, ReactiveControllerHost } from 'lit';
// import { BehaviorSubject, Observable } from 'rxjs';

// export interface State {
//   currentStep: string;
// }

// export class StepController implements ReactiveController {
//   host: ReactiveControllerHost;
//   stepperState: State = {currentStep: ''}
//   currentStep$: Observable<string>;

//   private currentStepSubject: BehaviorSubject<string> = new BehaviorSubject('');

//   constructor(host: ReactiveControllerHost, step: string) {
//     (this.host = host).addController(this);
//     this.currentStepSubject.next(step);
//     this.currentStep$ = this.currentStepSubject.asObservable();
//   }

//   hostConnected() {
//     // Start a timer when the host is connected
//    this.stepperState = { currentStep: this.currentStepSubject.value }
//    this.host.requestUpdate();
  
//   }
//   hostDisconnected() {
//     console.log('foo')
//   }
// }