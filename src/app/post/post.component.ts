import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
 
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

  @Output() delPostEmitter:EventEmitter<string> = new EventEmitter<string>();
  @Output() upvoteEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() downvoteEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { 
    
  }

  ngOnInit(): void {
  }


  upvotePost(id: string){
    this.upvoteEmitter.emit(id);
  }

  downvotePost(id: string){
    this.downvoteEmitter.emit(id);
  }

  deletePost(postId: string){
    this.delPostEmitter.emit(postId);
  }
}