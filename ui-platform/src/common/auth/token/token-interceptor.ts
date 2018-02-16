import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {AuthService} from '../auth.service';
import TokenSessionStorage from "./token-session-storage";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (TokenSessionStorage.isTokenExists()) {
          req = req.clone({
            setHeaders: {
              Authorization: `Bearer ${TokenSessionStorage.getToken()}`
            }
          });
        }

        return next.handle(req);
    }
}
