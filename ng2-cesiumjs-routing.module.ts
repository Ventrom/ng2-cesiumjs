import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillboardComponent } from './src/billboard/billboard.component'

export const cesiumExpRoutes: Routes = [
    { path: 'billboard', component: BillboardComponent }
]
@NgModule({
    imports: [
        RouterModule.forChild(cesiumExpRoutes)
    ],
    exports: [ RouterModule ]
})
export class Ng2CesiumjsRoutingModule {}
