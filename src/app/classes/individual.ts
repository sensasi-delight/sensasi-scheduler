import { Data } from "./data";

export class Individual {
  //tingkat cross over adalah range(0 .. 1);
  static tingkat_crossover = 0.5;

  //tingkat mutasi adalah range(0 .. 1);
  static tingkat_mutasi = 0.5;

  //cache
  private isCalcFitness: boolean = true;

  fitness: number;
  errors = [];
  Chromosomes = [];

  generate(timeSlotIndex): void {
    this.Chromosomes = Data.getChromosomes(timeSlotIndex);
  }

  getFitness(): number {
    if (this.isCalcFitness) {
      this.isCalcFitness = false;
      this.fitness = this.calcFitness();
    }

    return this.fitness;
  }

  private calcFitness(): number {
    let err_i = 0;
    let err_arr = [];

    for (let i = 0; i < this.Chromosomes.length; i++) {
      let Chromosome = this.Chromosomes[i];
      let waktu1_mulai = Chromosome.waktu;
      let waktu1_selesai = waktu1_mulai + Chromosome.durasi - 1;

      //error waktu jika melewati jumlah slot waktu
      if (waktu1_selesai > Data.master.timeSlots[0].getSumNSlot()) {
        err_arr[err_i++] = [i, null, 'Waktu Melebihi Slot'];
      }

      //ignored last chromosome
      //coz last can't comparing
      if (i === this.Chromosomes.length - 1) {
        break;
      }

      for (let j = (i + 1); j < this.Chromosomes.length; j++) {
        let Kromosom_compare = this.Chromosomes[j];
        let waktu2_mulai = Kromosom_compare.waktu;
        let waktu2_selesai = waktu2_mulai + Kromosom_compare.durasi - 1;

        let sub1 = waktu2_mulai <= waktu1_selesai;
        let sub2 = waktu1_mulai <= waktu2_selesai;

        //waktu2 mulai diantara rentang waktu1
        let condA = waktu1_mulai <= waktu2_mulai && sub1;
        //waktu2 selesai diantara rentang waktu1
        let condB = sub2 && waktu2_selesai <= waktu1_selesai;

        //waktu1 mulai diantara rentang waktu2
        let condC = waktu2_mulai <= waktu1_mulai && sub2;
        //waktu1 selesai diantara rentang waktu2
        let condD = sub1 && waktu1_selesai <= waktu2_selesai;

        // if (cond1 && waktu1_selesai >= waktu2_mulai && waktu1_mulai <= waktu2_selesai && cond2) {
        if (condA || condB || condC || condD) {
          if (Chromosome.kelas === Kromosom_compare.kelas) {
            err_arr[err_i++] = [i, j, 'kelas'];
          }

          if (Chromosome.ruang === Kromosom_compare.ruang) {
            err_arr[err_i++] = [i, j, 'ruang'];
          }

          if (Chromosome.dosen1 === Kromosom_compare.dosen1 || Chromosome.dosen1 === Kromosom_compare.dosen2) {
            err_arr[err_i++] = [i, j, 'dosen 1'];
          }

          if (Chromosome.dosen2 != null &&
            (Chromosome.dosen2 === Kromosom_compare.dosen1 || Chromosome.dosen2 === Kromosom_compare.dosen2)) {
            err_arr[err_i++] = [i, j, 'dosen 2'];
          }
        }
      }
    };

    this.errors = err_arr;

    return err_i;
  }

  mutasi(timeSlotIndex) {

    for (let i = 0; i < this.Chromosomes.length; i++) {
      if (Math.random() < Individual.tingkat_mutasi) {
        this.Chromosomes[i].ruang = Data.getRandomRoom();
        this.isCalcFitness = true;
      }

      if (Math.random() < Individual.tingkat_mutasi) {
        this.Chromosomes[i].waktu = Data.getRandomTimeSlot(timeSlotIndex);
        this.isCalcFitness = true;
      }
    };
  }


  crossOver(Partner: Individual): void {
    for (let i = 0; i < this.Chromosomes.length; i++) {
      if (Math.random() < Individual.tingkat_crossover) {
        this.Chromosomes[i].ruang =  Partner.Chromosomes[i].ruang;
        this.isCalcFitness = true;
      }

      if (Math.random() < Individual.tingkat_crossover) {
        this.Chromosomes[i].waktu = Partner.Chromosomes[i].waktu;
        this.isCalcFitness = true;
      }
    }
  }

  public static fromJSON(json): Individual {
    if (json == null) {
      return null;
    } else {
      let result = new Individual;
      Object.assign(result, JSON.parse(json));

      return result;
    }
  }

  public clone(): Individual {
    return Individual.fromJSON(JSON.stringify(this));
  }
}
