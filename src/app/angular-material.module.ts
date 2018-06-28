import { NgModule } from '@angular/core';
import {
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatCheckboxModule,
} from '@angular/material';

const MATERIAL = [
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatInputModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatCheckboxModule,
];

@NgModule({
    imports: [
        ...MATERIAL,
    ],
    exports: [
        ...MATERIAL,
    ],
})

export class AngularMaterialModule { }
