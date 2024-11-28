import { ArrayOneComponent } from './array-one/array-one.component';
import { Routes } from '@angular/router';
import { NotebookComponent } from './notebook/notebook.component';
import { ArrayTwoComponent } from './array-two/array-two.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: 'classes', component: NotebookComponent},
    {path: 'array-one', component: ArrayOneComponent},
    {path: 'array-two', component: ArrayTwoComponent},
    {path: '', component: AppComponent }
];
