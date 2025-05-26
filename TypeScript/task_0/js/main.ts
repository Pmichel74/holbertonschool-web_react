// Définir l'interface Student avec les propriétés requises
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Créer le premier objet étudiant
const student1: Student = {
  firstName: 'Pat',
  lastName: 'Mich',
  age: 51,
  location: 'Thonon',
};

// Créer le deuxième objet étudiant
const student2: Student = {
  firstName: 'Sarah',
  lastName: 'Connor',
  age: 36,
  location: 'Los Angeles',
};

// Créer un tableau contenant les deux étudiants
const studentsList: Student[] = [student1, student2];

// Récupérer l'élément body du DOM
const body = document.getElementsByTagName('body')[0];

// Créer les éléments de structure du tableau
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

// Créer la ligne d'en-tête et les cellules
const headerRow = document.createElement('tr');
const firstNameHeader = document.createElement('th');
const locationHeader = document.createElement('th');

// Définir le texte des en-têtes
firstNameHeader.textContent = 'Prénom';
locationHeader.textContent = 'Localisation';

// Ajouter les en-têtes à la ligne d'en-tête, puis à thead
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
thead.appendChild(headerRow);

// Parcourir le tableau des étudiants pour créer les lignes du tableau
studentsList.forEach((student: Student) => {
  // Créer une ligne et des cellules pour chaque étudiant
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  // Définir le contenu des cellules avec les données de l'étudiant
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  // Ajouter les cellules à la ligne, puis la ligne à tbody
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

// Assembler la structure du tableau et l'ajouter à la page
table.appendChild(thead);
table.appendChild(tbody);
body.appendChild(table);
