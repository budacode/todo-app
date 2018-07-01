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
    MatTooltipModule,
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
    MatTooltipModule,
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
