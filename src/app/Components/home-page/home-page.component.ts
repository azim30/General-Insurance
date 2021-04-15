import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import{FormsModule} from '@angular/forms';
import{MaterialModule} from '../../Modules/material/material.module';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  /*isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
*/
opened=false;
constructor(private breakpointObserver: BreakpointObserver) {}


  ngOnInit(): void {
  }

}
