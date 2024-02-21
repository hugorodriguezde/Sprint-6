import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, inject, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalOptions {
  private modalService = inject(NgbModal);

	openModal(content: TemplateRef<any>) {
		this.modalService.open(content, { centered: true });
	}
}

