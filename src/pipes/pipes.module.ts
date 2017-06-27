import { NgModule } from '@angular/core';
import { DemoPipe } from "./demo/demo";
import { ToRowsPipe } from "./to-rows/to-rows";


@NgModule({
    declarations: [
        DemoPipe,
        ToRowsPipe
    ],
    imports: [

    ],
    exports: [
        DemoPipe,
        ToRowsPipe
    ]
})

export class PipesModule { }