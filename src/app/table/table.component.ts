import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{
  characters: Observable<any[]>;
  columns: string[];

  constructor(private atService: CommonService) {
    this.columns = this.atService.getColumns();
    this.characters = this.atService.getCharacters();
  }

}
