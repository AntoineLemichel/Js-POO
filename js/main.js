// Exercice n°1


// var user = {
//   firstName: '',
//   lastName: '',
//   country: '',
//   years: '',

//   card: '',


//   getInformation: function(firstName, lastName, country, years, card){


//     this.firstName = firstName;
//     firstName = this.getFirstName(firstName);

//     this.lastName = lastName;
//     lastName = this.getLastName(lastName);


//     this.country = country;
//     country = this.getCountry(country);

//     this.years = years;
//     years = this.getYears(years);

//     this.card = card;
//     card = this.getPaiement(card);
//     },


//   getFirstName: function (firstName) {
//     this.firstName = firstName;
//     console.log("Je me nomme : " + this.firstName);
//   },



//   getLastName: function (lastName) {
//     this.lastName = lastName;
//     console.log("Mon nom est : " + this.lastName);
//   },


//   getCountry: function (country) {
//     this.country = country;
//     console.log("Je viens de : " + country.toUpperCase());
//     switch (country.toUpperCase()) {
//       case 'FRANCE':
//         console.log("Le pays est autorisé.");
//         break;
//       case 'BELGIQUE':
//         console.log("Le pays est autorisé.");
//         break;
//       default:
//         console.log("Le pays : " + country.toUpperCase() + " n'est pas encore disponible.");
//         break;
//     }
//   },



//   getYears: function (years) {
//     this.years = years;
//     var birthday = 2018 - this.years;
//     console.log("J'ai : " + birthday + " ans");
//     if (birthday < 18) {
//       console.log("Tu as moins de 18 ans, tu n'est donc pas accepter ici.");
//     } else if (birthday >= 18) {
//       console.log("Tu es majeur, bienvenu ici.");
//     } else if (birthday > 60) {
//       console.log("Tu es un peu trop vieux pour être ici.");
//     } else {
//       console.log("Je ne comprends pas l'âge que tu as.");
//     }
//   },



//   getPaiement: function (card) {
//     this.card = card.toUpperCase();
//     console.log("J'ai comme moyen de paiement : " + this.card);
//     switch (this.card) {
//       case 'PAYPAL':
//         console.log("Paypal est autorisé sur notre site.");
//         break;
//       case 'VISA':
//         console.log("Visa est autorisé sur notre site.");
//         break;
//       case 'MASTERCARD':
//         console.log("Mastercard est autorisé sur notre site.");
//         break;
//       default:
//         console.log("Le moyen de paiement " + this.card + " n'est pas autorisé sur notre site. Désolé.");
//         break;
//     }
//   },
// }




// // user.getFirstName('Antoine');
// // user.getLastName('Toto');
// // user.getCountry('France');
// // user.getYears(1996);
// // user.getPaiement('Paypal');
// user.getInformation("Antoine", "Toto", "France", 1996, "Paypal");



// Exo 2 :


function Warrior(name, damage, life) {
  this.name = name;
  this.attack = damage;
  this.life = life;


  this.getName = function () {
    console.log("Mon nom est : " + this.name);
  };
  this.getDamage = function () {
    console.log("J'ai comme point d'attaque : " + this.attack + " " + this.name);
  };

  this.getLife = function () {
    console.log("J'ai : " + this.life + " PV " + this.name);
  };

  this.goFight = function (targetName, targetLife, targetAttack) {
    targetLife -= targetAttack;
    console.log("J'attaque ! " + targetName + ", la cible lui reste : " + targetLife + " PV (PS : " + this.name + " )");

  }
};


var obi = new Warrior("Obi Wan", 10, 100);
var ennemy = new Warrior("Orc", 5, 150);


while (ennemy.life > 0 && obi.life > 0) {
  ennemy.goFight(obi.name, obi.life, ennemy.attack);
  obi.goFight(ennemy.name, ennemy.life, obi.attack);
  obi.life -= ennemy.attack;
  ennemy.life -= obi.attack;
  if (ennemy.life <= 0) {
    console.log("J'ai été vaincu. " + ennemy.name);
  }
  if (obi.life <= 0) {
    console.log("J'ai été vaincu. " + obi.name);
  }
}



// obi.getName();
// ennemy.getName();

// obi.getAttack();
// ennemy.getAttack();


// obi.getLife();
// ennemy.getLife();


// obi.getFight();
// ennemy.getFight();
