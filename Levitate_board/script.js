const Container = document.getElementById('container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71','#f2e335', '#ef4a92','#64c503','#785ee4','#3c4924','#f9d9f7','#e37c79','#b83018','#1c41c1','#0b5284']
const Square_size = 300;

for (let i = 0; i < Square_size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

         
     square.addEventListener('mouseover',() => {
          setColorToEl(square);
    });

    square.addEventListener('mouseout',() => {
       removeColorFromEl(square);
    });

    square.addEventListener('click',() => {
       setColorToEl(square);
    });
    Container.appendChild(square);
    }

    function setColorToEl(element){
       const color = getRandomColor();
          element.style.background = color;
          element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`; 
    }
    function removeColorFromEl(element) {
       element.style.background = '#19172e';
       element.style.boxShadow = `0 0 2px #ffffff`;
   }
   function getRandomColor() {
       return colors[Math.floor(Math.random() * colors.length)];
   }    
	      