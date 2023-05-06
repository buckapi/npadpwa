import { Component, OnInit } from '@angular/core';
import { MemoryService } from '@services/memoryService.service';
import { interval, Subscription } from 'rxjs';
import { string } from 'yup/lib/locale';

@Component({
  selector: 'app-memory2',
  templateUrl: './memory2.component.html',
  styleUrls: ['./memory2.component.css']
})
export class Memory2Component implements OnInit {
    words: string[] = [];
    words4: string[] = [];
    words4O: string[] = [];
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
    contador = 10;
    subscription: Subscription;
    select=-1;
    acierto=false;
    result="";
   

  constructor(private memoryService: MemoryService) { }

  set(i:any){
    this.seleccionada=this.words4[i];
    if(this.words4[i]==this.words4O[this.select]){
      this.acierto=true;
      this.result="Acertado";
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
          this.words4=this.desordenarArray(this.words4);
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
      this.words = data.palabras5;
      this.words4 = data.palabras6;
    });
    
    this.memoryService.getWords().subscribe(data => {
      this.words4O = data.palabras5;
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
        this.score -= 10;
        this.selectedWord = '';
        if (this.attempts === this.maxAttempts) {
          // Game over, show score
        }
      }
    }
  }

}
