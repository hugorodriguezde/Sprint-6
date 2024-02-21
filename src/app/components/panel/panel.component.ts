import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BudgetService } from '../../services/budget.service';
import { Services } from '../../models/models';
import { SubMenuComponent } from '../sub-menu/sub-menu.component';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, SubMenuComponent],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent implements OnInit {


  public formCheckbox!: FormGroup;
  public totalPrice = 0;
  public services: Services[] = [];
  public webEvent: number = 0;

  constructor(
    private fb: FormBuilder,
    private budgetService: BudgetService,
  ) { }

  ngOnInit(): void {
    this.formCheckbox = this.fb.group({
      accept1: [false],
      accept2: [false],
      accept3: [false],
    });
    this.budgetService.getServices().subscribe(services => {
      this.services = services;
    });
    this.formCheckbox.valueChanges.subscribe(() => {
    this.getTotalPrice();
});
}
getTotalPrice(event?:number ) {
  let totalPrice = 0;


  if (this.formCheckbox.get('accept1')?.value) {
    totalPrice += 300;
  }
  if (this.formCheckbox.get('accept2')?.value) {
    totalPrice += 400;
  }
  if (this.formCheckbox.get('accept3')?.value) {
    totalPrice += 500;
  }
  if (!this.formCheckbox.get('accept3')?.value) {
    this.webEvent = 0;
  }

  this.totalPrice = totalPrice + this.webEvent;

}

updateTotalPrice(event: number): void {

  this.webEvent = event;
  this.getTotalPrice();

}

isServiceSelected(serviceId: number): boolean {
  return this.formCheckbox.get(`accept${serviceId}`)?.value;
}

}

