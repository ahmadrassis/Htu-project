import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewstartupComponent } from './previewstartup.component';

describe('PreviewstartupComponent', () => {
  let component: PreviewstartupComponent;
  let fixture: ComponentFixture<PreviewstartupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewstartupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewstartupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
