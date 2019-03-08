import { Component } from '@angular/core';
import { CommonService} from './common.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[CommonService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'table';
}
