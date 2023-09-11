import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderstatusService } from './shared/services/loaderstatus.service';

@Injectable()
export class RequestsInterceptor implements HttpInterceptor {

  constructor(private LoaderstatusServices: LoaderstatusService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.LoaderstatusServices.toggleStauts(true);
    return next.handle(request).pipe(finalize(() => { this.LoaderstatusServices.toggleStauts(false) }));
  }
}
