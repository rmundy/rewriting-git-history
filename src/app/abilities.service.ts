import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { difference } from 'lodash';

@Injectable()
export class AbilitiesService {

  availableAbilities: String[] = [
    'speed',
    'stregth',
    'x-ray vision',
    'flight',
    'mind control',
    'shape shifting',
    'telekinesis'
  ];

  heroAbilities = {

  };

  public getAvailableAbilities = () => this.availableAbilities;

  public setAbilitiesForHero = (hero: Hero, abilities: String[]) => {

    if (this.testForIllegalAbilities(abilities)) {
      throw Error('illegal abilities');
    }

    return this.heroAbilities[hero.id] = abilities;
  }

  public getAbilitiesForHero = (hero: Hero) =>
    this.heroAbilities[hero.id] ? this.heroAbilities[hero.id] : [];

  private testForIllegalAbilities = (abilities: String[]) =>
    difference(abilities, this.availableAbilities).length > 0;

}
