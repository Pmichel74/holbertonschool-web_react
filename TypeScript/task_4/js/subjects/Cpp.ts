/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  // Ajoute experienceTeachingC à l'interface Teacher (declaration merging)
  export interface Teacher {
    experienceTeachingC?: number;
  }

  // Classe pour les cours de C++
  export class Cpp extends Subject {
    // Retourne les prérequis pour le cours de C++
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    // Vérifie la disponibilité du professeur selon son expérience en C
    getAvailableTeacher(): string {
      // Si pas d'expérience en enseignement du C
      if (!this.teacher.experienceTeachingC || this.teacher.experienceTeachingC === 0) {
        return 'No available teacher';
      }
      // Si le professeur a de l'expérience en C
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
