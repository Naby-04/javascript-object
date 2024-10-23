// Créez un objet "personne" avec les propriétés suivantes : nom, prénom, âge, profession. Affichez cet objet dans la console.
let personne = {
  Prenom: "John",
  nom: "Doe",
  age: 24,
  profession: "full-stack DEV",
};
console.log(personne);
// Modifiez une propriété de l'objet personne (par exemple, l'âge) et affichez à nouveau l'objet modifié dans la console.
personne.age = 25;
console.log(personne);
// Créez un deuxième objet "animal" avec les propriétés suivantes : espèce, couleur, nombre de pattes. Affichez cet objet dans la console.
let animal = [
  {
    nom: "Lion",
    espece: "Mammifères ",
    couleur: "fauve",
    Nombre_de_pattes: 4,
  },
  {
    nom: "Lapin",
    espece: "Mammifères ",
    couleur: "blanche",
    Nombre_de_pattes: 4,
  },
];
console.table(animal);
