import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['../../../styles/navbar.scss'],
})
export class NaviComponent implements OnInit {
  filterText = '';
  constructor() {}

  ngOnInit(): void {}
}
