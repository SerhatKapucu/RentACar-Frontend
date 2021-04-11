import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterModel } from 'src/app/models/register';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }
  register() {
    if (this.registerForm.valid) {
      let registerModel: RegisterModel = Object.assign({},this.registerForm.value);
      console.log(registerModel);
      
      this.authService.register(registerModel);
      this.toastrService.success('Başarıyla Kayıt oldunuz.');
      this.router.navigate(['/login']);
      this.toastrService.info('Giriş Sayfasına yönlendiriliyorsunuz.');
    } else {
      this.toastrService.info(
        'Lütfen tüm alanları doldurunuz',
        'Bilgilendirme'
      );
    }
  }
}
