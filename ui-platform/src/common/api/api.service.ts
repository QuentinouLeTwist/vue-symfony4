import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isFunction } from 'util';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { ApiResponseException } from "./exception/api-response-exception";

const apiUrl = environment.apiUrl;

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  async fetch(apiResourceUrl: string, callbackResolve?: Function|null, callbackReject?: Function|null) {
    return this.toPromise(this.http.get(`${apiUrl}/${apiResourceUrl}`), callbackResolve, callbackReject);
  }

  async post(apiResourceUrl: string, body: any, callbackResolve?: Function|null, callbackReject?: Function|null) {
    return this.toPromise(this.http.post(`${apiUrl}/${apiResourceUrl}`, body), callbackResolve, callbackReject);
  }

  private toPromise(request: Observable<Object>,  callbackResolve?: Function|null, callbackReject?: Function|null) {
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
        throw new ApiResponseException(error);
      });
  }

}
