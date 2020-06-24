import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: [
  ]
})
export class CpbComponent implements OnInit {

  // Step 1: create a custom property
  @Input() age = 20; // @Input() will make a variable a custom property

  // refer concepts.comp.html -- for Step 2 of prop binding

  constructor() { }

  ngOnInit(): void {
  }

}
