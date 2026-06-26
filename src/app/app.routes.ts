import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { GenerateRecipePage } from './pages/generate-recipe-page/generate-recipe-page';
import { PreferencesPage } from './pages/preferences-page/preferences-page';
import { LoadingPage } from './pages/loading-page/loading-page';
import { ResultsPage } from './pages/results-page/results-page';
import { RecipePage } from './pages/recipe-page/recipe-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'generate-recipe', component: GenerateRecipePage },
  { path: 'preferences', component: PreferencesPage },
  { path: 'loading', component: LoadingPage },
  { path: 'results', component: ResultsPage },
  { path: 'recipe', component: RecipePage },
];
