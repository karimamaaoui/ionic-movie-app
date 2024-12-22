import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateMoviePage } from './update-movie.page';

describe('UpdateMoviePage', () => {
  let component: UpdateMoviePage;
  let fixture: ComponentFixture<UpdateMoviePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
