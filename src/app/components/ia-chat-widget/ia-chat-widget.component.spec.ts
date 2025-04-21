import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaChatWidgetComponent } from './ia-chat-widget.component';

describe('IaChatWidgetComponent', () => {
  let component: IaChatWidgetComponent;
  let fixture: ComponentFixture<IaChatWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IaChatWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IaChatWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
