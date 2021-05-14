import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { SpeedDialComponent } from './components/speed-dial/speed-dial.component';




const routes: Routes = [
  { path: '', component: SpeedDialComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
