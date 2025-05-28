var cpp = new Subjects.Cpp();
var java = new Subjects.Java();
var react = new Subjects.React();
var cTeacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10,
    experienceTeachingReact: 8,
    experienceTeachingJava: 5
};
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
console.log('\nJava');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
console.log('\nReact');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
//# sourceMappingURL=main.js.map