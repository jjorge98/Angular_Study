import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { EventsComponent } from './components/events/events.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { FireworksComponent } from './components/fireworks/fireworks.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'emitter', component: EmitterComponent },
  { path: 'event', component: EventsComponent },
  { path: 'ifRender', component: IfRenderComponent },
  { path: 'list', component: ListRenderComponent },
  { path: 'parentData', component: ParentDataComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'twoWay', component: TwoWayBindingComponent },
  { path: 'list/:id', component: ItemDetailComponent },
  { path: 'fireworks', component: FireworksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
