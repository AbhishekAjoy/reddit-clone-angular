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

  addPost(task: postModel):Observable<postModel>{
    return this.http.post<postModel>(this.apiUrl,task);
  }

  getPosts(): Observable<postModel[]>{    
    return this.http.get<postModel[]>(this.apiUrl);
  }
/*
  removeTask(id:string): Observable<taskModel>{
    const taskUrl = `${this.apiUrl}/${id}`;
    return this.http.delete<taskModel>(taskUrl);
  }
  */
}
