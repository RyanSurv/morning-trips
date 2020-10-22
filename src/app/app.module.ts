import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './landing/hero/hero.component';
import { LandingComponent } from './landing/landing.component';
import { VideoComponent } from './landing/video/video.component';
import { QuickShopComponent } from './landing/quick-shop/quick-shop.component';
import { SocialComponent } from './landing/social/social.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    LandingComponent,
    VideoComponent,
    QuickShopComponent,
    SocialComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
