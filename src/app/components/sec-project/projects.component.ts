import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  displayAlert() : void {
    alert('Project Button is clicked!')
  }
  displayCopy() : void{
    alert('Copy is not allowed!');
  }
}
