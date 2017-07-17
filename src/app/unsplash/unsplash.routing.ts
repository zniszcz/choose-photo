import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './news-list.component';

const routesConfig:Routes = [
  {path:'news', component: NewsListComponent },
];

export const routerModule = RouterModule.forChild(routesConfig);
