import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { ProductUpdateComponent } from './product-update/product-update.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'create',
    component: ProductCreateComponent,
  },
  {
    path: 'edit/:id',
    component: ProductUpdateComponent
  }
];

@NgModule({
  declarations: [],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: {
      projectId: 'angular-74157',
      appId: '1:521677025749:web:a20d647e944503ad490d5c',
      storageBucket: 'angular-74157.appspot.com',
      apiKey: 'AIzaSyAHzlGxZ-j-uDePoZuuYrYjbKLm-q0HTI8',
      authDomain: 'angular-74157.firebaseapp.com',
      messagingSenderId: '521677025749',
    } }
],
  imports: [
  CommonModule,
    RouterModule.forChild(routes),
    AngularFireModule.initializeApp({
      projectId: 'angular-74157',
      appId: '1:521677025749:web:a20d647e944503ad490d5c',
      storageBucket: 'angular-74157.appspot.com',
      apiKey: 'AIzaSyAHzlGxZ-j-uDePoZuuYrYjbKLm-q0HTI8',
      authDomain: 'angular-74157.firebaseapp.com',
      messagingSenderId: '521677025749',
    }),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
})

export class ProductModule {}
