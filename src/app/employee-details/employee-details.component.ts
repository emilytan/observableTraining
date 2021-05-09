import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.subscribeGetEmp();
  }

  subscribeGetEmp(): void {
    console.log('ngOnInit - BEFORE subscribing to getEmployee');
    this.employeeService.getEmployees()
    .pipe(delay(5000))
    .subscribe(
      data => {
        console.log('During subscription - data', data);
        // this.employeeData = data;
      }
    );
    console.log('ngOnInit - AFTER subscribing to getEmployee');
  }

}
