import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewComponent } from "./views/new/new.component";
import { ArchivedComponent } from "./views/archived/archived.component";

const routes: Routes = [
  { path: "new", component: NewComponent },
  { path: "archived", component: ArchivedComponent },
  { path: "**", pathMatch: "full", redirectTo: "new" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
