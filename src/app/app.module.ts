import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileEditComponent } from './main/profile-edit/profile-edit.component';
import { SiteEditComponent } from './main/site-edit/site-edit.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [AppComponent, ProfileEditComponent, SiteEditComponent],
	imports: [BrowserModule, AppRoutingModule, SharedModule],
	providers: [{ provide: 'environment', useValue: environment }, Title],
	bootstrap: [AppComponent],
})
export class AppModule {}
