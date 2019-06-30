import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail', 
  template: `
    <div>
      <span class="status" [ngClass]="{ 'checked-in': detail.checkedIn }"></span>
      <div *ngIf="editing">
        <input type="text" [value]="detail.fullname" (input)="onNameChange(name.value)" #name>
      </div>
      <div *ngIf="!editing">
        {{ detail.fullname }}
      </div>
      <button (click)="toggleEdit()">{{ editing ? 'Done' : 'Edit' }}</button>
      <button (click)="onRemove()">Remove</button>
    </div>
  `,
  styleUrls: ['passenger-detail.component.scss']
})

export class PassengerDetailComponent{
  @Input()
  detail: Passenger;

  @Output()
  remove = new EventEmitter();

  @Output()
  edit = new EventEmitter();

  editing: boolean = false;
  
  onNameChange(value: string){
    this.detail.fullname = value;
  }

  toggleEdit(){
    if(this.editing){
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onRemove(){
    this.remove.emit(this.detail);
  }
}