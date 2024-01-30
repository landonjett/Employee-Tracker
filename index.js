require('dotenv').config();

const inquirer = require('inquirer');
const { viewDepartments, addDepartment, viewRoles, addRole, viewEmployees, addEmployee, updateEmployeeRole } = require('./lib/queries');

const mainMenu = async () => {
    try {
        const answer = await inquirer.prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View All Departments',
                'Add a Department',
                'View All Roles',
                'Add a Role',
                'View All Employees',
                'Add an Employee',
                'Update an Employee Role',
                'Exit'
            ],
        });

        switch (answer.action) {
            case 'View All Departments':
                await viewDepartments();
                break;
            case 'Add a Department':
                await promptAddDepartment();
                break;
            case 'View All Roles':
                await viewRoles();
                break;
            case 'Add a Role':
                await promptAddRole();
                break;
            case 'View All Employees':
                await viewEmployees();
                break;
            case 'Add an Employee':
                await promptAddEmployee();
                break;
            case 'Update an Employee Role':
                await promptUpdateEmployeeRole();
                break;
            case 'Exit':
                process.exit();
            default:
                console.log(`Invalid action: ${answer.action}`);
                break;
        }
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
    await mainMenu();
};

const promptAddDepartment = async () => {
    const answer = await inquirer.prompt({
        name: 'departmentName',
        type: 'input',
        message: 'What is the name of the department?',
    });
    await addDepartment(answer.departmentName);
};

const promptAddRole = async () => {
    const answer = await inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: 'What is the title of the role?',
        },
        {
            name: 'salary',
            type: 'input',
            message: 'What is the salary for the role?',
        },
        {
            name: 'departmentId',
            type: 'input',
            message: 'What is the department ID for the role?',
        },
    ]);
    await addRole(answer.title, answer.salary, answer.departmentId);
};

const promptAddEmployee = async () => {
    const answer = await inquirer.prompt([
        {
            name: 'firstName',
            type: 'input',
            message: 'What is the first name of the employee?',
        },
        {
            name: 'lastName',
            type: 'input',
            message: 'What is the last name of the employee?',
        },
        {
            name: 'roleId',
            type: 'input',
            message: 'What is the role ID for the employee?',
        },
        {
            name: 'managerId',
            type: 'input',
            message: 'What is the manager ID for the employee?',
        },
    ]);
    await addEmployee(answer.firstName, answer.lastName, answer.roleId, answer.managerId);
};

const promptUpdateEmployeeRole = async () => {
    const employees = await viewEmployees();  // Retrieve and store the employee data
    const roles = await viewRoles();          // Retrieve and store the roles data

    // Ensure that employees and roles are not undefined
    if (!employees || !roles) {
        console.log("Unable to retrieve employees or roles.");
        return;
    }

    const employeeChoices = employees.map(emp => ({
        name: `${emp.first_name} ${emp.last_name}`,
        value: emp.id
    }));

    const roleChoices = roles.map(role => ({
        name: role.title,
        value: role.id
    }));

    const employeeAnswers = await inquirer.prompt([
        {
            name: 'employeeId',
            type: 'list',
            choices: employeeChoices,
            message: 'Which employee\'s role do you want to update?',
        }
    ]);

    const roleAnswers = await inquirer.prompt([
        {
            name: 'roleId',
            type: 'list',
            choices: roleChoices,
            message: 'What is the new role?',
        }
    ]);

    await updateEmployeeRole(employeeAnswers.employeeId, roleAnswers.roleId);
    console.log('Employee role updated successfully.');
};

// ...

mainMenu();
