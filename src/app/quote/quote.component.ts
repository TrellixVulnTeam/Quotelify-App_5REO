import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quote} from "../quote"

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
quotes:Quote[]=[
  new Quote( 1, 'Impossible is just a big word thrown around by small men who find it easier to live in the world they’ve been given than to explore the power they have to change it. Impossible is not a fact. It’s an opinion. Impossible is not a declaration. It’s a dare. Impossible is potential. Impossible is temporary. Impossible is nothing.',' by; Muhammad Ali',0,0,new Date(2011,5,10)),
  new Quote(2, 'Third World is a state of the mind and until we change our attitude as Africans, if there is a fourth, fifth and even sixth world, we will be in it.','by; Patrice L.O. Lumumba', 0,0,new Date(2014,6,8)),
  new Quote(3,'While revolutionaries as individuals can be killed and can be assassinated, you cannot kill ideas. ','by; Thomas Sankara',0,0,new Date(2012,4,10)),
  new Quote(4,'Resentment is like drinking poison and then hoping it will kill your enemies.','by; Nelson Mandela',0,0,new Date(2005,7,10)),
  new Quote(5,'Only a man who knows what it is like to be defeated can reach down to the bottom of his soul and come up with the extra ounce of power it takes to win when the match is even.','By; Muhammad Ali',0,0,new Date(2008,6,11))

]

  first!: number;
  last!:number
  count!:number 

 highest(){
  this.first = 0
  this.last = 0

  for(this.count=0 ; this.count < this.quotes.length; this.count++) {
    this.last = this.quotes[this.count].upvote;
    if(this.last > this.first){this.first = this.last}
  }
  return  this.first
}


 deleteQuote(isComplete: any, index: number){
  if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

  if (toDelete){
    this.quotes.splice(index,1)
  }
    
  }
}
addNewQuote(quote: Quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)
}

 

constructor() { }


  ngOnInit(): void {
  }

}
