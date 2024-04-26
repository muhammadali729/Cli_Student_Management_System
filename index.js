#! /usr/bin/env node
import inquirer from "inquirer";
class Student {
    id;
    name;
    courses;
    balance;
    constructor(name) {
        this.id = this.generateID();
        this.name = answer.Nameofstudent;
        this.courses = [];
        this.balance = 0;
    }
    generateID() {
        // Generate a random 5-digit ID
        return Math.floor(Math.random() * 100000) + 10000;
    }
    enroll(course) {
        this.courses.push(course);
        this.balance += course.fee;
    }
    payFees(amount) {
        if (amount > this.balance) {
            console.log(`Insufficient funds. Amount due: ${this.balance}`);
        }
        else {
            this.balance -= amount;
            console.log(`Successfully paid ${amount}. Remaining balance: ${this.balance}`);
        }
    }
    showStatus() {
        console.log(`Student ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        if (this.courses.length > 0) {
            console.log("Enrolled Courses:");
            this.courses.forEach((course) => console.log(`  - ${course.name} (${course.fee}) `));
        }
        else {
            console.log("No courses enrolled.");
        }
        console.log(`Balance: ${this.balance}`);
    }
}
const mathCourse = { name: "Mathematics", fee: 10000 };
const scienceCourse = { name: "Science", fee: 15000 };
const answer = await inquirer.prompt([
    {
        message: "Enter New student:",
        type: "string",
        name: "Nameofstudent"
    }
]);
const feespay = await inquirer.prompt([
    {
        message: "How much amount you want to pay:",
        type: "list",
        name: "Feespay",
        choices: ["5000", "10000", "15000", "20000", "25000"]
    }
]);
const student1 = new Student(answer.name);
student1.enroll(mathCourse);
student1.enroll(scienceCourse);
student1.showStatus();
student1.payFees(feespay.Feespay);
student1.showStatus();
student1.payFees(20000);
