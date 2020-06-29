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
const puns = document.querySelector("[value='js puns']");
const heart = document.querySelector("[value='heart js']");
const design = document.querySelector('#design');
const h3 = document.querySelector('h3');

color.style.display = 'none';

design.addEventListener('click', function(e) {
    if(e.target.value === 'js puns'){
         h3.style.display = 'none';
    }if(e.target.value === 'heart js') {
        console.log('two');
    }
});

