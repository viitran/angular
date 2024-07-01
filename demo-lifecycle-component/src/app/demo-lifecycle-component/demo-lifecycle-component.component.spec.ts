import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoLifecycleComponentComponent } from './demo-lifecycle-component.component';

describe('DemoLifecycleComponentComponent', () => {
  let component: DemoLifecycleComponentComponent;
  let fixture: ComponentFixture<DemoLifecycleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoLifecycleComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoLifecycleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
