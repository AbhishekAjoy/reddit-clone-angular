import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostDataService } from './services/post-data.service';
import { postModel } from './post/post.model';
import * as uuid from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-reddit';
  posts: postModel[] = [];
  newPost: postModel = {title:"",link:"",id:"",upvotes:1};
  createPost = new FormGroup({
    title: new FormControl(''),
    link: new FormControl('')
  })

  constructor(private postDataService: PostDataService){
    this.getPosts();
  }
  addPost(){
    this.newPost.id = uuid.v4();
    this.newPost.title = this.createPost.value.title;
    this.newPost.link = this.createPost.value.link;
    this.postDataService.addPost(this.newPost).subscribe((result) => {this.posts = [...this.posts,result]});
    this.createPost.reset();
  }

  getPosts(){
    this.postDataService.getPosts().subscribe((result) => {this.posts = result});
  }
}
