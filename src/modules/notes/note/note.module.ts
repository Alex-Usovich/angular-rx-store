import { NgModule }       from '@angular/core';
import { NoteComponent }  from './note.component';
import { CommonModule }   from '@angular/common';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ NoteComponent ],
  exports:      [ NoteComponent ]
})
export class NoteModule {}
