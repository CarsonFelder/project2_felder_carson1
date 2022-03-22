function pourIt() {
    //This code snippet is emulated from https://css-tricks.com/restart-css-animation/
     
    var fallingCoffee = document.getElementById('falling-coffee');
    var risingCoffee = document.getElementById('rising-coffee');
    var newFC = fallingCoffee.cloneNode(true);
    var newRC = risingCoffee.cloneNode(true);
    fallingCoffee.parentNode.replaceChild(newFC, fallingCoffee);
    risingCoffee.parentNode.replaceChild(newRC, risingCoffee);
    
   }