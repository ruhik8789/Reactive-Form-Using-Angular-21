import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('../features/job-application/job-application').then(m => m.JobApplication)
    }
];
