import {Component} from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './localdata.component.html'
})
export class LocalDataComponent {
    localdata: Array<Object> = [];
    localfields: Object;
    constructor() {
     this.localdata = [
                 { empid: 'bk1', text: 'Apache RTR' }, { empid: 'bk2', text: 'CBR 150-R' }, { empid: 'bk3', text: 'CBZ Xtreme' },
                 { empid: 'bk4', text: 'Discover' }, { empid: 'bk5', text: 'Dazzler' }, { empid: 'bk6', text: 'Flame' },
                 { empid: 'bk7', text: 'Fazzer' }, { empid: 'bk8', text: 'FZ-S' }, { empid: 'bk9', text: 'Pulsar' },
                 { empid: 'bk10', text: 'Shine' }, { empid: 'bk11', text: 'R15' }, { empid: 'bk12', text: 'Unicorn' }
            ];
        this.localfields = { dataSource: this.localdata, id: 'empid', text: 'text', value: 'text' };
    }
}
