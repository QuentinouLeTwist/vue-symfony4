
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatInputModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgModule} from '@angular/core';

@NgModule({
    imports: [
        MatCardModule,
        MatGridListModule,
        MatButtonModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    exports: [
        MatCardModule,
        MatGridListModule,
        MatButtonModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatInputModule,
    ]
})
export class AuthMaterialModule {}