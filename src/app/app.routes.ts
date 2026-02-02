import { Routes } from '@angular/router';
import { SelectRole } from './features/select-role/select-role';
import { DataView } from './features/data-view/data-view';
import { roleGuard } from './core/guards/role-guard';
import { SingleUser } from './features/single-user/single-user';
import { SingleProduct } from './features/single-product/single-product';
import { NotFound } from './features/not-found/not-found';

export const routes: Routes = [
    {
        path: "",
        component: SelectRole
    },
    {
        path: "data",
        component: DataView,
        canActivate: [roleGuard]
    },
    {
        path: "users/:id",
        component: SingleUser,
        canActivate: [roleGuard]
    },
    {
        path: "products/:id",
        component: SingleProduct,
        canActivate: [roleGuard]
    },
    { path: '**', component: NotFound },

];
