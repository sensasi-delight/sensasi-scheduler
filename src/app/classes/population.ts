import { Individual } from './individual';

export class GA {
  public static nIndividual = 500;
  public static maxStagnant = 100;
}

export class Population {
  public Individuals = [];

  constructor(isGenerate: boolean = false) {

    for (let i = 0; i < GA.nIndividual; i++) {
      this.Individuals[i] = new Individual;

      if (isGenerate) {
        this.Individuals[i].generate();
      }
    }
  }

  public getIndividuTerbaik() {
    //sebagai pembanding pertama
    let temp_i = 0;
    let fitness_terbaik = this.Individuals[0].getFitness();

    for (let i = 1; i < this.Individuals.length; i++) {
      let fit_i = this.Individuals[i].getFitness();
      if (fitness_terbaik > fit_i) {
        fitness_terbaik = fit_i;
        temp_i = i;
      }
    }
    return this.Individuals[temp_i];
  }

  public roulleteWheel(): Individual {
    let arrBobotFitness = [];
    let sumBobot = 0;
    let pick = Math.random();
    let picked_i;
    let sumPicked = 0;

    for (let i = 0; i < this.Individuals.length; i++) {
      arrBobotFitness[i] = 1 / (1 + this.Individuals[i].getFitness());
      sumBobot += arrBobotFitness[i];
    }

    for (let i = 0; i < arrBobotFitness.length; i++) {
      sumPicked += arrBobotFitness[i] / sumBobot;

      if (pick <= sumPicked) {
        picked_i = i;
        break;
      }

    }

    return this.Individuals[picked_i];
  }

  public roulleteWheel2(): Individual {
    let arrRwIndex = [];
    let sumBobot = 0;

    for (let i = 0; i < this.Individuals.length; i++) {
      sumBobot += 1 / (1 + this.Individuals[i].getFitness());
      arrRwIndex[i] = sumBobot;
    }

    const pick = Math.random() * sumBobot;
    const picked_i = arrRwIndex.findIndex(test => test >= pick);

    return this.Individuals[picked_i];
  }

  // inidividual 0 tidak di eksekusi
  public evolusi() {
    this.Individuals[0] = this.getIndividuTerbaik().clone();
    const individu1 = this.Individuals[0];

    for (let i = 1; i < this.Individuals.length; i++) {
      // this.Individuals[i].crossOver(this.roulleteWheel2());
      // let individu1 = this.roulleteWheel2();
      this.Individuals[i] = this.roulleteWheel2().clone();
      this.Individuals[i].crossOver(individu1);
    }

    this.Individuals[0] = this.getIndividuTerbaik().clone();

    for (let i = 1; i < this.Individuals.length; i++) {
      this.Individuals[i].mutasi();
    }

    this.Individuals[0] = this.getIndividuTerbaik().clone();
  }
}
