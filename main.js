#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.yellow.bgRedBright("Welcome to To Do List") + " ");
console.log(chalk.bold.green("created by AHMED RAZA"));
let todos = [];
async function createTodo(todos) {
    do {
        let answer = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Select and Operation",
            choices: ["Add Task", "Update Task", "View Task", "Mark as Completed", "Delete Task", "Exit Task"]
        });
        if (answer.select == "Add Task") {
            let addTodo = await inquirer.prompt({
                type: "input",
                name: "add",
                message: "Add Items in the List"
            });
            todos.push(addTodo.add);
            console.log(chalk.bold.green("Task Added Successfully"));
            todos.forEach(todo => { console.log(todo); });
        }
        if (answer.select == "Update Task") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                name: "update",
                message: "Select Item to Update",
                choices: todos.map(item => item),
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                name: "add",
                message: "Add Items in the List"
            });
            let newTodo = todos.filter(val => val !== updateTodo.update);
            todos = [...newTodo, addTodo.add];
            console.log(chalk.bold.green("Task Updated Successfully"));
            todos.forEach(todo => { console.log(todo); });
        }
        if (answer.select == "View Task") {
            console.log(chalk.bold.blue("**** To Do List *****"));
            todos.forEach(todo => { console.log(todo); });
            console.log(chalk.bold.blue("*************"));
        }
        if (answer.select == "Mark as Completed") {
            let completeTodo = await inquirer.prompt({
                type: "list",
                name: "complete",
                message: "Select Item to Complete",
                choices: todos.map(item => item),
            });
            let newTodo = todos.filter(val => val !== completeTodo.complete);
            todos = [...newTodo];
            console.log(chalk.bold.green("Task Completed Successfully"));
            todos.forEach(todo => { console.log(todo); });
        }
        if (answer.select == "Delete Task") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                name: "delete",
                message: "Select Item to Delete",
                choices: todos.map(item => item),
            });
            let newTodo = todos.filter(val => val !== deleteTodo.delete);
            todos = [...newTodo];
            console.log(chalk.bold.green("Task Deleted Successfully"));
            todos.forEach(todo => { console.log(todo); });
        }
        if (answer.select == "Exit Task") {
            console.log(chalk.bold.blue("Thanks for Using My ToDo Application"));
            break;
        }
    } while (true);
}
createTodo(todos);
