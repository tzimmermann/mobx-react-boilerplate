import { observable } from 'mobx';

class MobxCounterState {
  @observable counter = 0;

  incrementCounter() {
    this.counter += 1;
  }

  decrementCounter() {
    this.counter -= 1;
  }
}

export default MobxCounterState;
