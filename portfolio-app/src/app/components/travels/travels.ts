import { Component } from '@angular/core';

interface Travel {
  flag: string;
  country: string;
  city: string;
  description: string;
  highlights: string[];
}

@Component({
  selector: 'app-travels',
  imports: [],
  templateUrl: './travels.html',
  styleUrl: './travels.scss',
})
export class Travels {
  travels: Travel[] = [
    {
      flag: '🇯🇵',
      country: 'Japon',
      city: 'Tokyo · Kyoto · Osaka',
      description:
        'Un pays fascinant entre tradition millénaire et modernité futuriste. La gastronomie, les temples et la culture unique font de ce voyage un souvenir inoubliable.',
      highlights: ['Tokyo', 'Mont Fuji', 'Kyoto', 'Nara'],
    },
    {
      flag: '🇨🇦',
      country: 'Canada',
      city: 'Montréal · Québec',
      description:
        'Découverte de la culture francophone d\'Amérique du Nord, des grands espaces naturels et de la chaleur des habitants québécois.',
      highlights: ['Montréal', 'Québec City', 'Niagara', 'Nature'],
    },
    {
      flag: '🇨🇭',
      country: 'Suisse',
      city: 'Genève · Zurich · Interlaken',
      description:
        'Paysages alpins à couper le souffle, lacs cristallins et villes d\'une propreté irréprochable. La Suisse est un écrin de beauté naturelle.',
      highlights: ['Alpes', 'Lac Léman', 'Interlaken', 'Jungfrau'],
    },
    {
      flag: '🇺🇸',
      country: 'États-Unis',
      city: 'New York City',
      description:
        'La ville qui ne dort jamais — Central Park, Times Square, Brooklyn Bridge et l\'énergie unique de Manhattan ont laissé une empreinte indélébile.',
      highlights: ['Manhattan', 'Brooklyn', 'Central Park', 'Times Square'],
    },
  ];
}
