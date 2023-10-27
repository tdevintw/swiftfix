let isMenuOpen = false;

document.getElementById('icon_menu').addEventListener('click', function (event) {
    if (isMenuOpen) {
        let targetElemnt1 = document.getElementById('icon1');
        targetElemnt1.style.marginBottom = '5px';
        targetElemnt1.style.transform = 'translateY(-2px) rotate(0deg)';

        let targetElemnt2 = document.getElementById('icon2');
        targetElemnt2.style.display = 'block';

        this.style.marginTop = '-15px';
        this.style.paddingLeft = '-10px';

        let targetElemnt3 = document.getElementById('icon3');
        targetElemnt3.style.transform = 'rotate(0deg)';
        targetElemnt3.style.marginBottom = '-5px';

        let menu = document.getElementById('hamburger');
        menu.style.display = 'none';

        // Adjust the icon_menu to indicate closed state
        let targetElemnt4 = document.getElementById('icon_menu');
        targetElemnt4.style.marginTop = '12px';

        isMenuOpen = false;
    } else {
        let menu2 = document.getElementById('menu2');
        menu2.style.alignItems = 'normal';
        let targetElemnt1 = document.getElementById('icon1');
        targetElemnt1.style.margin = '0';
        targetElemnt1.style.transform = 'translateY(2px) rotate(45deg)';

        let targetElemnt2 = document.getElementById('icon2');
        targetElemnt2.style.display = 'none';

        this.style.marginTop = '15px';
        this.style.paddingLeft = '10px';
        
        let targetElemnt3 = document.getElementById('icon3');
        targetElemnt3.style.transform = 'rotate(-45deg)';
        targetElemnt3.style.margin = '0';

        let menu = document.getElementById('hamburger');
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';

        // Adjust the icon_menu to indicate open state
        let targetElemnt4 = document.getElementById('icon_menu');
        targetElemnt4.style.marginTop = '13px';

        isMenuOpen = true;
    }
});
let searchIsOpen = false;
document.getElementById('search_icon').addEventListener('click',function(event){
    if(searchIsOpen){
    let search_input = document.getElementById('search_input');
    search_input.style.display = 'none';
    searchIsOpen=false;
    }else{
        let search_input = document.getElementById('search_input');
        search_input.style.display = 'flex';
        searchIsOpen = true; 
    }
});


  
   
let services_menu = document.getElementById('services-menu');
let service_menu =document.getElementById('service-menu')
services_menu.addEventListener('mouseenter',function(event){
  services_menu.style.backgroundColor = 'cyan';
  service_menu.style.display = 'flex';
});
services_menu.addEventListener('mouseleave',function(event){
  services_menu.style.backgroundColor = 'white';
  service_menu.style.display = 'none';
});
 

let service1 = document.getElementById('service1');
let service2 = document.getElementById('service2');
let service3 = document.getElementById('service3');
let service4 = document.getElementById('service4');
let target = document.getElementById('services-choices');

service1.addEventListener('click',function(event){
  target.scrollIntoView({behavior:'smooth'});
});
service2.addEventListener('click',function(event){
  target.scrollIntoView({behavior:'smooth'});
})
service3.addEventListener('click',function(event){
  target.scrollIntoView({behavior:'smooth'});
});
service4.addEventListener('click',function(event){
  target.scrollIntoView({behavior:'smooth'});
});

let section1 = document.getElementById('read-more-div');
let section2 = document.getElementById('read-more-div2');
let section3 = document.getElementById('read-more-div3');
let section4 = document.getElementById('read-more-div4');

document.getElementById('btn1').addEventListener('click',function(event){
  
  section1.style.display = 'flex';
});

document.getElementById('btn2').addEventListener('click',function(event){
  
  section2.style.display = 'flex';
});

document.getElementById('btn3').addEventListener('click',function(event){
  
  section3.style.display = 'flex';
});

document.getElementById('btn4').addEventListener('click',function(event){
  
  section4.style.display = 'flex';
});
//close about services
document.getElementById('close').addEventListener('click',function(event){
  section1.style.display = 'none';
});
document.getElementById('close2').addEventListener('click',function(event){
  section2.style.display = 'none';
});
document.getElementById('close3').addEventListener('click',function(event){
  section3.style.display = 'none';
});
document.getElementById('close4').addEventListener('click',function(event){
  section4.style.display = 'none';
});





