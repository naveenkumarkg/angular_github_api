import { Component, Input, OnInit, AfterContentInit } from '@angular/core';
import { GithubApiService } from '../service/github-api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() list: any;
  @Input() searchText: any;
  
  constructor(public githubService: GithubApiService) { }

  ngOnInit(): void {
  }

  // ngAfterContentInit(){
  //   this.getFollowers()
  // }



  getFollowers() {
   console.log("Followers");
   // list is the 30 users
   this.list.map((user: { login: string; })=>{
    this.githubService.getFollowers(user.login)
    .subscribe(followers => { console.log(followers) })
   })
  }

}
