import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable()
export class AbilitiesService {

  constructor() { }

  public getAvailableAbilities = () => this.availableAbilities;

  public setAbilitiesForHero = (hero: Hero, abilities: [String]) =>
    this.heroAbilities[hero.id] = abilities;

  private availableAbilities: [
    'speed',
    'stregth',
    'x-ray vision',
    'flight',
    'mind control',
    'shape shifting',
    'telekinesis'
  ];

  private heroAbilities: {

  };

}
