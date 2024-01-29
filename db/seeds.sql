-- Inserting data into the 'department' table
INSERT INTO department (name) VALUES 
('Engineering'),
('Human Resources'),
('Marketing');

-- Inserting data into the 'role' table
-- Note: The department_id should match the id of the departments inserted above
INSERT INTO role (title, salary, department_id) VALUES 
('Software Engineer', 70000, 1),
('Senior Software Engineer', 90000, 1),
('HR Manager', 60000, 2),
('HR Assistant', 45000, 2),
('Marketing Manager', 65000, 3);

-- Inserting data into the 'employee' table
-- Note: The role_id should match the id of the roles inserted above
-- The manager_id is NULL if the employee has no manager or should match the id of another employee
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('Emily', 'Jones', 3, NULL),
('Michael', 'Brown', 4, 3),
('David', 'Wilson', 5, NULL);
