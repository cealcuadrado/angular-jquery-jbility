import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(() => {
      $('#myButtonUp').on('click', () => {
        console.log('Up');
      });
      $('#myButtonDown').on('click', () => {
        console.log('Down');
      });
    });
  }

}
