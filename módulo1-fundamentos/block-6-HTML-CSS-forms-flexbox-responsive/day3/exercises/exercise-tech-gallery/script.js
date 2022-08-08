function createHeader(){
   const getHeader = document.querySelector('header');
   getHeader.id = 'header';
   
}createHeader();

function insertSection(){
   const getSectionId = document.querySelector('section');
   getSectionId.id = 'section';
}insertSection();

function insertSection2(){
   const getSectionId = document.querySelector('section');
   const getNext = getSectionId.nextElementSibling;
   getNext.id = 'section2';
}insertSection2();