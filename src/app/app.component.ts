import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive} from '@angular/router';
import { HeaderComponent} from './header/header.component';
import { NotebookComponent } from './notebook/notebook.component';
import { ArrayOneComponent } from './array-one/array-one.component';
import { ArrayTwoComponent } from './array-two/array-two.component';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    HeaderComponent,
    NotebookComponent,
    RouterLink, RouterLinkActive,
    ArrayOneComponent,
    ArrayTwoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'laba9_10';
}
