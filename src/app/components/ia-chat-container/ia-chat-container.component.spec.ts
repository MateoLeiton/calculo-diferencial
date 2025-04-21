import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaChatContainerComponent } from './ia-chat-container.component';

describe('IaChatContainerComponent', () => {
  let component: IaChatContainerComponent;
  let fixture: ComponentFixture<IaChatContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IaChatContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IaChatContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
