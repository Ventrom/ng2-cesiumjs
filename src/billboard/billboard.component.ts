import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild, ViewEncapsulation, NgZone, Input } from '@angular/core'
import ElevationGradientImageryProvider from 'cesium-elevation-gradient/lib/ElevationGradientImageryProvider'

declare var require: any
var BuildModuleUrl: any = require('ng2-cesiumjs/cesium/Source/Core/buildModuleUrl')
BuildModuleUrl.setBaseUrl('./cesium/')

const Cesium: any = require('Cesium')

@Component({
    selector: 'billboard',
    templateUrl: './billboard.component.html',
    styleUrls: ['./billboard.component.scss', '../../ng2-cesiumjs.scss', './widgets.scss'],
    host: {
        '[style.display]': "'block'",
        '[style.height]': "'inherit'",
        '[style.width]': "'100%'"
    },
    encapsulation: ViewEncapsulation.None
})
export class BillboardComponent implements AfterViewInit {
    @Input() ctpUrl: string = './resources/tilesets/terrain/srtm/'
    @Input() utipUrl: string = './resources/tilesets/imagery/relief/{z}/{x}/{reverseY}.jpg'
    @Input() terrainExaggeration: number = 175
    @ViewChild('container') container
    viewer: any
    terrainProvider: any
    imageryProvider: any

    constructor(
        private zone: NgZone
    ) {}

    ngAfterViewInit() {
        this.terrainProvider = new Cesium.CesiumTerrainProvider({
            url : this.ctpUrl,
            requestVertexNormals : true,
            requestWaterMask: true
        })
        let cesiumPromise = this.terrainProvider.readyPromise

        let self = this
        Promise.all([cesiumPromise]).then(values => {
            console.log(values)
            if (values) {
                self.viewer = new Cesium.Viewer(self.container.nativeElement, {
                    // Access the US imagery, which uses a TMS tiling scheme and Geographic (EPSG:4326) project
                    imageryProvider : new Cesium.UrlTemplateImageryProvider({
                        url : this.utipUrl,
                        maximumLevel : 6,
                        rectangle : Cesium.Rectangle.fromDegrees(-130.58, 21.12, -62.65, 52.40),
                        tilingScheme : new Cesium.GeographicTilingScheme()
                    }),
                    baseLayerPicker : false,
                    terrainProvider : self.terrainProvider,
                    terrainExaggeration: self.terrainExaggeration,
                    shadows: true
                })

                var contourLayer = self.viewer.scene.imageryLayers.addImageryProvider(new ElevationGradientImageryProvider({
                      terrainProvider: self.terrainProvider,
                      minimumTileLevel: 1,
                      gradientMinElevation: 1000,
                      gradientMaxElevation: 3000,
                      majorContour: 25,
                      minorContour: 5
                  }));

                contourLayer.alpha = 1.0;

                this.viewer.scene.globe.enableLighting = true;
            }
        })
    }
}