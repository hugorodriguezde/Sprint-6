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
getTotalPrice() {

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

  this.totalPrice = totalPrice
}

updateTotalPrice(event: number): void {

  this.totalPrice = this.formCheckbox.get('accept3')?.value ? 500 : 0;

  this.totalPrice += event;
}

isServiceSelected(serviceId: number): boolean {
  return this.formCheckbox.get(`accept${serviceId}`)?.value;
}

}

