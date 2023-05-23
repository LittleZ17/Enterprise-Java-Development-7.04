import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  displayAlert(): void {
    alert('Article Button is clicked!');
  }
  displayCopy() : void{
    alert('Copy this title is not allowed!');
  }
}
