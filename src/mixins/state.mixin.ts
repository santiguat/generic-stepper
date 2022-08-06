import {LitElement} from 'lit';
import { property } from 'lit/decorators';

type Constructor<T = {}> = new (...args: any[]) => T;


export const StateMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class State extends superClass {
    @property({ converter: Object }) state = {};
  }
  return State as Constructor<{}> & T;
}