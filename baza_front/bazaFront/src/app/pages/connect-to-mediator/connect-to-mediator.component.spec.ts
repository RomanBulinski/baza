import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectToMediatorComponent } from './connect-to-mediator.component';

describe('ConnectToMediatorComponent', () => {
  let component: ConnectToMediatorComponent;
  let fixture: ComponentFixture<ConnectToMediatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnectToMediatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConnectToMediatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
