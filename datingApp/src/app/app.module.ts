import { MyAgeLabel } from './pipes/age-label.pipe';
import { MyNameLabel } from './pipes/name-label.pipe';
import { ProfileComponent } from './profile/profile.component';
import { SimilarListComponent } from './similarlist/similarlist.component';
import { ShortProfileComponent } from './shortprofile/shortprofile.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ImageComponent } from 'src/app/myImage/image.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ShortProfileComponent,
    SimilarListComponent,
    ImageComponent,
    MyNameLabel,
    MyAgeLabel
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
