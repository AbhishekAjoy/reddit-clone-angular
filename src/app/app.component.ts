import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostDataService } from './services/post-data.service';
import { postModel } from './post/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-reddit';
  posts: postModel[] = [];
  createPost = new FormGroup({
    title: new FormControl(''),
    link: new FormControl('')
  })

  constructor(private postDataService: PostDataService){
    this.getPosts();
  }
  addPost(){
    console.log(this.createPost.value);
  }

  getPosts(){
    this.postDataService.getPosts().subscribe((result) => {this.posts = result});
  }
}
