let paragraph = document.querySelector('p');
console.dir(paragraph.innerText);//inner.text is not a method. It's a property.It can only access to text content. Also it'll only return text that is visible

//to see all the text including invisible text use .textContent
console.dir(paragraph.textContent); 

//how to modify html content from JS. First store the element in a variable and then access it
paragraph.innerText = 'A shinobi should know the difference between honor and victory.';


// How to use .forEach method
let paras = document.querySelectorAll('p');
paras.forEach(para =>{
    console.log(para.innerText);
});

//inner.HTML is used to get access to html content like class.
//to append something use +-
let content = document.querySelector('.error');
console.log(content.innerHTML);

//how to get attribute using .getAttribute method
// element.setAttribute('attributeName', 'value');
// attributeName: The name of the attribute you want to set (like "class", "href", "id", etc.)
// value: The value you want to assign to that attribute
let link = document.querySelector('.nav-item1>a');
console.log(link.getAttribute('href')); //it'll change attribute content
link.setAttribute('href','https://www.google.com/');
link.innerText = 'Google';

//below is demonstration to change the attribute itself
const mssg = document.querySelector('div');//selects the first 'div' that comes across

/*console.log(mssg.getAttribute('class'));*/

// mssg.setAttribute('class','success');
// this would be useful if user is filling out a form. If there is error then the existing 'error' class will make the text red or something like that. And if there is no error then the class name will change to success. 

//you can also use setAttribute to add a attribute. Doesn't needs to be exist beforehand. Caution: if the attribute element already exist then it will overwrite any existing attribute.
mssg.setAttribute('style', 'color: green'); 

//to add element using setAttribute and also preserve the  existing element follow steps below
let title = document.querySelector('div');
console.log(title.style);
console.log(title.style.color);
title.style.margin='50px';
title.style.color='red';
title.style.fontSize = '30px'//to change any css style if the style name has '-' in it then jus use camel case

//to add or remove class using js follow below steps
let context =  document.querySelector('div');

console.log(context.classList);
context.classList.add('mistake');
context.classList.remove('error');
context.classList.add('success');

//challange: change class based on if the 'p' contains the string 'error' || 'success'

let paragraphs = document.querySelectorAll('article p');

paragraphs.forEach(p =>{
    if(p.textContent.includes('error')){;
    p.classList.add('error');
    }
    if(p.innerText.includes('success')){
        p.classList.add('success'); 
    }
});

let challangeTitle = document.querySelector('.challange-title');

challangeTitle.classList.toggle('test');//toggle the class. If 'test' class does not exist then it will add the class then toggle it
challangeTitle.classList.toggle('test');//remove the 'test' class.

//to select all the tag inside 'article' follow these steps
const article = document.querySelector('article');//return elements of article as HTMLCollection
console.log(article.children);//print all the children of article
console.log(Array.from(article.children));//convert HTMLCollection to array and print

Array.from(article.children).forEach(child => {
    child.classList.add('article-element');
});


















