/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';

import {Map,latLng, geoJSON, LatLng, LatLngBounds, Browser, control} from 'leaflet';

import {CountryOrdersMapService} from './country-orders-map.service';
import {NbThemeService} from '@nebular/theme';
import {combineLatest} from 'rxjs';
import {takeWhile} from 'rxjs/operators';


@Component({
    selector: 'ngx-country-orders-map',
    styleUrls: ['./country-orders-map.component.scss'],
    template: `
        <div leaflet [leafletOptions]="options" [leafletLayers]="layers" (leafletMapReady)="mapReady($event)"></div>
    `,
})
export class CountryOrdersMapComponent implements OnDestroy {

    @Input() countryId: string;

    @Output() select: EventEmitter<any> = new EventEmitter();

    layers = [];
    currentTheme: any;
    alive = true;
    selectedCountry;

    options = {
        zoom: 2,
        minZoom: 2,
        maxZoom: 6,
        zoomControl: false,
        center: latLng({lat: 38.991709, lng: -76.886109}),
        maxBounds: new LatLngBounds(
            new LatLng(-89.98155760646617, -180),
            new LatLng(89.99346179538875, 180),
        ),
        maxBoundsViscosity: 1.0,
    };

    constructor(private ecMapService: CountryOrdersMapService,
                private theme: NbThemeService) {

        combineLatest([
            this.ecMapService.getCords(),
            this.theme.getJsTheme(),
        ])
            .pipe(takeWhile(() => this.alive))
            .subscribe(([cords, config]: [any, any]) => {
                this.currentTheme = config.variables.countryOrders;
                this.layers = [this.createGeoJsonLayer(cords)];
                this.selectFeature(this.findFeatureLayerByCountryId(this.countryId));
            });
    }

    mapReady(map: Map) {
        map.addControl(control.zoom({position: 'bottomright'}));

        // fix the map fully displaying, existing leaflet bag
        setTimeout(() => {
            map.invalidateSize();
        }, 0);
    }

    private createGeoJsonLayer(cords) {
        return geoJSON(
            cords as any,
            {
                style: () => ({
                    weight: this.currentTheme.countryBorderWidth,
                    fillColor: this.currentTheme.countryFillColor,
                    fillOpacity: 1,
                    color: this.currentTheme.countryBorderColor,
                    opacity: 1,
                }),
                onEachFeature: (f, l) => {
                    this.onEachFeature(f, l);
                },
            });
    }

    private onEachFeature(feature, layer) {
        layer.on({
            mouseover: (e) => this.highlightFeature(e.target),
            mouseout: (e) => this.moveout(e.target),
            click: (e) => this.selectFeature(e.target),
        });
    }

    private highlightFeature(featureLayer) {
        if (featureLayer) {
            featureLayer.setStyle({
                weight: this.currentTheme.hoveredCountryBorderWidth,
                fillColor: this.currentTheme.hoveredCountryFillColor,
                color: this.currentTheme.hoveredCountryBorderColor,
            });

            if (!Browser.ie && !Browser.opera12 && !Browser.edge) {
                featureLayer.bringToFront();
            }
        }
    }

    private moveout(featureLayer) {
        if (featureLayer !== this.selectedCountry) {
            this.resetHighlight(featureLayer);

            // When countries have common border we should highlight selected country once again
            this.highlightFeature(this.selectedCountry);
        }
    }

    private resetHighlight(featureLayer) {
        if (featureLayer) {
            const geoJsonLayer = this.layers[0];

            geoJsonLayer.resetStyle(featureLayer);
        }
    }

    private selectFeature(featureLayer) {
        if (featureLayer !== this.selectedCountry) {
            this.resetHighlight(this.selectedCountry);
            this.highlightFeature(featureLayer);
            this.selectedCountry = featureLayer;
            this.select.emit({code: featureLayer.feature.id, name: featureLayer.feature.properties.name});
        }
    }

    private findFeatureLayerByCountryId(id) {
        const layers = this.layers[0].getLayers();
        const featureLayer = layers.find(item => {
            return item.feature.id === id;
        });

        return featureLayer ? featureLayer : null;
    }

    ngOnDestroy(): void {
        this.alive = false;
    }

}
