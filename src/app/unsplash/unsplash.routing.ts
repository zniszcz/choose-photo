import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './news-list.component';
import { SearchListComponent } from './search-list.component';
import { AuthoriseComponent } from './authorise.component';

const routesConfig:Routes = [
  {path:'news', component: NewsListComponent },
  {path:'search', component: SearchListComponent },
  {path: 'auth', component: AuthoriseComponent },
];

export const routerModule = RouterModule.forChild(routesConfig);
