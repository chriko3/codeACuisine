import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { GenerateRecipePage } from './pages/generate-recipe-page/generate-recipe-page';

export const routes: Routes = [
    {path: '', component: HomePage},
    {path: 'generate-recipe', component: GenerateRecipePage}

];
