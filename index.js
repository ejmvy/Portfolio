
function openURL(url) {
  window.open(url);
}


  
  const book1 = document.querySelector('.book');
  const super1 = document.querySelector('.super1');
  const book2 = document.querySelector('.book.two');
  const super2 = document.querySelector('.super2');
  const book3 = document.querySelector('.book.three');
  const super3 = document.querySelector('.super3');
  const calculator = document.querySelector('.calculator');
  const calc = document.querySelector('.calc');
  const phone = document.querySelector('.phone');
  const tipCalc = document.querySelector('.tipCalc');
  const lightSwitch = document.querySelector('.switch');
  const lamp = document.querySelector('.innerLight');
  const windows = document.querySelector('.windows');
  const plant = document.querySelector('.plant');

  // plant.addEventListener('click', window.open('https://codepen.io/Eejay/full/aRwemp/', '_blank'));
  // windows.addEventListener('click', openURL('https://codepen.io/Eejay/full/VQBvOm/'));
  
  function clicked() {
    console.log(this.classList.value);
    // console.log('clicked!!')
  }

  lightSwitch.onclick = function() {
    lamp.classList.toggle('hidden');
  }; 
  
  // function() {
  //   console.log("clicked")
  //   // 
  // })
  
  book1.addEventListener('mouseover', function() {
    super1.classList.remove('hidden')
  });
  
  book1.addEventListener('mouseout', function() {
    super1.classList.add('hidden')
  });
  
  book2.addEventListener('mouseover', function() {
    super2.classList.remove('hidden')
  });
  
  book2.addEventListener('mouseout', function() {
    super2.classList.add('hidden')
  });
  
  book3.addEventListener('mouseover', function() {
    super3.classList.remove('hidden')
  });
  
  book3.addEventListener('mouseout', function() {
    super3.classList.add('hidden')
  });
  
  // calculator.addEventListener('mouseover', function() {
  //   calc.classList.remove('hidden')
  // });
  
  // calculator.addEventListener('mouseout', function() {
  //   calc.classList.add('hidden')
  // });
  
  // phone.addEventListener('mouseover', function() {
  //   tipCalc.classList.remove('hidden')
  // });
  
  // phone.addEventListener('mouseout', function() {
  //   tipCalc.classList.add('hidden')
  // });
  
  
  // CALENDAR DATE
  
  const dayDisp = document.querySelector('#day');
  const monthDisp = document.querySelector('#month');
  
  var months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];
  
  var now = new Date();
  var date = now.getDate();
  var month = months[now.getMonth()];
  
  dayDisp.innerText = date;
  monthDisp.innerText = month;
  
  
  // MAIN CLOCK //
  
  var hourHand = document.querySelector('.hour');
  var minHand = document.querySelector('.min');
  var secHand = document.querySelector('.sec');


  
  function setDate() {
      const now = new Date;
      const secs = now.getSeconds();
      const secondDegrees = ((secs / 60) * 360) + 90;
      secHand.style.transform = `rotate(${secondDegrees}deg)`;
  
  
      const mins = now.getMinutes();
      const minsDegrees = ((mins / 60) * 360) + 90;
      minHand.style.transform = `rotate(${minsDegrees}deg)`;
    
      const hours = now.getHours();
      const hourDegrees = ((hours / 12) * 360) + 90;
      hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    
  }
  
  setInterval(setDate, 1000);
  


// Hamburger menu toggle 

(function () {
  
  var hamburger = {
    hamToggle: document.querySelector('.hamburger'),
    nav: document.querySelector('.nav2'),
    
    doToggle: function(e) {
      e.preventDefault();
      this.hamToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    }
  };
  
  hamburger.hamToggle.addEventListener('click', function(e) {
    hamburger.doToggle(e);
  })
  hamburger.nav.addEventListener('click', function(e) {
    hamburger.doToggle(e);
  })
}());

