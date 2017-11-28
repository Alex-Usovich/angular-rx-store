import { NgModule }             from '@angular/core';
import { ReactiveFormsModule }  from '@angular/forms';
import { NoteFormComponent }    from './note-form.component';
import { NoteFormHelper }       from '../../../api/helpers/note-form.helper';
import { CommonModule }         from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ NoteFormComponent ],
  exports:      [ NoteFormComponent ],
  providers:    [ NoteFormHelper]
})
export class NoteFormModule {}
