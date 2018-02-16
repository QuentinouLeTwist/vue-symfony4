import {EventEmitter, Injectable} from '@angular/core';
import {UserEvent} from "./user-event";
import {UserEventType} from "./user-event-type";

@Injectable()
export class UserEventEmitter {

  onFetchSuccess$ = new EventEmitter();
  onFetchFailure$ = new EventEmitter();

  emitFetchSuccess(type: string, data: {}) {
    this.onFetchSuccess$.emit(
      new UserEvent(type, data)
    );
  }

  emitFetchFailure(type: string, data: {}) {
    this.onFetchFailure$.emit(
      new UserEvent(type, data)
    );
  }
}