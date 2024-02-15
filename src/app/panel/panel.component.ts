import { Component, OnInit } from '@angular/core';
import { Services } from '../models/models';
import { BudgetService } from '../services/budget.service';
import { ReactiveFormsModule ,FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'panel',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent implements OnInit {

  services: Services[] = [];
  cardForm: FormGroup;

  constructor(
    private budgetService: BudgetService,
    private formBuilder: FormBuilder
  ) {
    this.cardForm = this.formBuilder.group({
      selectedServices: this.formBuilder.array([], [Validators.required])
    });
  }

  ngOnInit(): void {
    this.budgetService.getServices().subscribe(services => {
      this.services = services;
      this.initializeForm();
    });
  }

  initializeForm(): void {

    const formControls = this.services.map(service => {
      return this.formBuilder.control(false);
    });

    this.cardForm = this.formBuilder.group({
      selectedServices: new FormArray(formControls)
    });
  }
}
