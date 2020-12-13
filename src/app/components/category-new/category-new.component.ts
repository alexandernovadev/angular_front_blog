import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from '../../models/categoty';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.css']
})
export class CategoryNewComponent implements OnInit {


  page_title = 'Crear Nueva Categoria';
  identity;
  token;
  category: Category;
  status = '';

  constructor(
    private _userService: UserService,
    private _categoryService: CategoryService,
    private _router: Router,
    private _activateroute: ActivatedRoute
    )
  {
    this.identity = _userService.getIdentity();
    this.token = _userService.getToken();

    this.category = new Category(1,'');
  }

  ngOnInit()
  {

  }

  enviarnewCategoria(form)
  {
    console.log(this.category);
    this._categoryService.addnewCategory(this.token ,this.category).subscribe(
      response => 
      {
        this.status = response.status;
        // console.log("HABEr", response);

        setTimeout(() => {
          this._router.navigate(['/home']);
        }, 1500);
      },
      error =>
      {

      }
    
    );
  }
}
