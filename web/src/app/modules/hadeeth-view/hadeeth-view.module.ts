import { NgModule } from '@angular/core';
import { HadeethViewComponent } from './pages/view/hadeeth-view.component';

@NgModule({
    declarations: [
        HadeethViewComponent
    ],
    exports: [HadeethViewComponent]
    ,
    bootstrap: [HadeethViewComponent]
})
export class HadeethViewModule {}
