import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CategoryService } from '../../services/category.service';
import { Post } from 'src/app/models/post';
import { urlglobal } from '../../services/apiglobal';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.css']
})
export class PostNewComponent implements OnInit {

  public page_title: string;
  public status: string;
  public post:Post;
  public identity;
  public token;
  public categories;
  urlapi = urlglobal.url;
  resetVar=''
  public error_img: boolean
  
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

  constructor(private _route: Router,
              private _activeRouter: ActivatedRoute,
              private _userService: UserService,
              private _categoryService: CategoryService,
              private _postService: PostService )
  {
    this.page_title = 'Crear un Nuevo Post';
    this.status = '';
    this.token = _userService.getToken();
    this.identity = _userService.getIdentity();
    this.error_img = false

    this.post = new Post(
      1,
      this.identity.sub,
      1,
      'Colombia has a vibrant collage of talent that touches a full spectrum of rhythms. Musicians, composers, music producers and singers from Colombia are recognized internationally such as Shakira, Juanes, Carlos Vives and others.[343] Colombian music blends European-influenced guitar and song structure with large gaita flutes and percussion instruments from the indigenous population, while its percussion structure and dance forms come from Africa. Colombia has a diverse and dynamic musical environment',
      '',
      'Colmbia',
      ''
    );

    // console.log(this.token );
    
  }

  ngOnInit() 
  {
    this.getCategories();
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

  newpost(form)
  { 
    this.error_img = false
    // console.log(this.post);
    this._postService.create(this.token, this.post).subscribe(
      response => 
      {
        if(response.status == 'success')
        {
          this.status = response.status;
          setTimeout(() => {
            this._route.navigate(['/home']);

          }, 1500);
        }
        console.log(response.status);
      },
      error => 
      {
    
      }
    );
    
  }

  ImagenUpload(datos)
  {
    let image_data = JSON.parse(datos.response);
    this.post.image = image_data.nameimage;
  }

}
