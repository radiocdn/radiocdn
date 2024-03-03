// Bescherming tegen afbeeldingsdiefstal | RadioCDN - Website
document.addEventListener('DOMContentLoaded', function () {
    // Selecteer alle afbeeldingen op de pagina
    const afbeeldingen = document.querySelectorAll('img');
  
    // Voorkom het standaard contextmenu en toon een aangepopt bericht | RadioCDN - Website
    function toonAangepoptBericht(event) {
      event.preventDefault();
      alert('U mag geen afbeeldingen van onze website stelen zonder toestemming!');
    }
  
    // Voeg een eventlistener toe aan elke afbeelding om met rechts klikken om te gaan | RadioCDN - Website
    afbeeldingen.forEach((img) => {
      img.addEventListener('contextmenu', toonAangepoptBericht);
      
      // Voorkom slepen en kopiëren van afbeeldingen | RadioCDN - Website
      img.setAttribute('draggable', 'false');
      img.addEventListener('dragstart', function (e) {
        e.preventDefault();
      });
    });
  });
