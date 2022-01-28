import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  template: `
    <p>
      shell works!
    </p>
  `,
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
