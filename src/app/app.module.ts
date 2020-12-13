import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// FROALA EDITOR
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import 'froala-editor/js/plugins.pkgd.min.js';

// File UpLoader
import { AngularFileUploaderModule } from "angular-file-uploader";


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ROUTING, APPROUTINGPROVIDERS } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { HttpClientModule } from '@angular/common/http';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { CategoryNewComponent } from './components/category-new/category-new.component';
import { PostNewComponent } from './components/post-new/post-new.component';
import { ImagenonePipe } from './pipes/imagenone.pipe';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ErrorComponent,
    CategoriasComponent,
    UserEditComponent,
    CategoryNewComponent,
    PostNewComponent,
    ImagenonePipe,
    PostDetailComponent,
    PostEditComponent,
    CategoryDetailComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ROUTING,
    HttpClientModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    AngularFileUploaderModule
  ],
  providers: [
    APPROUTINGPROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
