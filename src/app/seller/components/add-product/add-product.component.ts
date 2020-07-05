import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
export interface AddProductFormResult {
  currentLocation: string;
  productExtractionDate: string;
  productFishingZone: string;
  productQuantity: number;
  productType: string;
  role: string;
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {

  /**
   * Call passed by parameter.
   */
  @Output() answer = new EventEmitter<AddProductFormResult>();

  

  addProductForm: FormGroup;
  canSubmit: boolean;
  constructor(private formBuilder: FormBuilder, private modalController: ModalController) { }


  ngOnInit() {
    this.canSubmit = false;
    this.addProductForm = this.formBuilder.group({
      productType: new FormControl('', Validators.required),
      productQuantity: new FormControl('', Validators.required),
      productExtractionDate: new FormControl('', Validators.required),
      productFishingZone: new FormControl('', Validators.required),
      currentLocation: new FormControl('', Validators.required),
    });
  }


  cancel() {
    this.modalController.dismiss(null, 'cancel');
  }

  inputChanged(key: string) {
    // console.log(key, ' has changed');
    // console.log(this.addProductForm.controls);
    let canSubmit = true;
    const keys = Object.keys(this.addProductForm.controls);
    for (const controlKey of keys) {
      if (this.addProductForm.get(controlKey).errors) {
        // console.log(controlKey, this.addProductForm.get(controlKey).errors);
        canSubmit = false;
        break;
      }

    }

    this.canSubmit = canSubmit;
    // console.log(this.canSubmit);
  }

  newProductCallBack($event) {
    // console.log('New product', this.addProductForm.getRawValue());
    this.modalController.dismiss(this.addProductForm.getRawValue(), 'add');
    const data = {...(this.addProductForm.getRawValue().data), role: 'add'};
    this.answer.emit(data);
  }






}
