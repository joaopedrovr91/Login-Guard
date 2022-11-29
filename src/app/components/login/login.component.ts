import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {environment} from 'src/environments/environment';
import {AuthService} from '../../auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}contato`;

  loginForm!: FormGroup;

  constructor(private http: HttpClient,
              private router: Router,
              private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      id: new FormControl(''),
      usuario: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
    });
  }

  get usuario() {
    return this.loginForm.get('usuario')!;
  }

  get senha() {
    return this.loginForm.get('senha')!;
  }


  submit() {
    if (this.loginForm.invalid) {
      return;
    } else {
      if (this.usuario.value === 'joao' && this.senha.value === 'joao') {
        this.authService.usuarioEstaLogado = true;
      }
      this.router.navigate(['/contato']);
    }
  }

}
