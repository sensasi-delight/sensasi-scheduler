import { Component, OnInit } from '@angular/core';
import { Data } from "../../classes/data";
import { Individual } from 'src/app/classes/individual';
import { GA, Population } from 'src/app/classes/population';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  dataClass = Data;
  data = Data.master;
  uploadedFile;


  //timer
  timerArr = localStorage.getItem('timerArr') == null ? [0, 0, 0] : JSON.parse(localStorage.getItem('timerArr'));
  timeLoop;
  timerDisp = this.getTimerDisp();


  //for generator
  loop;
  best_fitness;
  Populasi;
  Individual: Individual = Individual.fromJSON(localStorage.getItem('Individual'));
  isRunning: boolean = false;
  nIndividu: number = GA.nIndividual;
  generation: number = 0;
  nPopulation: number = 0;
  stagnant: number = 0;
  lastBestFitness: number;
  populationStagnant: number = 0

  constructor() {
  }

  ngOnInit() {
  }

  uploadBtnClick() {
    $('#jsonfile').trigger('click');
  }

  onChangeFile(event) {
    this.uploadedFile = event.target.files[0];

    if (!Data.isEmptyData()) {
      $('#replaceDataConfirmationModal').modal('show');
    } else {
      this.jsonProccess();
    }
  }

  jsonProccess() {
    const ext = this.uploadedFile.name.split(".").pop();

    if (ext.toLowerCase() == 'json') {
      Data.fromJsonFile(this.uploadedFile);
    } else {
      alert('Ekstensi file tidak dikenali');
    }

    $('#replaceDataConfirmationModal').modal('hide');
  }

  downloadData() {
    Data.toJsonFileUrl();
  }

  wipeLocalData() {
    Data.wipeLocalData();
    $('#wipeDataModal').modal('hide');
  }





  //generator functions
  start() {
    this.Populasi = new Population(true);

    this.Individual = this.Populasi.getIndividuTerbaik();
    this.saveResult();
    this.lastBestFitness = this.Individual.getFitness();
    this.isRunning = true;

    //timer
    this.resetTimer();
    this.timer();

    this.run();
  }

  reset() {
    this.Individual = null;
  }

  stop() {
    this.isRunning = false;
    clearTimeout(this.loop);
    clearTimeout(this.timeLoop);
  }

  resume() {
    let saved: Individual;
    this.isRunning = true;

    if (this.Individual == null) {
      saved = Individual.fromJSON(localStorage.getItem('Individual'));

    } else {
      saved = this.Individual;
    }

    //timer
    this.timer();


    this.lastBestFitness = saved.getFitness();

    if (this.Populasi == null) {
      this.Populasi = new Population(true);
    }

    this.Populasi.Individuals[0] = saved;

    this.run();
  }

  // var h1 = document.getElementsByTagName('h1')[0],
  //   start = document.getElementById('start'),
  //   stop = document.getElementById('stop'),
  //   clear = document.getElementById('clear'),
  //   seconds = 0, minutes = 0, hours = 0,
  //   t;

  add() {
    this.timerArr[2]++;
    if (this.timerArr[2] >= 60) {
      this.timerArr[2] = 0;
      this.timerArr[1]++;
      if (this.timerArr[1] >= 60) {
        this.timerArr[1] = 0;
        this.timerArr[0]++;
      }
    }

    localStorage.setItem('timerArr', JSON.stringify(this.timerArr));
    this.timerDisp = this.getTimerDisp();
    this.timer();
  }

  getTimerDisp() {
    const h = this.timerArr[0] > 9 ? this.timerArr[0] : '0' + this.timerArr[0].toString()
    const m = this.timerArr[1] > 9 ? this.timerArr[1] : '0' + this.timerArr[1].toString()
    const s = this.timerArr[2] > 9 ? this.timerArr[2] : '0' + this.timerArr[2].toString()
    return h + ':' + m + ':' + s;
  }

  timer() {
    this.timeLoop = setTimeout(() => {this.add()}, 1000);
  }

  resetTimer() {
    this.timerArr = [0, 0, 0];
    localStorage.removeItem('timerArr');
  }

  run() {
    this.loop = setTimeout(() => { this.run2() }, 1);
  }

  run2() {
    let nowBestIndividual: Individual = this.Populasi.getIndividuTerbaik();
      let nowBestFitness: number = nowBestIndividual.getFitness();
      // let elaps = Math.round((new Date().getTime() - startTime.getTime()) / 1000);

      if (nowBestFitness < this.lastBestFitness) {
        // console.log('--------Generasi ke-' + this.generation + ' | Stagnant: ' + stagnant + ' | Fitness: ' + nowBestFitness + ' | elapsed : ' + elaps +' S');

        this.stagnant = 0;
        this.populationStagnant = 0;

        this.Individual = nowBestIndividual;
        this.lastBestFitness = nowBestFitness;

        this.saveResult();

        if (this.lastBestFitness === 0) {
          this.stop();
        }
      } else {
        // console.log('Fit: ' +  nowBestFitness + ' Generasi ke-' + this.generation + ' | elapsed: ' + elaps + ' S');
        this.stagnant++;
        this.populationStagnant++;

        if (this.populationStagnant >= GA.maxStagnant) {
          // console.log('--Stagnant Maksimal Telah Tercapai--');

          this.Populasi = new Population(true);
          this.Populasi.Individuals[0] = this.Individual;
          this.nPopulation++;
          this.populationStagnant = 0;
          // this.generation = 0;
        }
      }

      // console.log(nowBestFitness);

      this.Populasi.evolusi();
      this.generation++;

      this.run();
    }

  private saveResult() {
    localStorage.setItem('Individual', JSON.stringify(this.Individual));
  }
  //! generator functions

}
