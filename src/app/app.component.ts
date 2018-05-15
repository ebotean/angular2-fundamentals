import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ids:number[] = [0, 1, 5, 6, 7];
  chosenId:number;
  control:number = 0;

  constructor(private http: Http) {
  	//this.performHystrixRequests();
  }

  	performHystrixRequests() {
	  	while(this.control < 10000) {
	  		this.chosenId = 1;//Math.floor(Math.random()*2 + 1);
	  		console.log("Accessing localhost:8081 with id: "+this.chosenId);

	  		this.http.get('http://172.16.96.99:8080/aluno/'+this.ids[this.chosenId])
	  			.subscribe(
		  			data => console.log(data),
		  			err => console.error(this.chosenId)
		  		);

			this.control++;
	  	}
	  	this.control = 0;
	}
}
