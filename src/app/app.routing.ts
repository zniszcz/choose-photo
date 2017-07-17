import { RouterModule, Routes } from '@angular/router';

const routesConfig:Routes = [
  {path:'', redirectTo: 'news', pathMatch:'full' },
  {path:'**', redirectTo: 'news', pathMatch:'full' },
];

export const routerModule = RouterModule.forRoot(routesConfig,{
  //enableTracing: true,
  //useHash: true
});
