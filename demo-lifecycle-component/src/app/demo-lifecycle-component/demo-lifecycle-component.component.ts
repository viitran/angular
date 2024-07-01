import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo-lifecycle-component',
  standalone: true,
  imports: [],
  templateUrl: './demo-lifecycle-component.component.htm',
  styleUrl: './demo-lifecycle-component.component.css'
})
export class DemoLifecycleComponentComponent {
  @Input() so_san_pham:number = 0;
  
  constructor(){
    console.log("contr");
  }
  ngOnChanges(){
    console.log('ngOnChanges'); 
    //chay trc init khi co skien binding thay doi
  }

  ngOnInit(){
    console.log('ngOnInit');
    // chay 1 lan sau onChanges
  }

  ngDoCheck(){
    console.log('ngDoCheck');
    // chay sau onchanges va init va chay lai khi co su thay doi dl tu component
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
    // chay sau doCheck va chay 1 lan
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked");
    // chay sau ngAfterContentInit va chay lai khi co su thay doi dl tu component
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  //chay sau ngAfterContentChecked va chay 1 lan 
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked");
    // chay sau ngAfterViewInit va chay lai khi co su thay doi dl tu component
  }

  ngOnDestroy(){
    console.log("ngOnDestroy");
    // chay sau ngAfterViewChecked va chay 1 lan
  }
}
