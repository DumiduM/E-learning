import { Component } from '@angular/core';
import { initializeApp, database} from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-project';

  constructor() {
      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyDHTdmX0aWNJwuISWyGmt32Cxsu10HFZuA",
        authDomain: "final-project-recording-7e32c.firebaseapp.com",
        databaseURL: "https://final-project-recording-7e32c.firebaseio.com",
        projectId: "final-project-recording-7e32c",
        storageBucket: "final-project-recording-7e32c.appspot.com",
        messagingSenderId: "122855990924"
      };
      initializeApp(config);
      
      var root = database().ref();
      root.on('value',function(snap) {
        console.log(snap.val());
      });
  }
}
