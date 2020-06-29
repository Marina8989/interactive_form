//auto focus the first input field when page loaded
const inputFocus = document.querySelector('#name').focus();

const secOther = document.querySelector('#title');
const otherTitle = document.querySelector('#other-title');

otherTitle.style.display = 'none';
//display input if "other" chosen
secOther.addEventListener('mouseout', function(e) {
      if(e.target.value === 'other') {
         otherTitle.style.display = 'block';
      }else {
        otherTitle.style.display = 'none';
    }
})

//t-shirt info section
const color = document.querySelector('#color');
const colorOption = document.querySelectorAll('#color option');
console.log(colorOption);
const puns = document.querySelector("[value='js puns']");
const heart = document.querySelector("[value='heart js']");
const design = document.querySelector('#design');
const h3 = document.querySelector('h3');

color.style.display = 'none';


design.addEventListener('mouseout', function(e) {
    if(e.target.value === 'js puns'){
         h3.style.display = 'none';
         color.style.display = "block";
   
        for (let i = 0; i < colorOption.length; i++) {
             colorOption[i].style.display = "none";
           if (
             colorOption[i].value === "cornflowerblue" ||
             colorOption[i].value === "darkslategrey" ||
             colorOption[i].value === "gold"
           ) {
             colorOption[i].style.display = "block";
           }
           
        }
    }
    if(e.target.value === 'heart js') {
         h3.style.display = 'none';
         color.style.display = "block";
   
        for (let i = 0; i < colorOption.length; i++) {
             colorOption[i].style.display = "none";
           if (
             colorOption[i].value === "tomato" ||
             colorOption[i].value === "steelblue" ||
             colorOption[i].value === "dimgrey"
           ) {
             colorOption[i].style.display = "block";
           }
    }
  }
});

