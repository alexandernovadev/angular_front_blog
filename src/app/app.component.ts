import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';
import { urlglobal } from './services/apiglobal';
import { CategoryService } from './services/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
 
  title = 'blog-angular';
  identity: any;
  token: any;
  urlapi = urlglobal.url;
  categories;


  constructor(public _userService: UserService,
            private _categoryServie: CategoryService)
  {
    this.loadUser();
  }

  ngDoCheck()
  {
    // Cada vez que se produsca un cambio este metodo se llama
    // Y yo juraba que era el Onchangues
    this.loadUser();

  }
  ngOnInit()
  {
    this.getCategories();
  }

  loadUser()
  {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken(); 
  }

  getCategories()
  {
    this._categoryServie.getCategories().subscribe(
      response => 
      {
        if (response.status == 'success') 
        {
          this.categories = response.categories;
          //console.log(this.categories);
        }
      },
      error =>
      {
        console.log("Error al cargar categories", error);
      }
    );
  }

}
