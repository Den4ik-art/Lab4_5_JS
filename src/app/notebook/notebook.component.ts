import { Component } from '@angular/core';
import { Notebook } from '../Class/notebook';
import { NotebookCover } from '../Class/notebookcover';

@Component({
  selector: 'app-notebook',
  imports: [],
  templateUrl: './notebook.component.html',
  styleUrl: './notebook.component.css'
})

export class NotebookComponent {
  notebook_show: string = '';
  notebookcover_show: string = '';
  calcNotebook(
    name: string,
    k: string,
    N: string,
    name1: string,
    k1: string,
    material: string,
    N1: string,
  ) {
    try {
      let notebook = new Notebook(name, parseInt(k), parseInt(N));
      let notebookcover = new NotebookCover(name1, parseInt(k1), material, parseInt(N1));
      this.notebook_show = 
        'Вартість зошитів: ' + notebook.cost() + '$'; 
      this.notebookcover_show =
        'Вартість зошитів з обкладинкою: ' + notebookcover.cost() + '$'; 
    } catch (error) {
      console.error('Помилка у вхідних даних', error);
      this.notebook_show = 'Помилка обчислень.';
      this.notebookcover_show = 'Помилка обчислень.';
    }
  } 

}