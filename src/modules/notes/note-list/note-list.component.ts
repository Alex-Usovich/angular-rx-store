import { Component, Input,
  OnChanges, OnDestroy,
  OnInit }                from '@angular/core';
import { NotesMediator }  from '../../../api/redux/mediators/notes.mediator';
import { Subscription }   from 'rxjs/Subscription';
/**
 * Note List Component related functionality
 */
@Component({
  selector:     'demo-shared-note-list',
  templateUrl:  './note-list.component.html',
  styleUrls:    [ './note-list.component.css' ]
})
export class NoteListComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public presentState$;
  @Input() public notes$;

  public notes: any = [];
  public notesSubscription:   Subscription;

  constructor(
    private __notesMediator:  NotesMediator
  ) {}

  public ngOnInit() {
    this.notesSubscription = this.__notesMediator.getNotes()
      .subscribe((state) => {
        if (state) {
          this.notes = state;
        }
      });
  }

  public ngOnDestroy() {
    if (this.notesSubscription) {
      this.notesSubscription.unsubscribe();
    }
  }

  public ngOnChanges(changes) {
    if (changes.notes$ && changes.notes$.currentValue) {
      this.notes = changes.notes$.currentValue;
    }
  }

  public toggleEditingNote($event) {
    this.__notesMediator.toggleEditingNote($event);
  }

  public removeNote($event) {
    this.__notesMediator.removeNote($event);
  }
}
