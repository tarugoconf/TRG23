import Typed from "../deps/typed.js";

const names = [
  "Guadalupe",
  "Gloria",
  "Javier",
  "Flora",
  "Heliodoro",
  "Teresa",
  "Ricardo",
  "Cruz",
  "Paulina",
  "Luís",
  "Godofredo",
  "Hipólito",
  "Valeria",
  "Alberto",
  "Iris",
  "Carlos",
  "Ángel",
  "Roque",
  "Marisol",
  "Irma",
  "Maite",
  "Guadalupe",
  "Esperanza",
  "María Cristina",
  "Calixta",
  "Nazario",
  "María Cristina",
  "Isaura",
  "Úrsula",
  "Fito",
  "Nacho",
  "Erasmo",
  "Xiomara",
  "Jonatan",
  "Octavio",
  "Ildefonso Lerma",
  "Antonio",
  "Vanesa",
  "Moreno",
  "Celso",
  "Renata",
  "Ruperta",
  "Goyo",
  "Estela",
  "Atilio",
  "Teresita",
  "Rómulo",
  "Carmela",
  "Isidora",
  "Verónica",
  "Paulino",
  "Clementina",
  "Marita",
  "Carina",
  "Elodia",
  "Perla",
  "Valentín",
  "Tristán",
  "Baudelio",
  "Amanda",
  "Apolonia",
  "Montserrat",
  "Teo",
  "María",
  "América",
  "Hortensia",
  "Jenny",
  "Guillermo",
  "Remedios",
  "Fortunata",
  "Socorro",
  "Roque",
  "Mónica",
  "Margarita",
  "Asunción",
  "Flor",
  "Baldomero",
  "Mariano",
  "Domitila",
  "Primitivo",
  "Evangelina",
  "Camilo",
  "Marcelo",
  "Benjamín",
  "Anselmo",
  "Teodora",
  "Ariel",
  "Calixto",
  "Fermín",
  "Venceslás",
  "Bibiana",
  "Joan",
  "Salvador",
  "Pío",
  "Evelia",
  "Perlita",
  "Nicanor",
  "Toño",
  "Emma",
  "Xoán",
  "Íria",
  "Rosalía",
  "Antón",
];
const surnames = [
  "Pinilla",
  "Gimenez-Vélez",
  "Belmonte",
  "Barrena",
  "Lladó",
  "Barceló",
  "de Zurita",
  "Busquets",
  "Bartolomé",
  "Corral-Vilar",
  "Gonzalez",
  "Castro",
  "Escrivá",
  "Solano",
  "Guijarro",
  "Cazorla",
  "Coello",
  "de Cortes",
  "Iglesia",
  "Rivero",
  "Cárdenas",
  "Lobato",
  "Jurado",
  "del Ávila",
  "Ortiz",
  "Rebollo",
  "Arribas-Arnaiz",
  "Uribe",
  "Abad",
  "Granados",
  "Carrera",
  "Artigas",
  "Peralta",
  "Calderón",
  "Vidal",
  "Caballero",
  "Carballo",
  "Patiño",
  "Olivé",
  "Pareja",
  "Pino",
  "Acevedo",
  "Otero",
  "Esteve",
  "Rubio",
  "Zabala",
  "Mariño",
  "Prado",
  "Vélez",
  "Pelayo",
  "Puga",
  "Duarte",
  "Alcaraz",
  "Dávila",
  "Valentín-Porras",
  "Escribano",
  "Cifuentes",
  "Meléndez",
  "Duran",
  "Ocaña",
  "Llano",
  "Milla",
  "Río",
  "Alberola",
  "Llamas",
  "Cánovas",
  "Roca",
  "Santana-Goñi",
  "Abril",
  "de Montero",
  "Amaya-Ferrero",
  "Herrero",
  "Ibáñez",
  "Ferreiro",
  "Lloret",
  "Expósito",
  "Lastra",
  "Morán",
  "Goicoechea",
  "Iriarte",
  "Sancho",
  "Borrell",
  "Figueiras",
  "Gárate-Sarabia",
  "Peñas",
  "Rosa",
  "Pons-Baños",
  "Serna",
  "Manjón",
  "Carbajo",
];

class Name extends HTMLElement {
  connectedCallback() {
    const strings = [];
    for (let n = 0; n < 1000; n++) {
      strings.push(`${getItem(names)} ${getItem(surnames)}`);
    }

    this.typed = new Typed(this, {
      strings,
      typeSpeed: 75,
      smartBackspace: true,
      backSpeed: 50,
      startDelay: 1000,
      loop: true,
    });
  }
}

customElements.define("trg-name", Name);

function getItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}
