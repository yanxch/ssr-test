import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatInputModule, MatListModule} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class SharedModule { }