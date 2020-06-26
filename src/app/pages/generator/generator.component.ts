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
  timeSlotIndex: number = 0;

  //timer
  // timeLoop;
  // timerArr = localStorage.getItem('timerArr') == null ? [0, 0, 0] : JSON.parse(localStorage.getItem('timerArr'));
  // timerDisp = this.getTimerDisp();


  //for generator
  loop;
  best_fitness: number;
  Populasi: Population;
  Individual: Individual;
  isRunning: boolean = false;
  isCompleted: boolean = false;
  generation: number = 0;
  nPopulation: number = 0;
  stagnant: number = 0;
  lastBestFitness: number;
  populationStagnant: number = 0;

  results;



  constructor() {
    // this.Individual = Individual.fromJSON(localStorage.getItem('Individual'));
    this.results = JSON.parse(localStorage.getItem('results'));

    if (!this.results) {
      this.results = [];
    }

    if (this.results[this.timeSlotIndex]) {
      this.Individual = Object.assign(new Individual, this.results[this.timeSlotIndex]);
    }

    if (this.Individual != null) {
      if (this.Individual.fitness == 0) {
        this.isCompleted = true;
      }
    }
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
    this.Populasi = new Population(true, this.timeSlotIndex);

    this.Individual = this.Populasi.getIndividuTerbaik().clone();
    this.saveResult();
    this.lastBestFitness = this.Individual.getFitness();
    this.isRunning = true;

    //timer
    // this.resetTimer();
    // this.timer();

    this.run();
  }

  reset() {
    this.isCompleted = false;
    this.Individual = null;
  }

  stop() {
    this.isRunning = false;
    clearTimeout(this.loop);
    // clearTimeout(this.timeLoop);
  }

  resume() {
    // let saved: Individual;
    this.isRunning = true;

    // if (this.Individual == null) {
    //   saved = Individual.fromJSON(localStorage.getItem('Individual'));

    // } else {
    //   saved = this.Individual;
    // }

    //timer
    // this.timer();


    this.lastBestFitness = this.Individual.getFitness();

    if (this.Populasi == null) {
      this.Populasi = new Population(true, this.timeSlotIndex);
    }

    this.Populasi.Individuals[0] = this.Individual.clone();

    this.run();
  }

  // add() {
  //   this.timerArr[2]++;
  //   if (this.timerArr[2] >= 60) {
  //     this.timerArr[2] = 0;
  //     this.timerArr[1]++;
  //     if (this.timerArr[1] >= 60) {
  //       this.timerArr[1] = 0;
  //       this.timerArr[0]++;
  //     }
  //   }

  //   localStorage.setItem('timerArr', JSON.stringify(this.timerArr));
  //   this.timerDisp = this.getTimerDisp();
  //   this.timer();
  // }

  // getTimerDisp() {
  //   const h = this.timerArr[0] > 9 ? this.timerArr[0] : '0' + this.timerArr[0].toString()
  //   const m = this.timerArr[1] > 9 ? this.timerArr[1] : '0' + this.timerArr[1].toString()
  //   const s = this.timerArr[2] > 9 ? this.timerArr[2] : '0' + this.timerArr[2].toString()
  //   return h + ':' + m + ':' + s;
  // }

  isErrorChromosome(index) {
    return this.Individual.errors.some(error => error.includes(index))
  }

  chromosomeToTable() {
    let temp = [];
    const tempIndividu = this.results[this.timeSlotIndex];
    const tempChros = tempIndividu.Chromosomes;

      tempIndividu.errors.forEach(error => {
        tempChros[error[0]].error = true;
        tempChros[error[0]].errMess = error[2];

        if (error[1]) {
          tempChros[error[1]].error = true;
          tempChros[error[1]].errMess = error[2];
        }
      })


    this.data.timeSlots[this.timeSlotIndex].slots.forEach((slot, index) => {
      let temp2 = [];
      this.data.classes.filter(classObj => classObj.timeSlotId == this.data.timeSlots[this.timeSlotIndex].id).forEach(classObj => {
        let temp3 = tempChros.find(chro => chro.kelas == classObj.id && chro.waktu == index)

        if (!temp3) {
          temp3 = tempChros.find(chro => chro.kelas == classObj.id && chro.waktu < index && chro.waktu + chro.durasi > index);
          if (temp3) {
            temp3 = 'filled';
          }
        }

        temp2.push(temp3);
      });
      temp.push(temp2);
    });

    // console.log(temp);
    return temp;
  }

  // timer() {
  //   this.timeLoop = setTimeout(() => {this.add()}, 1000);
  // }

  // resetTimer() {
  //   this.timerArr = [0, 0, 0];
  //   localStorage.removeItem('timerArr');
  // }

  run() {
    this.loop = setTimeout(() => { this.run2() }, 1);
  }

  run2() {
    const nowBestIndividual: Individual = this.Populasi.getIndividuTerbaik();
    const nowBestFitness: number = nowBestIndividual.getFitness();

    if (nowBestFitness < this.lastBestFitness) {
      this.stagnant = 0;
      this.populationStagnant = 0;

      this.Individual = nowBestIndividual.clone();
      this.lastBestFitness = nowBestFitness;

      this.saveResult();
    } else {
      this.stagnant++;
      this.populationStagnant++;

      if (this.populationStagnant >= GA.maxStagnant) {
        this.Populasi = new Population(true, this.timeSlotIndex);
        this.Populasi.Individuals[0] = this.Individual.clone();
        this.nPopulation++;
        this.populationStagnant = 0;
      }
    }

    if (nowBestFitness === 0) {
      this.isCompleted = true;
      this.stop();
    } else {
      this.run();
    }

    this.Populasi.evolusi(this.timeSlotIndex);
    this.generation++;
  }

  private saveResult() {
    // localStorage.setItem('Individual', JSON.stringify(this.Individual));
    this.results[this.timeSlotIndex] = this.Individual;
    localStorage.setItem('results', JSON.stringify(this.results));
  }
}
