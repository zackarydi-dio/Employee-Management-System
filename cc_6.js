// Employee Management System
// This script demonstrates object-oriented design using ES6 classes and renders results in the browser.

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `Employee: ${this.name} works in the ${this.department} department.`;
    }
}

class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    describe() {
        return `Manager: ${this.name} leads the ${this.department} department with a team of ${this.teamSize} employees.`;
    }
}

class Company {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        console.log('Company Employee List:');
        this.employees.forEach(employee => {
            console.log(employee.describe());
        });
    }

    renderEmployeeList() {
        const outputElement = document.getElementById('output');
        if (!outputElement) {
            console.warn('No output container found. Employee list will not be rendered in the page.');
            return;
        }

        const listItems = this.employees
            .map(employee => `<li>${employee.describe()}</li>`)
            .join('');

        outputElement.innerHTML = `
            <section>
                <h2>Employee List</h2>
                <ul>${listItems}</ul>
            </section>
        `;
    }
}

const company = new Company();
company.addEmployee(new Employee('Alice Johnson', 'HR'));
company.addEmployee(new Employee('Brian Smith', 'IT'));
company.addEmployee(new Manager('Carol Williams', 'Engineering', 5));

company.listEmployees();
company.renderEmployeeList();