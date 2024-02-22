import { Injectable } from '@angular/core';
import { Services } from '../models/models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  public budgets:Services[] = [
    {
      id: 1,
      name: 'Seo',
      description:"Posicionament web en el cercador",
      price: 300,
      selected: false
    },
    {
      id: 2,
      name: "Ads",
      description:"Monetització de la teva web utilitzant ads",
      price: 400,
      selected: false
    },
    {
      id: 3,
      name:"Web",
      description:"Programació d'una web responsive completa",
      price: 500,
      selected: false,
    }
  ];

  constructor() { }

  calculatePagesPrice(numberPages: number, numberLanguages: number): number {
    if (numberPages <= 0 || numberLanguages <= 0) return 0;
    return numberPages * numberLanguages * 30;
  }
  
  getServices(): Observable<Services[]> {
    return of(this.budgets);
  }
}


