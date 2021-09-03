import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './shared/shared.module';

import { HttpClient, HttpClientModule} from '@angular/common/http';


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
