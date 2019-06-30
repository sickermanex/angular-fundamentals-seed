import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';


@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count [items]="passengers">
      </passenger-count>
      <passenger-detail *ngFor="let passenger of passengers" 
      [detail]="passenger"
      (edit)="handleEdit($event)"
      (remove)="handleRemove($event)">
      </passenger-detail>
    </div>
  `
})

export class PassengerDashboardComponent implements OnInit{
  passengers: Passenger[];
  constructor(){}
  ngOnInit(){
    this.passengers = [
      {
        id: 1,
        fullname: 'Manuel Vasquez Pimentel',
        checkedIn: true,
        checkInDate: null,
        children: null
      },
      {
        id: 2,
        fullname: 'Keylor Vasquez Clavijo',
        checkedIn: true,
        checkInDate: null,
        children: null
      },
      {
        id: 3,
        fullname: 'Rosana Vasquez Pimentel',
        checkedIn: false,
        checkInDate: null,
        children: null
      },
      {
        id: 4,
        fullname: 'Norma Pimentel Campuzano',
        checkedIn: false,
        checkInDate: null,
        children: null
      }
    ];
  }
  handleRemove(event){
    console.log(event);
  }

  handleEdit(event){
    console.log(event)
  }
}