import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from 'src/app/models/post';
import { urlglobal } from '../../services/apiglobal';
import { UserService } from 'src/app/services/user.service';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  page_title
  posts;
  url;
  indentity;
  token;

  iduser;

  constructor(private _activeRoute:ActivatedRoute,
              private _postService: PostService, 
              private _userService: UserService
            )
  {
   this.iduser = +_activeRoute.snapshot.params.id

   //console.log(this.iduser);
   
    this.url = urlglobal.url;
    this.indentity = _userService.getIdentity();
    this.token = _userService.getToken();

  
  }

  
  ngOnInit() 
  {
    this.getPosts(this.iduser);
  }

  getPosts(userId)
  {
    this._userService.getPosts(userId).subscribe(
      response =>
      {
        if(response.status == 'success')
        {
          // console.log(response);
          this.posts = response.post
          //console.log(this.posts);

          this.page_title = `Post de ${this.posts[0].user.name} ${this.posts[0].user.surname}`; 
        }
      },
      error => 
      {

      }
    );
  }



}
