import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ChatComponent } from './chat/chat.component';
import { ChatPrivadoComponent } from './chat-privado/chat-privado.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'registro',
    component: RegistroComponent,
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroModule)
  },
  {
    path: 'chat',
    component: ChatComponent,
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)
  },
  {
    path: 'chatPrivado',
    component: ChatPrivadoComponent,
    loadChildren: () => import('./chat-privado/chat-privado.module').then(m => m.ChatPrivadoModule)
  },
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
