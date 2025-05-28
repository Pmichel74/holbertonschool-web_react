// Triple slash directive pour inclure les déclarations de types du fichier crud.d.ts
/// <reference path="./crud.d.ts" />

// Import des types RowID et RowElement depuis le fichier interface.ts
import { RowID, RowElement,} from './interface';

// Import des fonctions CRUD depuis le fichier crud.js
import { insertRow, deleteRow, updateRow } from './crud';

// Création d'un objet row de type RowElement avec les informations de base
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insertion de la ligne dans la base de données et récupération de l'ID généré
const newRowID: RowID = insertRow(row);

// Création d'un objet updatedRow avec les mêmes informations plus un champ age
const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23,
};

// Mise à jour de la ligne existante avec les nouvelles informations
updateRow(newRowID, updatedRow);

// Suppression de la ligne de la base de données
deleteRow(newRowID);
