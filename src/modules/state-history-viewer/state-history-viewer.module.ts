import { NgModule }                           from '@angular/core';
import { StateHistoryViewerNavigationModule } from './state-history-viewer-navigation/state-history-viewer-navigation.module';
import { StateHistoryViewerOutputModule }     from './state-history-viewer-output/state-history-viewer-output.module';
import { StateHistoryViewerComponent }        from './state-history-viewer.component';
import { NoteListModule }                     from '../notes/note-list/note-list.module';

@NgModule({
  imports:      [ StateHistoryViewerNavigationModule, StateHistoryViewerOutputModule, NoteListModule ],
  declarations: [ StateHistoryViewerComponent ],
  exports:      [ StateHistoryViewerComponent ]
})
export class StateHistoryViewerModule {}
