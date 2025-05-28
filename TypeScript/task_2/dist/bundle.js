/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

// Task 5: Advanced types Part 1
/**
 * Director class implementing DirectorInterface
 * Represents a director employee with specific work privileges
 */
var Director = /** @class */ (function () {
    function Director() {
    }
    /**
     * Directors can work from home
     * @returns A string indicating the director can work remotely
     */
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    /**
     * Directors are allowed to take coffee breaks
     * @returns A string indicating the director is taking a coffee break
     */
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    /**
     * Directors perform director-specific tasks
     * @returns A string indicating the director is working on director tasks
     */
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
/**
 * Teacher class implementing TeacherInterface
 * Represents a teacher employee with specific work restrictions
 */
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    /**
     * Teachers cannot work from home
     * @returns A string indicating the teacher cannot work remotely
     */
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    /**
     * Teachers cannot take coffee breaks during work hours
     * @returns A string indicating the teacher cannot have a break
     */
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    /**
     * Teachers perform teacher-specific tasks
     * @returns A string indicating the teacher is working
     */
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
/**
 * Factory function to create an employee based on salary
 * Creates either a Director or Teacher instance depending on the salary amount
 *
 * @param salary - The salary of the employee (can be a number or string)
 * @returns A Director instance if salary >= 500 or is a string, Teacher otherwise
 */
function createEmployee(salary) {
    // If salary is a number and less than 500, create a Teacher
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    // Otherwise, create a Director (for high salaries or string values)
    return new Director();
}
//task 6 : Creating functions specific to employees
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
/**
 * Function that executes work based on employee type
 * Uses the isDirector type predicate to determine which method to call
 *
 * @param employee - The employee (Director or Teacher)
 * @returns The result of the appropriate work method
 */
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
// Test the expected results
console.log(executeWork(createEmployee(200))); // Should print: Getting to work
console.log(executeWork(createEmployee(1000))); // Should print: Getting to director tasks

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdDQUFnQztBQXNCaEM7OztHQUdHO0FBQ0g7SUFBQTtJQXdCQSxDQUFDO0lBdkJDOzs7T0FHRztJQUNILCtCQUFZLEdBQVo7UUFDRSxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxpQ0FBYyxHQUFkO1FBQ0UsT0FBTyx3QkFBd0IsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsb0NBQWlCLEdBQWpCO1FBQ0UsT0FBTywyQkFBMkIsQ0FBQztJQUNyQyxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7QUFFRDs7O0dBR0c7QUFDSDtJQUFBO0lBd0JBLENBQUM7SUF2QkM7OztPQUdHO0lBQ0gsOEJBQVksR0FBWjtRQUNFLE9BQU8sdUJBQXVCLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7T0FHRztJQUNILGdDQUFjLEdBQWQ7UUFDRSxPQUFPLHFCQUFxQixDQUFDO0lBQy9CLENBQUM7SUFFRDs7O09BR0c7SUFDSCxrQ0FBZ0IsR0FBaEI7UUFDRSxPQUFPLGlCQUFpQixDQUFDO0lBQzNCLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILFNBQVMsY0FBYyxDQUFDLE1BQXVCO0lBQzdDLDREQUE0RDtJQUM1RCxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLEdBQUcsR0FBRyxFQUFFO1FBQzlDLE9BQU8sSUFBSSxPQUFPLEVBQUUsQ0FBQztLQUN0QjtJQUNELG9FQUFvRTtJQUNwRSxPQUFPLElBQUksUUFBUSxFQUFFLENBQUM7QUFDeEIsQ0FBQztBQUVELG1EQUFtRDtBQUduRCxTQUFTLFVBQVUsQ0FBQyxRQUE2QjtJQUM3QyxPQUFRLFFBQXFCLENBQUMsaUJBQWlCLEtBQUssU0FBUyxDQUFDO0FBQzlELENBQUM7QUFFTDs7Ozs7O0dBTUc7QUFDSCxTQUFTLFdBQVcsQ0FBQyxRQUE0QjtJQUMvQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUN4QixPQUFPLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0tBQ3JDO1NBQU07UUFDTCxPQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0tBQ3BDO0FBQ0gsQ0FBQztBQUVELDRCQUE0QjtBQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUUsZ0NBQWdDO0FBQ2hGLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQywwQ0FBMEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGFzayA1OiBBZHZhbmNlZCB0eXBlcyBQYXJ0IDFcblxuLyoqXG4gKiBJbnRlcmZhY2UgZGVmaW5pbmcgdGhlIGNvbnRyYWN0IGZvciBEaXJlY3RvciBlbXBsb3llZXNcbiAqIENvbnRhaW5zIG1ldGhvZHMgcmVsYXRlZCB0byBkaXJlY3Rvci1zcGVjaWZpYyB3b3JrIGFjdGl2aXRpZXNcbiAqL1xuaW50ZXJmYWNlIERpcmVjdG9ySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZzsgLy8gTWV0aG9kIHRvIGhhbmRsZSByZW1vdGUgd29yayBmb3IgZGlyZWN0b3JzXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZzsgLy8gTWV0aG9kIHRvIGhhbmRsZSBjb2ZmZWUgYnJlYWtzIGZvciBkaXJlY3RvcnNcbiAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nOyAvLyBNZXRob2QgdG8gaGFuZGxlIGRpcmVjdG9yLXNwZWNpZmljIHRhc2tzXG59XG5cbi8qKlxuICogSW50ZXJmYWNlIGRlZmluaW5nIHRoZSBjb250cmFjdCBmb3IgVGVhY2hlciBlbXBsb3llZXNcbiAqIENvbnRhaW5zIG1ldGhvZHMgcmVsYXRlZCB0byB0ZWFjaGVyLXNwZWNpZmljIHdvcmsgYWN0aXZpdGllc1xuICovXG5pbnRlcmZhY2UgVGVhY2hlckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7IC8vIE1ldGhvZCB0byBoYW5kbGUgcmVtb3RlIHdvcmsgZm9yIHRlYWNoZXJzXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZzsgLy8gTWV0aG9kIHRvIGhhbmRsZSBjb2ZmZWUgYnJlYWtzIGZvciB0ZWFjaGVyc1xuICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZzsgLy8gTWV0aG9kIHRvIGhhbmRsZSB0ZWFjaGVyLXNwZWNpZmljIHRhc2tzXG59XG5cbi8qKlxuICogRGlyZWN0b3IgY2xhc3MgaW1wbGVtZW50aW5nIERpcmVjdG9ySW50ZXJmYWNlXG4gKiBSZXByZXNlbnRzIGEgZGlyZWN0b3IgZW1wbG95ZWUgd2l0aCBzcGVjaWZpYyB3b3JrIHByaXZpbGVnZXNcbiAqL1xuY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZSB7XG4gIC8qKlxuICAgKiBEaXJlY3RvcnMgY2FuIHdvcmsgZnJvbSBob21lXG4gICAqIEByZXR1cm5zIEEgc3RyaW5nIGluZGljYXRpbmcgdGhlIGRpcmVjdG9yIGNhbiB3b3JrIHJlbW90ZWx5XG4gICAqL1xuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ1dvcmtpbmcgZnJvbSBob21lJztcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXJlY3RvcnMgYXJlIGFsbG93ZWQgdG8gdGFrZSBjb2ZmZWUgYnJlYWtzXG4gICAqIEByZXR1cm5zIEEgc3RyaW5nIGluZGljYXRpbmcgdGhlIGRpcmVjdG9yIGlzIHRha2luZyBhIGNvZmZlZSBicmVha1xuICAgKi9cbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0dldHRpbmcgYSBjb2ZmZWUgYnJlYWsnO1xuICB9XG5cbiAgLyoqXG4gICAqIERpcmVjdG9ycyBwZXJmb3JtIGRpcmVjdG9yLXNwZWNpZmljIHRhc2tzXG4gICAqIEByZXR1cm5zIEEgc3RyaW5nIGluZGljYXRpbmcgdGhlIGRpcmVjdG9yIGlzIHdvcmtpbmcgb24gZGlyZWN0b3IgdGFza3NcbiAgICovXG4gIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzJztcbiAgfVxufVxuXG4vKipcbiAqIFRlYWNoZXIgY2xhc3MgaW1wbGVtZW50aW5nIFRlYWNoZXJJbnRlcmZhY2VcbiAqIFJlcHJlc2VudHMgYSB0ZWFjaGVyIGVtcGxveWVlIHdpdGggc3BlY2lmaWMgd29yayByZXN0cmljdGlvbnNcbiAqL1xuY2xhc3MgVGVhY2hlciBpbXBsZW1lbnRzIFRlYWNoZXJJbnRlcmZhY2Uge1xuICAvKipcbiAgICogVGVhY2hlcnMgY2Fubm90IHdvcmsgZnJvbSBob21lXG4gICAqIEByZXR1cm5zIEEgc3RyaW5nIGluZGljYXRpbmcgdGhlIHRlYWNoZXIgY2Fubm90IHdvcmsgcmVtb3RlbHlcbiAgICovXG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnQ2Fubm90IHdvcmsgZnJvbSBob21lJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUZWFjaGVycyBjYW5ub3QgdGFrZSBjb2ZmZWUgYnJlYWtzIGR1cmluZyB3b3JrIGhvdXJzXG4gICAqIEByZXR1cm5zIEEgc3RyaW5nIGluZGljYXRpbmcgdGhlIHRlYWNoZXIgY2Fubm90IGhhdmUgYSBicmVha1xuICAgKi9cbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0Nhbm5vdCBoYXZlIGEgYnJlYWsnO1xuICB9XG5cbiAgLyoqXG4gICAqIFRlYWNoZXJzIHBlcmZvcm0gdGVhY2hlci1zcGVjaWZpYyB0YXNrc1xuICAgKiBAcmV0dXJucyBBIHN0cmluZyBpbmRpY2F0aW5nIHRoZSB0ZWFjaGVyIGlzIHdvcmtpbmdcbiAgICovXG4gIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0dldHRpbmcgdG8gd29yayc7XG4gIH1cbn1cblxuLyoqXG4gKiBGYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBhbiBlbXBsb3llZSBiYXNlZCBvbiBzYWxhcnlcbiAqIENyZWF0ZXMgZWl0aGVyIGEgRGlyZWN0b3Igb3IgVGVhY2hlciBpbnN0YW5jZSBkZXBlbmRpbmcgb24gdGhlIHNhbGFyeSBhbW91bnRcbiAqXG4gKiBAcGFyYW0gc2FsYXJ5IC0gVGhlIHNhbGFyeSBvZiB0aGUgZW1wbG95ZWUgKGNhbiBiZSBhIG51bWJlciBvciBzdHJpbmcpXG4gKiBAcmV0dXJucyBBIERpcmVjdG9yIGluc3RhbmNlIGlmIHNhbGFyeSA+PSA1MDAgb3IgaXMgYSBzdHJpbmcsIFRlYWNoZXIgb3RoZXJ3aXNlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVtcGxveWVlKHNhbGFyeTogbnVtYmVyIHwgc3RyaW5nKTogRGlyZWN0b3IgfCBUZWFjaGVyIHtcbiAgLy8gSWYgc2FsYXJ5IGlzIGEgbnVtYmVyIGFuZCBsZXNzIHRoYW4gNTAwLCBjcmVhdGUgYSBUZWFjaGVyXG4gIGlmICh0eXBlb2Ygc2FsYXJ5ID09PSAnbnVtYmVyJyAmJiBzYWxhcnkgPCA1MDApIHtcbiAgICByZXR1cm4gbmV3IFRlYWNoZXIoKTtcbiAgfVxuICAvLyBPdGhlcndpc2UsIGNyZWF0ZSBhIERpcmVjdG9yIChmb3IgaGlnaCBzYWxhcmllcyBvciBzdHJpbmcgdmFsdWVzKVxuICByZXR1cm4gbmV3IERpcmVjdG9yKCk7XG59XG5cbi8vdGFzayA2IDogQ3JlYXRpbmcgZnVuY3Rpb25zIHNwZWNpZmljIHRvIGVtcGxveWVlc1xuXG5cbmZ1bmN0aW9uIGlzRGlyZWN0b3IoZW1wbG95ZWU6IERpcmVjdG9yICB8IFRlYWNoZXIpOiBlbXBsb3llZSBpcyBEaXJlY3RvciB7XG4gICAgcmV0dXJuIChlbXBsb3llZSBhcyBEaXJlY3Rvcikud29ya0RpcmVjdG9yVGFza3MgIT09IHVuZGVmaW5lZDtcbiAgICB9XG5cbi8qKlxuICogRnVuY3Rpb24gdGhhdCBleGVjdXRlcyB3b3JrIGJhc2VkIG9uIGVtcGxveWVlIHR5cGVcbiAqIFVzZXMgdGhlIGlzRGlyZWN0b3IgdHlwZSBwcmVkaWNhdGUgdG8gZGV0ZXJtaW5lIHdoaWNoIG1ldGhvZCB0byBjYWxsXG4gKlxuICogQHBhcmFtIGVtcGxveWVlIC0gVGhlIGVtcGxveWVlIChEaXJlY3RvciBvciBUZWFjaGVyKVxuICogQHJldHVybnMgVGhlIHJlc3VsdCBvZiB0aGUgYXBwcm9wcmlhdGUgd29yayBtZXRob2RcbiAqL1xuZnVuY3Rpb24gZXhlY3V0ZVdvcmsoZW1wbG95ZWU6IERpcmVjdG9yIHwgVGVhY2hlcik6IHN0cmluZyB7XG4gIGlmIChpc0RpcmVjdG9yKGVtcGxveWVlKSkge1xuICAgIHJldHVybiBlbXBsb3llZS53b3JrRGlyZWN0b3JUYXNrcygpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlbXBsb3llZS53b3JrVGVhY2hlclRhc2tzKCk7XG4gIH1cbn1cblxuLy8gVGVzdCB0aGUgZXhwZWN0ZWQgcmVzdWx0c1xuY29uc29sZS5sb2coZXhlY3V0ZVdvcmsoY3JlYXRlRW1wbG95ZWUoMjAwKSkpOyAgLy8gU2hvdWxkIHByaW50OiBHZXR0aW5nIHRvIHdvcmtcbmNvbnNvbGUubG9nKGV4ZWN1dGVXb3JrKGNyZWF0ZUVtcGxveWVlKDEwMDApKSk7IC8vIFNob3VsZCBwcmludDogR2V0dGluZyB0byBkaXJlY3RvciB0YXNrc1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=