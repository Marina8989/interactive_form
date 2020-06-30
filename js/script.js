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
const design = document.querySelector('#design');
const h3 = document.querySelector('h3');
//hide the select options
color.style.display = 'none';

design.addEventListener('mouseout', function(e) {
    h3.style.display = "none";
    if(e.target.value === 'js puns'){
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

//register for activities
const activities = document.querySelector('.activities');
const checkbox = activities.querySelectorAll("input[type='checkbox']");


activities.addEventListener('change', function() {
    if (checkbox[1].checked) {
      checkbox[3].parentNode.style.color = "rgba(0,0,0,.8)";
      checkbox[3].disabled = true;
    }else {
        checkbox[3].parentNode.style.color = "rgba(0,0,0, 1)";
        checkbox[3].disabled = false;
    }
    if (checkbox[3].checked) {
      checkbox[1].style.color = "rgba(0,0,0,.8)";
      checkbox[1].disabled = true;
    } else {
      checkbox[1].parentNode.style.color = "rgba(0,0,0, 1)";
      checkbox[1].disabled = false;
    }
    if (checkbox[2].checked) {
      checkbox[4].parentNode.style.color = "rgba(0,0,0,.8)";
      checkbox[4].disabled = true;
    } else {
      checkbox[4].parentNode.style.color = "rgba(0,0,0, 1)";
      checkbox[4].disabled = false;
    }
    if (checkbox[4].checked) {
      checkbox[2].style.color = "rgba(0,0,0,.8)";
      checkbox[2].disabled = true;
    } else {
      checkbox[2].parentNode.style.color = "rgba(0,0,0, 1)";
      checkbox[2].disabled = false;
    }
});
