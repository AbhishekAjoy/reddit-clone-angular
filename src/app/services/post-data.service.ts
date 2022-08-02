import { Injectable } from '@angular/core';
import { postModel } from '../post/post.model';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostDataService {
  private apiUrl = 'http://localhost:5000/posts';
  constructor(private http: HttpClient) {}

  addPost(post: postModel): Observable<postModel> {
    return this.http.post<postModel>(this.apiUrl, post);
  }

  getPosts(): Observable<postModel[]> {
    return this.http.get<postModel[]>(this.apiUrl);
  }
  deletePost(postId: string): Observable<postModel> {
    const delUrl = `${this.apiUrl}/${postId}`;
    return this.http.delete<postModel>(delUrl);
  }

  upvotePost(postId: string, votes: number | undefined): Observable<postModel> {
    const upvoteUrl = `${this.apiUrl}/${postId}`;
    if (votes || votes === 0) {
      const body = {upvotes: votes + 1};
      return this.http.patch<postModel>(upvoteUrl, body);
    }
    else {
      throw throwError;
    } ;
  }

  downvotePost(postId: string, votes: number | undefined): Observable<postModel> {
    const downvoteUrl = `${this.apiUrl}/${postId}`;
    if (votes || votes === 0) {
      const body = {upvotes: votes - 1};
      return this.http.patch<postModel>(downvoteUrl, body);
    }
    else {
      throw throwError;
    } ;
  }
  /*
  removeTask(id:string): Observable<taskModel>{
    const taskUrl = `${this.apiUrl}/${id}`;
    return this.http.delete<taskModel>(taskUrl);
  }
  */
}
