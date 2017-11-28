import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';

import { AppComponent }             from './app.component';
import { ReactiveFormsModule }      from '@angular/forms';
import { StoreService }             from '../api/redux/store.service';
import { NoteListModule }           from '../modules/notes/note-list/note-list.module';
import { NoteFormModule }           from '../modules/notes/note-form/note-form.module';
import { WelcomeModule }            from '../modules/welcome/welcome.module';
import { StateHistory }             from '../api/state-history/state-history';
import { StateHistoryViewerModule } from '../modules/state-history-viewer/state-history-viewer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    // Custom Modules
    NoteFormModule,
    NoteListModule,
    WelcomeModule,
    StateHistoryViewerModule
  ],
  providers: [ StateHistory, StoreService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
