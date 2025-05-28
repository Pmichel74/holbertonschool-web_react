/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  // Ajoute experienceTeachingJava à l'interface Teacher (declaration merging)
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  // Classe pour les cours de Java
  export class Java extends Subject {
    // Retourne les prérequis pour le cours de Java
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    // Vérifie la disponibilité du professeur selon son expérience en Java
    getAvailableTeacher(): string {
      // Si le professeur a de l'expérience en Java
      if (this.teacher.experienceTeachingJava !== undefined && this.teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      // Si pas d'expérience ou expérience <= 0
      return 'No available teacher';
    }
  }
}
