// Task 1: Création d'une interface Teacher
interface Teacher {
    firstName: string;  // peut seulement être défini à l'initialisation (via les règles TypeScript)
    lastName: string;   // peut seulement être défini à l'initialisation (via les règles TypeScript)
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;  // optionnel et de type number selon les exigences
    location: string;
    [key: string]: any;  // permet d'ajouter n'importe quelle propriété supplémentaire
}

// Exemple d'utilisation de l'interface Teacher selon les exigences
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

console.log(teacher3);

// Task 2: Extension de l'interface Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

// Task 3: Fonction printTeacher avec son interface
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName[0]}. ${lastName}`;
};

// Exemple d'utilisation
console.log(printTeacher("John", "Doe")); // J. Doe

// Task 4: Classe StudentClass avec ses interfaces
interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

// Exemple d'utilisation
const student: StudentClassInterface = new StudentClass('Alice', 'Martin');
console.log(student.displayName()); // Alice
console.log(student.workOnHomework()); // Currently working