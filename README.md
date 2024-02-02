# Employee Tracker

## Description

Employee Tracker is a command-line application for managing a company's employee database. It allows users to view and interact with information stored in a MySQL database, such as departments, roles, and employee details. This application is built with Node.js, Inquirer, and MySQL, making it easy for non-developers to view and manage employee data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [Video Demonstration](#video-demonstration)
- [Questions](#questions)

## Installation

To install this application, follow these steps:

1. Clone the repository from GitHub.
2. Navigate to the directory of the cloned repository in your terminal.
3. Install the necessary Node.js packages by running: `npm install`.
4. Ensure you have MySQL installed on your system.
5. Create a `.env` file in the root directory and add your MySQL credentials:
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_mysql_password
   DB_NAME=employee_db
   ```
6. Set up the database using the `schema.sql` file located in the `db` directory. Optionally, use `seeds.sql` to populate the database with initial data.
7. Run the application with `node index.js`.

## Usage

To use Employee Tracker, run the application and follow the prompts to:

- View all departments, roles, and employees
- Add departments, roles, and employees
- Update employee roles
- Exit the application

The application provides a clean, user-friendly interface for non-technical users to manage employee data easily.

## Features

- **View All Departments**: Displays a formatted table showing department names and department IDs.
- **View All Roles**: Shows job titles, role IDs, departments, and salaries.
- **View All Employees**: Lists employees with their IDs, names, roles, departments, salaries, and managers.
- **Add Departments/Roles/Employees**: Enables adding new departments, roles, and employees to the database.
- **Update Employee Roles**: Allows updating the role of an existing employee.

## Database Schema

The database schema includes three tables:

- `department`: Contains department names and department IDs.
- `role`: Holds role titles, role IDs, salaries, and department IDs.
- `employee`: Stores employee IDs, first names, last names, role IDs, and manager IDs.

## Contributing

To contribute to this project, please create a pull request or contact the author.

## Video Demonstration

[Click here](https://drive.google.com/file/d/17mx3AprY5Pst62wgm1SM91vO_QHqdSW6/view) for a video demonstration of the application.

## Questions

For any questions or issues, please open an issue or contact the repository owner.

---

Feel free to add or modify any sections according to the specifics of your project. If you have a GitHub repository for this project, it's a good idea to include this README file there.
