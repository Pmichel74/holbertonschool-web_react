// Task 5: Advanced types Part 1

/**
 * Interface defining the contract for Director employees
 * Contains methods related to director-specific work activities
 */
interface DirectorInterface {
  workFromHome(): string; // Method to handle remote work for directors
  getCoffeeBreak(): string; // Method to handle coffee breaks for directors
  workDirectorTasks(): string; // Method to handle director-specific tasks
}

/**
 * Interface defining the contract for Teacher employees
 * Contains methods related to teacher-specific work activities
 */
interface TeacherInterface {
  workFromHome(): string; // Method to handle remote work for teachers
  getCoffeeBreak(): string; // Method to handle coffee breaks for teachers
  workTeacherTasks(): string; // Method to handle teacher-specific tasks
}

/**
 * Director class implementing DirectorInterface
 * Represents a director employee with specific work privileges
 */
class Director implements DirectorInterface {
  /**
   * Directors can work from home
   * @returns A string indicating the director can work remotely
   */
  workFromHome(): string {
    return 'Working from home';
  }

  /**
   * Directors are allowed to take coffee breaks
   * @returns A string indicating the director is taking a coffee break
   */
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  /**
   * Directors perform director-specific tasks
   * @returns A string indicating the director is working on director tasks
   */
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

/**
 * Teacher class implementing TeacherInterface
 * Represents a teacher employee with specific work restrictions
 */
class Teacher implements TeacherInterface {
  /**
   * Teachers cannot work from home
   * @returns A string indicating the teacher cannot work remotely
   */
  workFromHome(): string {
    return 'Cannot work from home';
  }

  /**
   * Teachers cannot take coffee breaks during work hours
   * @returns A string indicating the teacher cannot have a break
   */
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  /**
   * Teachers perform teacher-specific tasks
   * @returns A string indicating the teacher is working
   */
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

/**
 * Factory function to create an employee based on salary
 * Creates either a Director or Teacher instance depending on the salary amount
 *
 * @param salary - The salary of the employee (can be a number or string)
 * @returns A Director instance if salary >= 500 or is a string, Teacher otherwise
 */
function createEmployee(salary: number | string): Director | Teacher {
  // If salary is a number and less than 500, create a Teacher
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  // Otherwise, create a Director (for high salaries or string values)
  return new Director();
}

//task 6 : Creating functions specific to employees

function isDirector(employee: Director  | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
    }

/**
 * Function that executes work based on employee type
 * Uses the isDirector type predicate to determine which method to call
 *
 * @param employee - The employee (Director or Teacher)
 * @returns The result of the appropriate work method
 */
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Task 7: String literal types

/**
 * String literal type that restricts values to only 'Math' or 'History'
 * This ensures type safety and prevents invalid subject values
 */
type Subjects = 'Math' | 'History';

/**
 * Function that returns a teaching message based on the subject
 * Uses conditional statements to determine the appropriate response
 * 
 * @param subject - The subject to teach (Math or History)
 * @returns A string indicating what is being taught today
 */
function todayClass(subject: Subjects): string {
  if (subject === 'Math') {
    return 'Teaching Math today!';
  }
  if (subject === 'History') {
    return 'Teaching History today!';
  }
}

/**
 * Function that returns a simple teaching message based on the class subject
 * Uses conditional statements to determine the appropriate response
 * 
 * @param todayClass - The subject being taught today (Math or History)
 * @returns A string indicating the subject being taught
 * 
 * Expected behavior:
 * - teachClass('Math') returns 'Teaching Math'
 * - teachClass('History') returns 'Teaching History'
 */
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  if (todayClass === 'History') {
    return 'Teaching History';
  }
}

