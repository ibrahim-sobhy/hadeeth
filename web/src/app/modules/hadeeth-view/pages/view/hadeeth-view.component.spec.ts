import { TestBed, async } from '@angular/core/testing';
import { HadeethViewComponent } from './hadeeth-view.component';


describe('Show the hadeeth view page', () => {

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [HadeethViewComponent]
      }).compileComponents();
   }));

   it('should have the source of hadeeth', () => {
      const fixture = TestBed.createComponent(HadeethViewComponent);
      const hadeeth = fixture.debugElement.componentInstance;
      expect(hadeeth.sourceOfHadeeth).toEqual('Muhamed');
   });

   it('should show the source of hadeeth', () => {
      const fixture = TestBed.createComponent(HadeethViewComponent);
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('.hadeeth-header__control #hadeeth-source').dataset.value).toEqual('Muhamed');
   });

   it('should have the teller type of hadeeth', () => {
      const fixture = TestBed.createComponent(HadeethViewComponent);
      const hadeeth = fixture.debugElement.componentInstance;
      expect(hadeeth.tellersType).toEqual('Single');
   });

   it('should show the teller type of hadeeth', () => {
      const fixture = TestBed.createComponent(HadeethViewComponent);
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('.hadeeth-header__control #hadeeth-teller').dataset.value).toEqual('Single');
   });

});
