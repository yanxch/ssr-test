import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgtUniversalModule} from '@ng-toolkit/universal';
import {TransferHttpCacheModule} from '@nguniversal/common';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommitsView} from './components/commits.view';
import {SharedModule} from './shared.module';

@NgModule({
  declarations: [
    AppComponent,
    CommitsView
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CommonModule,
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
