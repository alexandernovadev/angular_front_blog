import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post:Post;
  
  constructor(private _userService: UserService,
              private _http: HttpClient,
              private _postService: PostService ,
              private _route: Router,
              private _activeRoute: ActivatedRoute)
  {

  }

  ngOnInit() 
  {
    this.getPost();
  }

  getPost()
  {
    this._activeRoute.params.subscribe(
      response => 
      {
        let id = +response['id'];
        //console.log(id);
        this._postService.getPost(id).subscribe(
          data => 
          {
            if(data.status == 'success')
            {
              this.post = data.posts;
              //console.log(data.posts);
            }
            else
            {
              this._route.navigate(['home']);
            }
            
          },
          error=> 
          {
            this._route.navigate(['home']);
           // console.log(error);
          }
        );
      }
    );

  }
}
