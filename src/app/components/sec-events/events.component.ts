import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  displayAlert(): void {
    alert('Event Button is clicked!');
  }
  displayCopy() : void{
    alert('Copy this title is not allowed!');
  }
}
