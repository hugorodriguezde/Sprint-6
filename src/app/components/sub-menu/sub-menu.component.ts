import { Component, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BudgetService } from '../../services/budget.service';
import { EventEmitter } from '@angular/core';
import { ModalOptions } from '../../shared/modal/modal.component';


@Component({
  selector: 'app-sub-menu',
  standalone: true,
  imports: [ReactiveFormsModule, ModalOptions],
  templateUrl: './sub-menu.component.html',
  styleUrl: './sub-menu.component.scss'
})
export class SubMenuComponent implements OnInit {

  @Output() pagesPrice = new EventEmitter<number>();


  public formPanel: FormGroup = this.fb.group({
    numberPages: [0, [Validators.required, Validators.min(1)]],
    numberLanguages: [0, [Validators.required, Validators.min(1)]],
  });

  constructor(
    private fb: FormBuilder,
    public budgetService: BudgetService,

  ) { }

  public totalPages: number = 0;
  public totalLanguages: number = 0;

  minusPages() {
    const currentPages = this.formPanel.get('numberPages')?.value;
    if (currentPages < 0) return;
    this.formPanel.get('numberPages')?.setValue(Math.max(currentPages - 1, 1));
  }

  plusPages() {
    const currentPages = this.formPanel.get('numberPages')?.value;
    this.formPanel.get('numberPages')?.setValue(currentPages + 1);
  }

  minusLanguages() {
    const currentLanguages = this.formPanel.get('numberLanguages')?.value;
    if(currentLanguages < 0) return;
    this.formPanel.get('numberLanguages')?.setValue(Math.max(currentLanguages - 1, 1));
  }

  plusLanguages() {
    const currentLanguages = this.formPanel.get('numberLanguages')?.value;
    this.formPanel.get('numberLanguages')?.setValue(currentLanguages + 1);
  }

  ngOnInit() {
    this.formPanel.valueChanges.subscribe((values) => {
      this.totalPages = values.numberPages;
      this.totalLanguages = values.numberLanguages;
    })
  }

  get numberPages(){
    return this.formPanel.get('numberPages');
  }

  get numberLanguages(){
    return this.formPanel.get('numberLanguages');
  }

  calculate(): number {
    const pages = this.formPanel.get('numberPages')?.value;
    const languages = this.formPanel.get('numberLanguages')?.value;
    const calculated = this.budgetService.calculatePagesPrice(pages, languages);

    this.pagesPrice.emit(calculated);

    return calculated
  }

}
