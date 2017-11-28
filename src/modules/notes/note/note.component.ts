import { Component, EventEmitter, Input, Output } from '@angular/core';
/**
 * Note component related functionality
 */
@Component({
  selector:     'demo-shared-note',
  templateUrl:  './note.component.html',
  styleUrls:    [ './note.component.css' ]
})
export class NoteComponent {

  @Input()  public note;
  @Output() public toggleEditingNote$:  EventEmitter<any> = new EventEmitter<any>();
  @Output() public removeNote$:         EventEmitter<any> = new EventEmitter<any>();

  public toggleEditingNote(noteId: any, isBeingEdited: boolean) {
    this.toggleEditingNote$.emit({ id: noteId, isBeingEdited: isBeingEdited });
  }

  public removeNote(noteId: any) {
    this.removeNote$.emit({ id: noteId });
  }
}
