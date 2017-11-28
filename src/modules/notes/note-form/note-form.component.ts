import { Component, OnDestroy } from '@angular/core';
import { FormControl,
  FormGroup, Validators }       from '@angular/forms';
import { NoteFormHelper }       from '../../../api/helpers/note-form.helper';
import { NotesMediator }        from '../../../api/redux/mediators/notes.mediator';
/**
 * Note Form component related functionality
 */
@Component({
  selector:     'demo-shared-note-form',
  templateUrl:  './note-form.component.html',
  styleUrls:    [ './note-form.component.css']
})
export class NoteFormComponent implements OnDestroy {
  public formGroup: FormGroup;

  constructor(
    private __notesMediator:  NotesMediator,
    private __noteFormHelper: NoteFormHelper
  ) {
    this.formGroup = new FormGroup({
      text: new FormControl('', Validators.required)
    });
  }

  public ngOnDestroy() {
    this.__noteFormHelper.clearTimings();
  }

  public add($event) {
    if (this.formGroup.valid) {
      this.__notesMediator.addNote(this.formGroup.controls['text'].value);
    } else {
      this.__noteFormHelper.stabilizeForm(this.formGroup);
    }
  }

  public hideError(key:  string) {
    this.__noteFormHelper.stabilizeControl(key);
  }

  public getFormErrors() {
    return this.__noteFormHelper.formErrors;
  }

}
