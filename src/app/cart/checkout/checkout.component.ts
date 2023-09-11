import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  chechOutForm: FormGroup | any
  totalPrice!:number
  constructor(private fb: FormBuilder, private route: Router,private cartService: CartService) { }

  ngOnInit(): void {
    this.chechOutForm = this.fb.group({
      fname: [null, [Validators.required]],
      email: [null, [Validators.required,Validators.pattern(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)]],
      phone: [null, [Validators.required,Validators.pattern(/^0((13|2[2-4]|3|4[05-8]|5[05]|6[24-689]|8[2468]|9[235-7])\d{7}|1[0125]\d{8})$/gm)]],
      formArrayAddress: this.fb.array([null])
    })
  }
  checkout() {
    this.totalPrice = this.cartService.getTotalPrice();
    this.cartService.setCartLengthVal(0);
    this.cartService.removeAllCart();
    console.log(this.chechOutForm.value)
    this.route.navigate(['/cart'])
  }

  get formControls() {
    return this.chechOutForm.controls
  }

  addNewAddress(){
    const addInput = new FormControl(null,[Validators.required])
    this.adds.push(addInput);
    
  }

  delSpecAddress(index:number){
    this.adds.removeAt(index);
    
  }

  get adds(){
    return this.chechOutForm.controls.formArrayAddress as FormArray;
  }
}
