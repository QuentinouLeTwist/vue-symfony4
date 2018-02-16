import {AuthenticationEventType} from "./authentication-event-type";

export class AuthenticationEvent {
  constructor(public type: string, public data: any) {}
}