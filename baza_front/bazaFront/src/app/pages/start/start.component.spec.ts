import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartComponent } from './start.component';
import {MatSnackBar} from "@angular/material/snack-bar";
import { By } from '@angular/platform-browser';

describe('StartComponent', () => {
  let component: StartComponent;
  let fixture: ComponentFixture<StartComponent>;
  let snackBarSpy: jasmine.SpyObj<MatSnackBar>;

  beforeEach(async () => {

    // Tworzenie szpiega dla MatSnackBar
    const spy = jasmine.createSpyObj('MatSnackBar', ['open']);


    await TestBed.configureTestingModule({
      imports: [StartComponent],
      declarations: [StartComponent],
      providers: [
        { provide: MatSnackBar, useValue: spy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartComponent);
    component = fixture.componentInstance;
    snackBarSpy = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display "start works!!!!"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('start works!!!!');
  });

  it('should call openSnackBar with correct arguments when button is clicked', () => {
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    expect(snackBarSpy.open).toHaveBeenCalledWith('Hello, this is a message!', 'Close');
  });

});
