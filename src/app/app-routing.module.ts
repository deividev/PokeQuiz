import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { IconsComponent } from './shared/ui-kit/icons/icons.component';

const routes: Routes = [

  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth',  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {
    path: 'Ui',
    component: IconsComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
