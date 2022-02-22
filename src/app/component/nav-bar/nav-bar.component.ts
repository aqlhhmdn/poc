import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { Data } from 'src/app/data';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  id: any;
  list: Data[] = [];
  constructor(public _http: HttpService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getApi();
  }

  getApi() {
    this._http.getApi(this.id).subscribe((data: any = []) => {
      console.log(data);
      this.list = data;
    });
  }

}
