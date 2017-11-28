import { NgModule }           from '@angular/core';
import { NoteModule }         from '../note/note.module';
import { NoteListComponent }  from './note-list.component';
import { CommonModule }       from '@angular/common';
import { NotesMediator }      from '../../../api/redux/mediators/notes.mediator';

@NgModule({
  imports:      [ CommonModule, NoteModule ],
  declarations: [ NoteListComponent ],
  exports:      [ NoteListComponent ],
  providers:    [ NotesMediator ]
})
export class NoteListModule {}
