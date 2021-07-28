import { Component, OnInit } from '@angular/core';
import { GithubApiService } from './service/github-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'github';
  userList: any;
  searchText: any;
  data = [{ name: 'Kumar' }, { name: 'Naveen' }];
  filterData: any;


  constructor(public githubService: GithubApiService) { }
  ngOnInit() {
    this.callService();

  }

  callService() {
    this.githubService.gerUserList().subscribe((data) => {
      console.log(data);
      this.userList = data;
      this.filterData = [...this.userList];
    });
  }



  searchData(event: any) {
    console.log(this.filterData)
    if (event.target.value == '') {
      this.userList = this.filterData;
    } else {

      console.log(event?.target?.value);
      this.userList = this.userList.filter((x: { login: string; }) => x.login.toLowerCase().includes(event.target.value))
      console.log(this.userList);

    }



  }

}
