import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './shared/shared.module';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpClientModule, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorInterceptor } from './jwt-interceptor.interceptor';
import { AuthGuard } from './shared/guards/auth.guard';
import { AuthServiceService } from './auth/services/auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,


    // AuthGuard,
    // AuthServiceService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: JwtInterceptorInterceptor,
    //   multi: true}
  ],
  exports: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
