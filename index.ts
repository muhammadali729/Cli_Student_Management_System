#! /usr/bin/env node

import inquirer from "inquirer";

interface Course {
    name: string;
    fee: number;
  }
  
  class Student {
    private id: number;
    name: string;
    courses: Course[];
    balance: number;
  
    constructor(name: string) {
      this.id = this.generateID();
      this.name = answer.Nameofstudent;
      this.courses = [];
      this.balance = 0;
    }
  
    private generateID(): number {
      // Generate a random 5-digit ID
      return Math.floor(Math.random() * 100000) + 10000;
    }
  
    enroll(course: Course): void {
      this.courses.push(course);
      this.balance += course.fee;
    }
  
    payFees(amount: number): void {
      if (amount > this.balance) {
        console.log(`Insufficient funds. Amount due: ${this.balance}`);
      } else {
        this.balance -= amount;
        console.log(`Successfully paid ${amount}. Remaining balance: ${this.balance}`);
      }
    }
  
    showStatus(): void {
      console.log(`Student ID: ${this.id}`);
      console.log(`Name: ${this.name}`);
  
      if (this.courses.length > 0) {
        console.log("Enrolled Courses:");
        this.courses.forEach((course) => console.log(`  - ${course.name} (${course.fee}) `));
      } else {
        console.log("No courses enrolled.");
      }
  
      console.log(`Balance: ${this.balance}`);
    }
  }
  
 
  const mathCourse: Course = { name: "Mathematics", fee: 10000 };
  const scienceCourse: Course = { name: "Science", fee: 15000 };
  

  const answer = await inquirer.prompt(
    [
        {
            message: "Enter New student:",
            type: "string",
            name: "Nameofstudent"
        }
    ]
  )
  const feespay = await inquirer.prompt(
    [
        {
            message: "How much amount you want to pay:",
            type: "list",
            name: "Feespay",
            choices: ["5000", "10000", "15000", "20000", "25000"]
        }
    ]
  )
  const student1 = new Student(answer.name);
  student1.enroll(mathCourse);
  student1.enroll(scienceCourse);
  student1.showStatus();  
  
  student1.payFees(feespay.Feespay);  

  
student1.showStatus();  

student1.payFees(20000); 