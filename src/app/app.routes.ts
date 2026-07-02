import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { GenerateRecipePage } from './pages/generate-recipe-page/generate-recipe-page';
import { PreferencesPage } from './pages/preferences-page/preferences-page';
import { LoadingPage } from './pages/loading-page/loading-page';
import { ResultsPage } from './pages/results-page/results-page';
import { RecipePage } from './pages/recipe-page/recipe-page';
import { CookbookPage } from './pages/cookbook-page/cookbook-page';
import { CatRecipePage } from './pages/cat-recipe-page/cat-recipe-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'generate-recipe', component: GenerateRecipePage },
  { path: 'preferences', component: PreferencesPage },
  { path: 'loading', component: LoadingPage },
  { path: 'results', component: ResultsPage },
  { path: 'recipe/:id', component: RecipePage },
  { path: 'cookbook', component: CookbookPage },
  { path: 'recipes/:id', component: CatRecipePage },
];
