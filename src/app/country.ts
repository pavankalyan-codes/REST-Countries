export class Country {
  constructor(name, population, region, capital, flag) {
    this.name = name;
    this.population = population;
    this.region = region;
    this.capital = capital;
    this.flag = flag;
  }
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
}
