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
      email: [null, [Validators.required]],
      uname: [null, [Validators.required]],
      pass: [null, [Validators.required]],
      cpass: [null, [Validators.required]],

      // start with one input
      
      formArrayAddress: this.fb.array([null])

      // start with two input

      // formArrayAddress: this.fb.array([null,[]])
    })
  }
  checkout() {
    this.totalPrice = this.cartService.getTotalPrice();
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
