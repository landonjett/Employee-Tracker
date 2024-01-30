const connection = require('/Users/landonjett/bootcamp/homework/even/Employee-Tracker/db/connection.js');

const viewDepartments = async () => {
    const [rows] = await connection.promise().query("SELECT * FROM department");
    console.table(rows);
    return rows;
};

const addDepartment = async (departmentName) => {
    await connection.promise().query("INSERT INTO department (name) VALUES (?)", [departmentName]);
};

const viewRoles = async () => {
    const [rows] = await connection.promise().query("SELECT * FROM role");
    console.table(rows);
    return rows;
};

const addRole = async (title, salary, departmentId) => {
    await connection.promise().query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [title, salary, departmentId]);
};

const viewEmployees = async () => {
    const query = `
        SELECT 
            e.id, 
            e.first_name, 
            e.last_name, 
            r.title, 
            d.name AS department,
            r.salary, 
            CONCAT(m.first_name, ' ', m.last_name) AS manager
        FROM 
            employee e
            LEFT JOIN role r ON e.role_id = r.id
            LEFT JOIN department d ON r.department_id = d.id
            LEFT JOIN employee m ON m.id = e.manager_id;
    `;
    const [rows] = await connection.promise().query(query);
    console.table(rows);
    return rows;  
};

const addEmployee = async (firstName, lastName, roleId, managerId) => {
    await connection.promise().query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [firstName, lastName, roleId, managerId]);
};

const updateEmployeeRole = async (employeeId, newRoleId) => {
    await connection.promise().query("UPDATE employee SET role_id = ? WHERE id = ?", [newRoleId, employeeId]);
};

module.exports = { viewDepartments, addDepartment, viewRoles, addRole, viewEmployees, addEmployee, updateEmployeeRole };