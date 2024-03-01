import { Component, TemplateRef, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-pages',
  standalone: true,
  imports: [],
  templateUrl: './modal-pages.component.html',
  styleUrl: './modal-pages.component.scss'
})
export class ModalPagesComponent {

  private modalService = inject(NgbModal);

	openModal(content: TemplateRef<any>) {
		this.modalService.open(content, { centered: true });
	}
}
