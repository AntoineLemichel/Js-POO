// Exercice n°1


var user = {
  firstName: '',
  lastName: '',
  country: '',
  years: '',

  card: '',


  getInformation: function(firstName, lastName, country, years, card){

    
    this.firstName = firstName;
    firstName = this.getFirstName(firstName);

    this.lastName = lastName;
    lastName = this.getLastName(lastName);


    this.country = country;
    country = this.getCountry(country);

    this.years = years;
    years = this.getYears(years);

    this.card = card;
    card = this.getPaiement(card);
    },


  getFirstName: function (firstName) {
    this.firstName = firstName;
    alert("Je me nomme : " + this.firstName);
  },



  getLastName: function (lastName) {
    this.lastName = lastName;
    alert("Mon nom est : " + this.lastName);
  },


  getCountry: function (country) {
    this.country = country;
    alert("Je viens de : " + country.toUpperCase());
    switch (country.toUpperCase()) {
      case 'FRANCE':
        alert("Le pays est autorisé.");
        break;
      case 'BELGIQUE':
        alert("Le pays est autorisé.");
        break;
      default:
        alert("Le pays : " + country.toUpperCase() + " n'est pas encore disponible.");
        break;
    }
  },



  getYears: function (years) {
    this.years = years;
    var birthday = 2018 - this.years;
    alert("J'ai : " + birthday + " ans");
    if (birthday < 18) {
      alert("Tu as moins de 18 ans, tu n'est donc pas accepter ici.");
    } else if (birthday >= 18) {
      alert("Tu es majeur, bienvenu ici.");
    } else if (birthday > 60) {
      alert("Tu es un peu trop vieux pour être ici.");
    } else {
      alert("Je ne comprends pas l'âge que tu as.");
    }
  },



  getPaiement: function (card) {
    this.card = card.toUpperCase();
    alert("J'ai comme moyen de paiement : " + this.card);
    switch (this.card) {
      case 'PAYPAL':
        alert("Paypal est autorisé sur notre site.");
        break;
      case 'VISA':
        alert("Visa est autorisé sur notre site.");
        break;
      case 'MASTERCARD':
        alert("Mastercard est autorisé sur notre site.");
        break;
      default:
        alert("Le moyen de paiement " + this.card + " n'est pas autorisé sur notre site. Désolé.");
        break;
    }
  },
}




// user.getFirstName('Antoine');
// user.getLastName('Toto');
// user.getCountry('France');
// user.getYears(1996);
// user.getPaiement('Paypal');
user.getInformation("Antoine", "Toto", "France", 1996, "Paypal");