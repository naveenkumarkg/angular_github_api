import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor(public http: HttpClient) { }

  gerUserList(){
    return this.http.get('https://api.github.com/users');
  }

  getFollowers(userName: string){
    return this.http.get(`https://api.github.com/users/${userName}/followers`)
  }
}
