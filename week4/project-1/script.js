// Define an object template for an employee
function Employee(name, age, department, salary) {
    this.name = name;
    this.age = age;
    this.department = department;
    this.salary = salary;
}

// Function to calculate the average salary of all employees
function calculateAverageSalary(employees) {
    if (employees.length === 0) return 0;
    
    let totalSalary = 0;
    employees.forEach(employee => {
        totalSalary += employee.salary;
    });
    
    return totalSalary / employees.length;
}

// Function to find employees in a department
function findEmployeesByDepartment(employees, departmentName) {
    return employees.filter(employee => employee.department === departmentName);
}

// Function to increase salary for employees by a percentage
function increaseSalary(employees, percentageIncrease) {
    employees.forEach(employee => {
        employee.salary *= (1 + percentageIncrease / 100);
    });
}

// Function to sort employees by age in ascending order
function sortEmployeesByAge(employees) {
    return employees.slice().sort((a, b) => a.age - b.age);
}


// Create employee objects
const employees = [
    new Employee('John', 30, 'HR', 50000),
    new Employee('Alice', 35, 'Finance', 60000),
    new Employee('Bob', 28, 'HR', 45000),
    new Employee('Emily', 32, 'IT', 55000),
    new Employee('David', 40, 'Finance', 70000)
];

// Calculate average salary
const averageSalary = calculateAverageSalary(employees);
console.log('Average Salary:', averageSalary);

// Find employees in a department
const hrEmployees = findEmployeesByDepartment(employees, 'HR');
console.log('HR Employees:', hrEmployees);

// Increase salary for employees by 10%
increaseSalary(employees, 10);

// Sort employees by age
const sortedEmployeesByAge = sortEmployeesByAge(employees);
console.log('Employees Sorted by Age:', sortedEmployeesByAge);
