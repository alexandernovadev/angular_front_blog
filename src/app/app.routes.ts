// Clases Nesesarias de Angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { CategoryNewComponent } from './components/category-new/category-new.component';
import { PostNewComponent } from './components/post-new/post-new.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { IdentityGuard } from './identity.guard';
import { ProfileComponent } from './components/profile/profile.component';


const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'logout/:sure', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'ajustes', component: UserEditComponent, canActivate: [IdentityGuard]},
    {path: 'crear-categoria', component: CategoryNewComponent,canActivate: [IdentityGuard]},
    {path: 'crear-post', component: PostNewComponent,canActivate: [IdentityGuard]},
    {path: 'entrada/:id', component: PostDetailComponent},
    {path: 'editar-entrada/:id', component: PostEditComponent,canActivate: [IdentityGuard]},
    {path: 'registro', component: RegisterComponent},
    {path: 'perfil/:id', component: ProfileComponent},
    {path: 'categoria/:id', component: CategoryDetailComponent},
    {path: 'categorias', component: CategoriasComponent},
    {path: 'error', component: ErrorComponent},
    {path: '**', component: ErrorComponent},
];

export const APPROUTINGPROVIDERS: any[]= [];
export const ROUTING: ModuleWithProviders<any> = RouterModule.forRoot(ROUTES, { relativeLinkResolution: 'legacy' });

