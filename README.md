## Employee Management System

A small JavaScript application demonstrating object-oriented programming principles by modeling employees, managers, and a company structure.

### Features

- Defines a reusable `Employee` class for general staff members
- Extends `Employee` with a `Manager` class to represent leaders with team size information
- Uses a `Company` class to manage a collection of employees
- Supports both console output and browser-based rendering

### Project Structure

- `index.html` - Simple web page that loads the application and renders employee information
- `cc_6.js` - Core JavaScript implementation for the employee management system
- `README.md` - Project overview and usage instructions

### How It Works

The application creates sample data for two employees and one manager, then adds them to a company instance. The company:

- logs each employee description to the browser console
- renders a formatted employee list into the HTML page

### Usage

1. Open `index.html` in a web browser.
2. The employee list will be displayed directly on the page.
3. Open the browser console to review the same employee descriptions.

### Classes

- `Employee`
  - Properties: `name`, `department`
  - Method: `describe()` returns a text summary of the employee
- `Manager` extends `Employee`
  - Additional property: `teamSize`
  - Overrides `describe()` with manager-specific details
- `Company`
  - Stores an array of employees
  - Methods: `addEmployee()`, `listEmployees()`, `displayEmployees()`

### Notes

This project is intended as a learning exercise for object-oriented design in JavaScript and can be extended to include additional roles, user input, or persistence.
