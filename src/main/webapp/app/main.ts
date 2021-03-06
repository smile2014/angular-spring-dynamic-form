import {bootstrap}    from '@angular/platform-browser-dynamic';
import {provide}    from '@angular/core';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import {APP_BASE_HREF, LocationStrategy,HashLocationStrategy } from '@angular/common';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS, Http,RequestOptions, XHRBackend} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/toPromise';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    APP_ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
