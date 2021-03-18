import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BEMComponent } from './bem/bem.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { FlexboxComponent } from './flexbox/flexbox.component';

const routes: Routes = [
  {path:'bem', component: BEMComponent},
  {path:'flexbox', component: FlexboxComponent},
  {path:'bootstrap', component: BootstrapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
