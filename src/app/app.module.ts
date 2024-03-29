import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialLinkComponent } from './social-link/social-link.component';
import {NgOptimizedImage} from "@angular/common";
import { SocialLinksContainerComponent } from './social-links-container/social-links-container.component';
import { PersonalHeaderComponent } from './personal-header/personal-header.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { BasedInComponent } from './based-in/based-in.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialLinkComponent,
    SocialLinksContainerComponent,
    PersonalHeaderComponent,
    GetInTouchComponent,
    BasedInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
