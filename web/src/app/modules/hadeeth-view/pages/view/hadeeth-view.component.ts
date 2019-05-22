import { Component } from '@angular/core';

@Component({
    selector: 'hadeeth-view',
    templateUrl: 'hadeeth-view.component.html',
    styleUrls: ['hadeeth-view.component.scss']
})
export class HadeethViewComponent {
    sourceOfHadeeth: string = 'Muhamed';
    tellersType: string = 'Single';
}