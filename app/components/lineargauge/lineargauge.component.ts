import { Component } from '@angular/core';
import { ChartDataService } from '../../services/chartdata.service';

@Component({
    selector: 'sd-home',
    templateUrl: './lineargauge.component.html',
    providers: [ChartDataService]
})
export class LinearGaugeComponent {
    scale: any;
    constructor(public chartDataService: ChartDataService) {
        this.scale = [{
            width: 4, border: { color: 'transparent', width: 0 }, showRanges: true, length: 310,
            position: { x: 52, y: 50 },
            markerPointers: [{
                value: 50, length: 10, width: 10, backgroundColor: '#4D4D4D', border: { color: '#4D4D4D' }
            }],
            barPointers: [{
                value: 50, width: 0, distanceFromScale: 8, backgroundColor: '#6FAAB0'
            }], labels: [{ font: { size: '11px', fontFamily: 'Segoe UI', fontStyle: 'bold' }, distanceFromScale: { x: -13 } }],
            ticks: [{ type: 'majorinterval', width: 1, color: '#8c8c8c' }],
            ranges: [{
                endValue: 50,
                startValue: 0,
                backgroundColor: '#F6B53F',
                border: { color: '#F6B53F' }, startWidth: 4, endWidth: 4
            }, {
                endValue: 120,
                startValue: 50,
                backgroundColor: '#E94649',
                border: { color: '#E94649' }, startWidth: 4, endWidth: 4
            }]
        }];
    }
}
