import {RouterModule, Routes} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";




const rutas: Routes =[
  //{path: '', redirectTo: 'listar-cursos', pathMatch: 'full'},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: '', loadChildren: () => import('./salas/salas.module').then(m => m.SalasModule)},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    SweetAlert2Module.forRoot(),
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rutas),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
