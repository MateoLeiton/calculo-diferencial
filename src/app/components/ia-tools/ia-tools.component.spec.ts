import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaToolsComponent } from './ia-tools.component';

describe('IaToolsComponent', () => {
  let component: IaToolsComponent;
  let fixture: ComponentFixture<IaToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IaToolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IaToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
