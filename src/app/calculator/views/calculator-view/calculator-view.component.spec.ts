import { ComponentFixture,TestBed } from "@angular/core/testing";
import CalculatorViewComponent from "./calculator-view.component";


describe('CalculatorViewComponent', () => {
  let service: ComponentFixture<CalculatorViewComponent>;
  let compiled: HTMLElement;
  let component: CalculatorViewComponent;

  beforeEach(async()=>{
    await TestBed.configureTestingModule({
      imports: [CalculatorViewComponent],
    }).compileComponents();

    service = TestBed.createComponent(CalculatorViewComponent);
    compiled = service.nativeElement as HTMLElement;
    component = service.componentInstance;
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

   it('should contain calculator component', () => {
    expect(compiled.querySelector('calculator')).not.toBeNull();
   })

  //  it('should contain basic css classes', () => {
  //   const divElement = compiled.querySelector('div');
  //   const divClasses = divElement?.classList.value.split(' ');

  //   const shouldHave = "w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden".split(' ');

  //   shouldHave.forEach(() => {
  //     expect(divClasses).toContain(shouldHave);
  //   })
  //  })

});
