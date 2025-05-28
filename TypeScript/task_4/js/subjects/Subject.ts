namespace Subjects {
  // Classe de base pour tous les cours
  export class Subject {
    // Professeur assigné au cours
    teacher: Teacher;

    // Assigne un professeur au cours
    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
