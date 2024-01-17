
const buttonHub = document.querySelector('.Hub-button');
let Header = document.querySelector('.Header');

        buttonHub.addEventListener('click', () => {
            Header.remove();
            const hubArea = document.createElement('div');
            hubArea.classList.add('hubArea');
            document.body.append(hubArea);
            buttonHub.remove();
        
            

            const h1 = document.createElement('h1');
            h1.innerHTML = "HUB";
            h1.classList.add('newH1');

            hubArea.append(h1);
            document.body.append(hubArea);

            


            const Contact = document.createElement('p');
            Contact.innerHTML = `Contact me on:leventoscako@gmail.com`;
            Contact.classList.add('Contact');
            hubArea.append(Contact)

            /* now we create the return button */

            let returnButton = document.createElement('button');
            returnButton.innerHTML = 'Return'
            returnButton.classList.add('returnButton');
            document.body.append(returnButton);

            returnButton.addEventListener('click', function() {
             location.reload();
            })

        });


 const buttonStore = document.querySelector('.Store-button');
  
  buttonStore.addEventListener('click', () => {
    Header.remove();
    buttonStore.remove();

    const Store = document.createElement('div');
    Store.classList.add('Store');
    document.body.append(Store);

    const StoreTitle = document.createElement('h1');
    StoreTitle.classList.add('StoreTitle');
    Store.append(StoreTitle);
    StoreTitle.innerHTML = 'Store'

    const ButtonSword = document.createElement('button');
    ButtonSword.classList.add('ButtonSword');
    ButtonSword.innerHTML = 'Buy Sword for 30 Gold';
    Store.append(ButtonSword);

    const ButtonAxe = document.createElement('button');
    ButtonAxe.classList.add('ButtonAxe');
    ButtonAxe.innerHTML = 'Buy Axe for 30 Gold';
    Store.append(ButtonAxe);

    const ButtonBow = document.createElement('button');
    ButtonBow.classList.add('ButtonBow');
    ButtonBow.innerHTML = 'Buy Bow for 50 Gold';
    Store.append(ButtonBow);
    

    /* buttons disappear that werent clicked */


   ButtonSword.onclick = function () {
    ButtonBow.remove();
    ButtonAxe.remove();
    
   };

   ButtonAxe.onclick = function () {
    ButtonBow.remove();
    ButtonSword.remove();
    
   };

   ButtonBow.onclick = function () {
    ButtonSword.remove();
    ButtonAxe.remove();
    
   };





    let returnButton = document.createElement('button');
            returnButton.innerHTML = 'Return'
            returnButton.classList.add('returnButton');
            document.body.append(returnButton);

            returnButton.addEventListener('click', function() {
             location.reload();
            })
  });

  const FightArea = document.querySelector
  ('.Fight-dragon-button');

  FightArea.addEventListener('click', () => {
    Header.remove();
    FightArea.remove();

   
    const FightArena = document.createElement('div');
    FightArena.classList.add('FightArena');
    FightArena.innerHTML = 'Dragon';
    document.body.append(FightArena);

    let Health = document.createElement('p');
    Health.classList.add('Health');
    Health.innerHTML = Number('100');
    FightArena.append(Health);


    const FightButton = document.createElement('button');
    FightButton.classList.add('FightButton');
    FightButton.innerHTML = 'AutoFight';
    FightArena.append(FightButton);


   
   
    
   

    let HP = Health;
   let count = 100;
   let attacking = 10;

   FightButton.addEventListener('click', function(i, a) {
    HP.innerHTML = count -= attacking;

    if(count === 0 ) {
      alert('You defeated the Dragon');

      const Victory = document.createElement('p');
      Victory.classList.add('Victory');
      Victory.innerHTML = 'Thanks for playing the Game!'
      FightArena.append(Victory);
    }
    

   });
     
    
      
    
    

   
    











    let returnButton = document.createElement('button');
            returnButton.innerHTML = 'Return'
            returnButton.classList.add('returnButton');
            document.body.append(returnButton);

            returnButton.addEventListener('click', function() {
             location.reload();
            })



  });

  