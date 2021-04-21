import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import{MaterialModule} from '../../Modules/material/material.module';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
 /* isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  ); */
  opened=false;
user:string;
ngzone: NgZone;
router: Router;
constructor(private breakpointObserver: BreakpointObserver, ngzone: NgZone,
  router: Router) {
    this.ngzone = ngzone;
    this.router = router;}


  ngOnInit(): void {
    this.user=localStorage.getItem('Uname');
  }

  onLogout(){  
    window.localStorage.removeItem("Uname");
  this.ngzone.run(()=>this.router.navigateByUrl('/login'));

  }  

}