import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostDataService } from './services/post-data.service';
import { postModel } from './post/post.model';
import * as uuid from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-reddit';
  votes: number | undefined = 0;
  posts: postModel[] = [];
  newPost: postModel = { title: '', link: '', id: '', upvotes: 1 };
  createPost = new FormGroup({
    title: new FormControl(''),
    link: new FormControl(''),
  });

  constructor(private postDataService: PostDataService) {
    this.getPosts();
  }
  addPost() {
    this.newPost.id = uuid.v4();
    this.newPost.title = this.createPost.value.title;
    this.newPost.link = this.createPost.value.link;
    this.postDataService.addPost(this.newPost).subscribe((result) => {
      this.posts = [...this.posts, result];
    });
    this.createPost.reset();
  }

  getVotes(id: string) {
    this.votes = this.posts.find((o) => o.id === id)?.upvotes;
  }
  upvotePost(id: string) {
    this.getVotes(id);
    this.postDataService.upvotePost(id, this.votes).subscribe((result) => {
      var index = this.posts
        .map(function (e) {
          return e.id;
        })
        .indexOf(id);
      this.posts[index].upvotes = result.upvotes;
    });
  }

  downvotePost(id: string) {
    this.getVotes(id);
    this.postDataService.downvotePost(id, this.votes).subscribe((result) => {
      var index = this.posts
        .map(function (e) {
          return e.id;
        })
        .indexOf(id);
      this.posts[index].upvotes = result.upvotes;
    });
  }
  getPosts() {
    this.postDataService.getPosts().subscribe((result) => {
      this.posts = result;
    });
  }

  deletePost(postId: string) {
    this.postDataService.deletePost(postId).subscribe((result) => {
      this.posts = this.posts.filter(function (e) {
        return e.id !== postId;
      });
    });
  }
}
