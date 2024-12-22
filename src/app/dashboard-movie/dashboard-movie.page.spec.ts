import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardMoviePage } from './dashboard-movie.page';

describe('DashboardMoviePage', () => {
  let component: DashboardMoviePage;
  let fixture: ComponentFixture<DashboardMoviePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
