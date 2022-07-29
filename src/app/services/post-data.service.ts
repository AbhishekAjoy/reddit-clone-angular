import { Injectable } from '@angular/core';
import { postModel } from '../post/post.model'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostDataService {



  private apiUrl = 'http://localhost:5000/posts';
  constructor(private http: HttpClient) { }

  addPost(post: postModel):Observable<postModel>{
    return this.http.post<postModel>(this.apiUrl,post);
  }

  getPosts(): Observable<postModel[]>{    
    return this.http.get<postModel[]>(this.apiUrl);
  }
  deletePost(postId: string): Observable<postModel>{
    const delUrl = `${this.apiUrl}/${postId}`;
    return this.http.delete<postModel>(delUrl);
  }
/*
  removeTask(id:string): Observable<taskModel>{
    const taskUrl = `${this.apiUrl}/${id}`;
    return this.http.delete<taskModel>(taskUrl);
  }
  */
}
