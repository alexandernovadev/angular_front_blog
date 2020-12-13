import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { urlglobal } from '../../services/apiglobal';
import { UserService } from '../../services/user.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit 
{
  public page_title;
  public category;
  public posts;
  public url;
  public identity;
  public token;

  constructor(private _activeRoute: ActivatedRoute,
              private _categoryService: CategoryService,
              private _userService: UserService,
              private _postService: PostService)
  {
    this.url = urlglobal.url    
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();

  }
  ngOnInit()
  {
    this.getPostByCategory();   
  }

  getPostByCategory()
  {
      this._activeRoute.params.subscribe(
        data =>
        {
          let id = +data['id'];
  
          this._categoryService.getCategory(id).subscribe(
            response =>
            {
              if (response.status == 'success')
              {
                this.category = response.category
                //console.log(response); 
                //console.log(this.category.id);
                console.log(this.identity.sub);
                console.log(this.category.user_id);
              }
            },
            error => console.log(error)  
          )        

          this._categoryService.getPosts(id).subscribe(
            response =>
            {
              if (response.status == 'success')
              {
                console.log("Aui postbycategory", response.post);
                this.posts = response.post
              }
            },error => console.log('Error', error)
            
          )
        }
      )
  }

  deletepost(id)
  {
    this._postService.deletePost(this.token, id).subscribe(
      response => 
      {
        if(response.status == 'success')
        {
          this.getPostByCategory();
        }
      },
      error =>
      {
        console.log("Error al borrar post", error);
      }
    );
  }
}
