
// Interface pour les crédits majeurs
interface MajorCredits {
  credits: number;
}

// Interface pour les crédits mineurs
interface MinorCredits {
  credits: number;
}

// Additionne les crédits de deux matières majeures
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
  };
}

// Additionne les crédits de deux matières mineures
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
  };
}
