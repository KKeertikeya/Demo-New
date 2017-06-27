import { NgModule } from '@angular/core';
import { DemoPipe } from "./demo";


@NgModule({
    declarations: [
        DemoPipe
    ],
    imports: [

    ],
    exports: [
        DemoPipe
    ]
})

export class DemoPipeModule { }