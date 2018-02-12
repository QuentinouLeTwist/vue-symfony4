import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isFunction } from 'util';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  async fetch(apiResourceUrl: string, callbackResolve?: Function, callbackReject?: Function) {
    return this.toPromise(this.http.get(`${apiUrl}/${apiResourceUrl}`), callbackResolve, callbackReject);
  }

  async post(apiResourceUrl: string, body: any, callbackResolve?: Function, callbackReject?: Function) {
    return this.toPromise(this.http.post(`${apiUrl}/${apiResourceUrl}`, body), callbackResolve, callbackReject);
  }

  private toPromise(request: Observable<Object>,  callbackResolve?: Function, callbackReject?: Function) {
    return request.toPromise()
      .then(response => {
        if (isFunction(callbackResolve)) {
          callbackResolve(response);
        }
        return response;
      })
      .catch(error => {
        if (isFunction(callbackReject)) {
          callbackReject(error);
        }
        console.log(error);
      });
  }

}
