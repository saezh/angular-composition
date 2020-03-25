import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  introSections = [{
    title: 'Title 1',
    text: 'Text 1'
  }, {
    title: 'Title 2',
    text: 'Text 2'
  }, {
    title: 'Title 3',
    text: 'Text 3'
  }, {
    title: 'Title 4',
    text: 'Text 4'
  }];

  removeSectionInAppComponent(section: any) {
    this.introSections.splice(this.introSections.indexOf(section), 1);
  }
}
