import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MycollectionComponent } from './mycollection/mycollection.component';

const routes: Routes = [{ path: '', component: MycollectionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesCollectionRoutingModule {}
