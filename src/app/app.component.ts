import { subscribeTo } from 'rxjs/internal-compatibility';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-project';

  courses$:FirebaseListObservable<any>;
  lesson$:FirebaseObjectObservable<any>;3

  firstCourse:any;

  constructor(private af: AngularFireDatabase) {

    this.courses$ = af.list('courses');
    this.courses$.subscribe(console.log);
    this.lesson$ = af.object('courses');
    this.lesson$.subscribe(console.log);

    this.firstCourse = this.courses$[0];
  }

  listPush() {
    this.courses$.push({description: 'TEST NEW COURSE'})
    .then(
      () => console.log('List Push Done'),
      console.error
    )
  }

  listRemove() {
    this.courses$.remove(this.firstCourse);
  }
}