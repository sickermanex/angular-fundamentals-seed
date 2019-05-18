import { Component } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';


@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <h3>Airline Passengers</h3>
      <ul>
          <li *ngFor="let passenger of passengers; let i = index;">
          <span 
              class="status"
              [ngClass]="{ 'checked-in': passenger.checkedIn }"
          ></span>
          {{ i }}: {{ passenger.fullname }}
          </li>
      </ul>
    </div>
  `
})

export class PassengerDashboardComponent {
  passengers: Passenger[] = [
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