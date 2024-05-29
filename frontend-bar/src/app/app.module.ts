import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Moduls
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { ToastrModule } from 'ngx-toastr';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AddTokenInterceptor } from './utils/add-token.interceptor';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FullCalendarModule } from '@fullcalendar/angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomPaginatorIntlService } from './services/custom-paginator-intl.service';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

//Components
import { LoginComponent } from './components/user/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListEventComponent } from './components/event/list-event/list-event.component';
import { LandNavComponent } from './components/landing/land-nav/land-nav.component';
import { FooterComponent } from './components/landing/footer/footer.component';
import { StructureComponent } from './components/landing/structure/structure.component';
import { AddOrEditEventComponent } from './components/event/add-or-edit-event/add-or-edit-event.component';
import { AddOrEditUserComponent } from './components/user/add-or-edit-user/add-or-edit-user.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';
import { ListProductComponent } from './components/products/list-product/list-product.component';
import { AddOrEditProductComponent } from './components/products/add-or-edit-product/add-or-edit-product.component';
import { ListRolComponent } from './components/rol/list-rol/list-rol.component';
import { AddOrEditRolComponent } from './components/rol/add-or-edit-rol/add-or-edit-rol.component';
import { AddOrEditStatusComponent } from './components/status/add-or-edit-status/add-or-edit-status.component';
import { ListStatusComponent } from './components/status/list-status/list-status.component';
import { ListTableComponent } from './components/table/list-table/list-table.component';
import { AddOrEditTableComponent } from './components/table/add-or-edit-table/add-or-edit-table.component';
import { ListOrderEmployeeComponent } from './components/order/list-order-employee/list-order-employee.component';
import { AddOrEditOrderEmployeeComponent } from './components/order/add-or-edit-order-employee/add-or-edit-order-employee.component';
import { AddFormOrderClientComponent } from './components/order/add-form-order-client/add-form-order-client.component';
import { ChartComponent } from './components/chart/chart.component';
import { ListOrderproductEmployeeComponent } from './components/order-products/list-orderproduct-employee/list-orderproduct-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ListEventComponent,
    LandNavComponent,
    FooterComponent,
    StructureComponent,
    AddOrEditEventComponent,
    AddOrEditUserComponent,
    ListUserComponent,
    ListProductComponent,
    AddOrEditProductComponent,
    ListRolComponent,
    AddOrEditRolComponent,
    AddOrEditRolComponent,
    AddOrEditStatusComponent,
    ListStatusComponent,
    ListTableComponent,
    AddOrEditTableComponent,
    ListOrderEmployeeComponent,
    AddOrEditOrderEmployeeComponent,
    AddFormOrderClientComponent,
    ChartComponent,
    ListOrderproductEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({ cookieName: 'XSRF-TOKEN' }),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    ToastrModule.forRoot({
      timeOut: 3500,
      preventDuplicates: true,
      progressBar: true,
      tapToDismiss: true
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FontAwesomeModule,
    FullCalendarModule,
    MatTooltipModule,
    MatDialogModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DatePipe,
    MatMenuModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true },
    { provide: MatPaginatorIntl, useClass: CustomPaginatorIntlService },
    { provide: MAT_DATE_LOCALE, useValue: 'es' },
    { provide: DatePipe },
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
