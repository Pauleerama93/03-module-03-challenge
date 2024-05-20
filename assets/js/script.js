 // Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  //Creating a varible to hold the values we are going to collect for employees
  const employees = [];
  // setting up a varible for a while loop and setting it to true so the loop will run
  let employeeFunction = true;
  // A while loop to get input frim the user using prompts
  while(employeeFunction) {
    const firstName = prompt("Enter First Name: ");
    const lastName = prompt("Enter Last Name: ");
    let salary = prompt("Enter Salary: ")
    // Setting a fail safe just in case the user inputs a value that isn't a number
    if (isNaN(salary)){
      salary = 0;
    }
    // setting up a varible with multipule objects to store all of our data gathered from the user
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseInt(salary)
    }
    //Attatching the input gathered into the employees arrary using the push technique 
    employees.push(employee);

    //Setting up a way to end the  by using the confirm
    employeeFunction = confirm("Add Another Employee? ");
  }
   //sorting the data alphabetically
   employees.sort();
  //Logging the employees data as a reference to see if our code is doing what we want it to
  console.log(employees);
  // Ending the function and returning the vaules to the function caller
  return employees;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  // creating a place holder for the for loop that will take all the salaries values and store them
  let totalSalary= 0;
  //Creating the for loop to obtain all the salaries
  for(index = 0; index < employeesArray.length; index++){
    totalSalary += employeesArray[index].salary;
  }
  //Putting in a log to check the total salary that is inputed 
  console.log("Total Salary: " + totalSalary );

  //creating a varible to store the average salary in
  const salaryAverage = totalSalary / employeesArray.length;
  //logging the salary to make sure it is being computed correctly 
  console.log("Salary Average: " + salaryAverage);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  if(employeesArray.length > 1){
  //Creating a varible to store the random employee into
  const randomEmployee = employeesArray[Math.round(Math.random() * employeesArray.length)]
  console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`)
  }
  else{
    console.log("Not enough inputs to generate random employee")
  }
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
