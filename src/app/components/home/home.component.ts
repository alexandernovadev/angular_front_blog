import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from 'src/app/models/post';
import { urlglobal } from '../../services/apiglobal';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  page_title = 'Home'
  posts: Post;
  url;
  indentity;
  token;
  
  constructor(private _postService: PostService, 
              private _userService: UserService)
  {
    this.url = urlglobal.url;
    this.indentity = _userService.getIdentity();
    this.token = _userService.getToken();
  }

  ngOnInit() 
  {
    this.getPosts();
  }

  getPosts()
  {
    this._postService.getPosts().subscribe(
      response =>
      {
        if(response.status == 'success')
        {
          // console.log(response);
          this.posts = response.posts
          //console.log(this.posts);
        }
      },
      error => 
      {

      }
    );
  }

  deletepost(id)
  {
    this._postService.deletePost(this.token, id).subscribe(
      response => 
      {
        if(response.status == 'success')
        {
          this.getPosts();
        }
      },
      error =>
      {
        console.log("Error al borrar post", error);
      }
    );
  }
}
