import { Component, Input, OnInit } from '@angular/core';
import { postModel } from './post.model';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: postModel = {
    "id": "",
    "title": "",
    "link": "",
    "upvotes": 0
  };
  constructor() { 
    
  }

  ngOnInit(): void {
  }


  upvotePost(){
    console.log('upvote');

  }

  downvotePost(){
    console.log('downvote');
  }
}
