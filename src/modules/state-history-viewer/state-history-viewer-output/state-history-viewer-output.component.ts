import { Component, Input } from '@angular/core';

@Component({
  selector:     'state-history-viewer-output',
  templateUrl:  './state-history-viewer-output.component.html',
  styleUrls:    ['./state-history-viewer-output.component.css']
})
export class StateHistoryViewerOutputComponent {
  @Input() public presentState$;
}
