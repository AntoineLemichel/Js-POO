// Exercice n°1


var user = {
  firstName: 'Andrew',
  lastName: 'Toto',
  country: 'France',
  years: '1996',

  card : ['Paypal', 'Visa', 'Mastercard'],


  getFirstName: function(){
    alert("Je me nomme : " + this.firstName);
  },
  getLastName: function(){
    alert("Mon nom est : " + this.lastName);
  },
  getCountry: function(){
    alert("Je viens de : " + this.country);
  },
  getYears: function(){
    var birthday = 2018 - this.years;
    alert("J'ai : " + birthday + " ans");
  },
  getPaiement: function(){
    alert("J'ai comme moyen de paiement : " + this.card[1]);
  }

}

user.getFirstName();
user.getLastName();
user.getCountry();
user.getYears();
user.getPaiement();


