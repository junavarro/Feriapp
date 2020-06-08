import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'detail',
        loadChildren: () => import('./detail/detail.module').then(m => m.DetailPageModule)
    },
    {
        path: 'list',
        loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
    },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class BuyerRoutingModule { }
