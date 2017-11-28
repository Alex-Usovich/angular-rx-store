import { FormGroup } from '@angular/forms';

export class FormHelper {

  protected __formErrors:  any = {};

  public get formErrors() {
    return this.__formErrors;
  }

  public clearTimings() {
    Object.keys(this.formErrors)
      .forEach((key) => {
        if (this.formErrors[key].timeoutInstance) {
          clearTimeout(this.formErrors[key].timeoutInstance);
        }
      });
  }

  // TODO: refactor to immutable approach
  public stabilizeControl(key: string) {
    this.formErrors[key].state = false;

    if (this.formErrors[key].timeoutInstance) {
      clearTimeout(this.formErrors[key].timeoutInstance);
    }
  }

  public stabilizeForm(formGroup: FormGroup) {
    this.__formErrors = Object.keys(this.formErrors)
      .reduce((previous, currentKey) => {
        return {
          ...previous,
          [currentKey] : {
            ...this.formErrors[currentKey],
            state           :  !formGroup.controls[currentKey].valid,
            timeoutInstance :  !formGroup.controls[currentKey].valid
              ? setTimeout(() => {
                this.__formErrors = Object.keys(this.formErrors)
                  .reduce((asyncPrevious, asyncCurrentKey) => {
                    if(currentKey === asyncCurrentKey) {
                      return {
                        ...asyncPrevious,
                        [asyncCurrentKey] : {
                          ...this.formErrors[currentKey],
                          state: false
                        }
                      };
                    }

                    return {
                      ...asyncPrevious,
                      [asyncCurrentKey] : this.formErrors[asyncCurrentKey]
                    };
                  }, {});
              }, this.formErrors[currentKey].timeout)
              : undefined
          }
        };
      }, {});
  }
}
