import { Component } from '@angular/core';
import { of, timeout } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ovning10';

  source = of(1, 2, 3, 4);

  observer={
    next: (x: any) => {console.log(x); },
    error: (err: any) => {console.log(err); },
    complete: () => {console.log('Complete'); }
    
  } 

ngOnInit() {
setTimeout(() => {
  this.source.subscribe(this.observer)
  }, 5000)
}
  



}
