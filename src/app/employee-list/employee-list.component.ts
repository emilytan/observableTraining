import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { EmployeeModel } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, OnDestroy {

  public employees: EmployeeModel[] = [];
  private getEmpSub: Subscription;

  constructor(private employeeService: EmployeeService) { }

  // ngOnInit(): void {
  //   this.employeeService.getEmployees().subscribe(
  //     data => {
  //       this.employees = data;
  //     }
  //   );
  // }

  ngOnInit(): void {
    this.subscribeGetEmp();
  }

  ngOnDestroy(): void {
    this.unsubscribeGetEmp();
  }

  subscribeGetEmp(): void {
    console.log('ngOnInit - BEFORE subscribing to getEmployee');
    this.getEmpSub = this.employeeService.getEmployees()
    .pipe(delay(5000))
    .subscribe(
      data => {
        console.log('During subscription - data', data);
        this.employees = data;
      }
    );
    console.log('ngOnInit - AFTER subscribing to getEmployee');
  }

  unsubscribeGetEmp(): void {
    console.log('unsubscribe');
    this.getEmpSub.unsubscribe();
  }


}
