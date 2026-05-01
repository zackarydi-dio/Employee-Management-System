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
        console.log("Company Employee List:");
        this.employees.forEach(emp => {
            console.log(emp.describe());
        });
    }

    displayEmployees() {
        const output = document.getElementById("output");
        let html = "<h2>Employee List:</h2><ul>";
        this.employees.forEach(emp => {
            html += `<li>${emp.describe()}</li>`;
        });
        html += "</ul>";
        output.innerHTML = html;
    }
}

const employee1 = new Employee("Alice Johnson", "HR");
const employee2 = new Employee("Brian Smith", "IT");
const manager1 = new Manager("Carol Williams", "Engineering", 5);

const company = new Company();

company.addEmployee(employee1);
company.addEmployee(employee2);
company.addEmployee(manager1);

company.listEmployees();
company.displayEmployees();