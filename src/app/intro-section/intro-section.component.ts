import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.css']
})
export class IntroSectionComponent implements OnInit {
  @Input() introTitle: string;
  @Input() introText: string;
  @Output() removeSection = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

}
