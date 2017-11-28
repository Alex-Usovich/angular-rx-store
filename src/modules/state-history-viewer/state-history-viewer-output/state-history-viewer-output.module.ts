import { NgModule }                           from '@angular/core';
import { StateHistoryViewerOutputComponent }  from './state-history-viewer-output.component';
import { CommonModule }                       from '@angular/common';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ StateHistoryViewerOutputComponent ],
  exports:      [ StateHistoryViewerOutputComponent ]
})
export class StateHistoryViewerOutputModule {}
