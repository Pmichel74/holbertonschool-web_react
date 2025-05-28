/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

namespace Subjects {
  // Ajoute experienceTeachingReact à l'interface Teacher (declaration merging)
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  // Classe pour les cours de React
  export class React extends Subject {
    // Retourne les prérequis pour le cours de React
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    // Vérifie la disponibilité du professeur selon son expérience en React
    getAvailableTeacher(): string {
      // Si pas d'expérience ou expérience <= 0
      if (this.teacher.experienceTeachingReact === undefined || this.teacher.experienceTeachingReact <= 0) {
        return 'No available teacher';
      }
      // Si le professeur a de l'expérience en React
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
