import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, finalize } from 'rxjs';
import { LoaderstatusService } from './shared/services/loaderstatus.service';

@Injectable()
export class RequestsInterceptor implements HttpInterceptor {

  constructor(private LoaderstatusServices: LoaderstatusService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.LoaderstatusServices.toggleStauts(true);
    return next.handle(request).pipe(finalize(() => { this.LoaderstatusServices.toggleStauts(false) }),
    
    catchError((error: HttpErrorResponse) => {
      let errorMsg = '';
      if (error.error instanceof ErrorEvent) {
         console.log('This is client side error');
         errorMsg = `Error: ${error.error.message}`;
      } else {
         console.log('This is server side error');
         errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
      }
      console.log(errorMsg);
      throw (errorMsg)
   }));
  }
}
