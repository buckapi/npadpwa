import { Component, OnInit } from '@angular/core';
import { MemoryService } from '@services/memoryService.service';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})

  export class MemoryComponent implements OnInit {
    words: string[] = [];
    words2: string[] = [];
    words2O: string[] = [];
    results: boolean[] = [];
    visibles=false;
    visibleWords: string[] = [];
    selectedWord: string = '';
    attempts: number = 0;
    correctAttempts: number = 0;
    score: number = 0;
    maxAttempts: number = 3;
    showWords: boolean = true;
    seleccionada:string="";
    contador = 5;
    subscription: Subscription;
    select=-1;
    acierto=false;
    result="";
  
  constructor(private memoryService: MemoryService) { 

  }
  set(i:any){
    this.seleccionada=this.words2[i];
    if(this.words2[i]==this.words2O[this.select]){
      this.acierto=true;
      this.result="acierto";
      this.results[i]=true;
    }
    else{
      this.result="Error";this.results[i]=false;
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  empezar() {
   
    this.visibles=true;
   
    this.subscription = interval(1000).subscribe(() => {
      if (this.contador > 0) {
        this.contador--;
      } else {
        if (this.contador==0){
          this.select=Math.floor(Math.random() * 10);
          this.words2=this.desordenarArray(this.words2);
          console.log("select: "+this.select);
        }
        this.subscription.unsubscribe();
      }
    });
  }
   desordenarArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
 

  ngOnInit() {
 
    this.memoryService.getWords().subscribe(data => {
      this.words = data.palabras1;
      this.words2 = data.palabras2;
    });
    
    this.memoryService.getWords().subscribe(data => {
      this.words2O = data.palabras2;
    });
    setTimeout(() => {
     
    }, 10000);
  }

  selectWord(word: string) {
    if (this.selectedWord === '') {
      this.selectedWord = word;
    } else {
      if (this.selectedWord === word) {
        this.correctAttempts++;
        this.score += 10;
        this.visibleWords.splice(this.visibleWords.indexOf(this.selectedWord), 1);
        this.visibleWords.splice(this.visibleWords.indexOf(word), 1);
        if (this.words.length > this.visibleWords.length) {
          this.visibleWords.push(this.words[this.visibleWords.length]);
        }
        this.selectedWord = '';
        this.showWords = true;
        setTimeout(() => {
          this.showWords = false;
          this.visibleWords = [this.words[this.visibleWords.length], ...this.words.slice(this.visibleWords.length + 1, this.visibleWords.length + 11).sort(() => 0.5 - Math.random())];
        }, 10000);
      } else {
        this.attempts++;
        this.score -= 5;
        this.selectedWord = '';
        if (this.attempts === this.maxAttempts) {
          // Game over, show score
        }
      }
    }
  }

}
