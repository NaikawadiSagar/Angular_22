import { Routes } from '@angular/router';
import { Userpage } from './components/userpage/userpage';
import { Admin } from './components/admin/admin';
import { Databinding } from './components/databinding/databinding';
import { DirectiveControlFlow } from './components/directive-control-flow/directive-control-flow';
import { DynamicCss } from './components/dynamic-css/dynamic-css';
import { BatchMaster } from './components/batch-master/batch-master';

export const routes: Routes = [

    {
        path:"user-page",
        component:Userpage
    },
    {
        path:"admin",
        component:Admin
    },
    {
        path:"dataBinding",
        component:Databinding
    },
    {
        path:"directive-control",
        component:DirectiveControlFlow
    },
    {
        path:"dynamic-css",
        component:DynamicCss
    },
    {
        path:"batch-master",
        component:BatchMaster
    }
];
