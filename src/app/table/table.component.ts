import {Component} from '@angular/core';

export interface Serverdetails {
  detailKey: string;
  detailValue: string;
}

const ELEMENT_DATA: Serverdetails[] = [
  {detailKey: 'Password', detailValue: '&/%!(§/%SFUQ§FJ)'},
  {detailKey: 'CPU', detailValue: '4096'},
  {detailKey: 'RAM', detailValue: '2048'},
  {detailKey: 'IP', detailValue: '12.124.1251.251'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-table',
  styleUrls: ['table.component.css'],
  templateUrl: 'table.component.html',
})

export class TableComponent {
  displayedColumns: string[] = ['detailKey', 'detailValue'];
  dataSource = ELEMENT_DATA;
}
