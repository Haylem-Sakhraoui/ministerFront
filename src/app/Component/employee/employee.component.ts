
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../Services/Employee/employee.service';
import { employer } from '../../model/employee';
import { EmployeeRequest } from '../../model/employeeRequest';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: employer[] = [];
  selectedEmployee: employer | null = null;
  employeeRequest: EmployeeRequest = {};

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(): void {
    this.employeeService.getAllEmployees().subscribe(
      (data: employer[]) => {
        this.employees = data;
      },
      (error) => {
        console.error('Error fetching employees', error);
      }
    );
  }

  getEmployeeById(id: number): void {
    this.employeeService.getEmployeeById(id).subscribe(
      (data: employer) => {
        this.selectedEmployee = data;
      },
      (error) => {
        console.error('Error fetching employee', error);
      }
    );
  }

  addEmployee(): void {
    this.employeeService.addEmployee(this.employeeRequest).subscribe(
      (data: employer) => {
        this.employees.push(data);
        this.employeeRequest = {}; // Reset the form
      },
      (error) => {
        console.error('Error adding employee', error);
      }
    );
  }

  updateEmployee(id: number): void {
    this.employeeService.updateEmployee(id, this.employeeRequest).subscribe(
      (data: employer) => {
        const index = this.employees.findIndex(emp => emp.id === id);
        if (index !== -1) {
          this.employees[index] = data;
        }
        this.selectedEmployee = null;
      },
      (error) => {
        console.error('Error updating employee', error);
      }
    );
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(
      () => {
        this.employees = this.employees.filter(emp => emp.id !== id);
      },
      (error) => {
        console.error('Error deleting employee', error);
      }
    );
  }

  selectEmployee(employee: EmployeeRequest): void {
    this.selectedEmployee = employee;
    this.employeeRequest = { 
      firstName: employee.firstName,
      lastName: employee.lastName,
      position: employee.position,
      age: employee.age,
      salary: employee.salary,
      gender: employee.gender,
      departure: employee.departure,
      displine: employee.displine,
      leaveType: employee.leaveType,
      startDate: employee.startDate,
      endDate: employee.endDate
    };
  }

  clearSelection(): void {
    this.selectedEmployee = null;
    this.employeeRequest = {};
  }
}

