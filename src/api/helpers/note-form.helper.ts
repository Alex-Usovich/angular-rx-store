import { FormHelper } from './form.helper';
import { Injectable } from '@angular/core';

@Injectable()
export class NoteFormHelper extends FormHelper {
  constructor(){
    super();
      this.__formErrors = {
        text: {
          state:            false,
          timeout:          5000,
          timeoutInstance:  undefined
        }
      }
  }
}
