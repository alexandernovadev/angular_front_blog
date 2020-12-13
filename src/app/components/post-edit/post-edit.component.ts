import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';
import { Post } from 'src/app/models/post';
import { urlglobal } from '../../services/apiglobal';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  public token:string;
  public identity:string;

  public page_title:string;
  public post: Post;
  public status: string;
  urlapi = urlglobal.url;
  public categories;
  public id;

  opcionesfroala: Object = {
    language: 'es',
    toolbarButtons: {
      'moreText': {
        'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'paragraphFormat', 'superscript', 
        'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle',
         'clearFormatting']
      }
    }
  };

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png, .gig, .jpeg",
    maxSize: "50",
    uploadAPI:  {
      url: this.urlapi + 'post/upload',
      headers: {
      "Authorization" : this._userService.getToken()
      }
    },
    theme: "attachPin",
    hideProgressBar: false,
    hideResetBtn: false,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube Tu Imagen para el POST',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  };

  constructor(private _activeRoute: ActivatedRoute,
              private _postService: PostService,
              private _userService: UserService,
              private _categoryService:CategoryService,
              private _router:Router
)
  {
    this.token = _userService.getToken();
    this.identity = _userService.getIdentity();
    this.page_title = 'Editar Post';
    this.status = '';

    

    this._activeRoute.params.subscribe(
      data =>
      {
        this.id = +data['id'];

        _postService.getPost(this.id).subscribe(
          response => 
          {
            if (response.status == 'success')
            {
              //console.log(response.posts);
              delete response.posts['user']
              this.post = response.posts;
              
              let userid = + this.post.user_id;
              // Comprobar si el dueño del POST, para editar
              // Toco casting a int porque son string, pues eso dice el EDITOR
              if(userid != +this.identity.sub)
              {
                this._router.navigate(['/home']);
              }

            }
          },
          error => 
          {

          }
        );
      }
    );

  }

  ngOnInit()
  {
    this.getCategories()
  }

  editpost(form){
    console.log(this.post);
    this._postService.updatepost(this.token,this.post,this.id).subscribe(
      response =>
      {
        if (response.status == 'success')
        {
          this.status = response.status;
        }
      },
      error => 
      {
        console.log(error);
      }
    );
    
  }

  getCategories()
  {
    this._categoryService.getCategories().subscribe(
      response =>
      {
        // console.log(response.categories);
        this.categories = response.categories;
      }
    );
  }

  ImagenUpload(datos)
  {
    let image_data = JSON.parse(datos.response);
    this.post.image = image_data.nameimage;
  }
}
