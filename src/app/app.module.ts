import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ArticleComponent } from './components/sec-article/article.component';
import { MainComponent } from './components/main/main.component';
import { EventsComponent } from './components/sec-events/events.component';
import { ProjectsComponent } from './components/sec-project/projects.component';
import { PartnersComponent } from './components/sec-partners/partners.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticleComponent,
    MainComponent,
    EventsComponent,
    ProjectsComponent,
    PartnersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
