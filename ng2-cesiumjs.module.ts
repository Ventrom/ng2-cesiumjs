// Modules
import { NgModule }      from '@angular/core'
import { CommonModule } from '@angular/common'
import { Ng2CesiumjsRoutingModule } from './ng2-cesiumjs-routing.module'

// Common and routes components
import { BillboardComponent } from './src/billboard/billboard.component'

@NgModule({
    imports: [
        CommonModule,
        Ng2CesiumjsRoutingModule
    ],
    declarations: [
        BillboardComponent
    ],
    providers: [
    ],
    exports: [
        BillboardComponent
    ]
})
export class Ng2CesiumjsModule { }