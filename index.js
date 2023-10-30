let rightArrow = document.getElementById('right');
let leftArrow =  document.getElementById('left');
let client1 =    document.getElementById('clientnumber1');
let client2 =    document.getElementById('clientnumber2');
let client3 =    document.getElementById('clientnumber3');
let client =     document.getElementById('client');
let feedback = document.getElementById('feedback');
let inactiveClient = client3


function handleWindowSizeChange() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    feedback.style.flexDirection ='row';
    rightArrow.addEventListener('click',function(event){
      if(inactiveClient == client3){
       client2.style.display ='none';
       client3.style.display ='flex';
       client3.style.flexDirection = 'column';
       feedback.style.flexDirection = 'row-reverse';
       inactiveClient = client2;
      }
      else if(inactiveClient == client2){
       client2.style.display ='flex';
       client1.style.display ='none';
       client2.style.flexDirection = 'column';
       feedback.style.flexDirection ='row';
       inactiveClient = client1;
      }
      else if(inactiveClient == client1){
       client1.style.display ='flex';
       client3.style.display ='none';
       client1.style.flexDirection = 'column';
       feedback.style.flexDirection ='row';
       inactiveClient = client3;
      }
   });
   
   leftArrow.addEventListener('click',function(event){
     if(inactiveClient == client3){
      client1.style.display ='none';
      client3.style.display ='flex';
      client3.style.flexDirection = 'column';
      feedback.style.flexDirection = 'row';
      inactiveClient = client1;
     }
     else if(inactiveClient == client1){
      client1.style.display ='flex';
      client2.style.display ='none';
      client1.style.flexDirection = 'column';
      feedback.style.flexDirection ='row-reverse';
      inactiveClient = client2;
     }
     else if(inactiveClient == client2){
      client2.style.display ='flex';
      client3.style.display ='none';
      client2.style.flexDirection = 'column';
      feedback.style.flexDirection ='row';
      inactiveClient = client3;
     }
   });
  } else if (window.matchMedia("(max-width: 767px)").matches){
    let activeClient = client1;
    feedback.style.flexDirection ='column';
    rightArrow.addEventListener('click',function(event){
      if(activeClient == client1){
       client1.style.display ='none';
       client2.style.display ='flex';
       client2.style.flexDirection = 'column';
       activeClient = client2;
      }
      else if(activeClient == client2){
       client2.style.display ='none';
       client3.style.display ='flex';
       client3.style.flexDirection = 'column';
       activeClient = client3;
      }
      else if(activeClient == client3){
       client1.style.display ='flex';
       client3.style.display ='none';
       client1.style.flexDirection = 'column';
       activeClient = client1;
      }
   });

   leftArrow.addEventListener('click',function(event){
    if(activeClient == client1){
     client1.style.display ='none';
     client3.style.display ='flex';
     client3.style.flexDirection = 'column';
     activeClient = client3;
    }
    else if(activeClient == client3){
     client3.style.display ='none';
     client2.style.display ='flex';
     client2.style.flexDirection = 'column';
     activeClient = client2;
    }
    else if(activeClient == client2){
     client1.style.display ='flex';
     client2.style.display ='none';
     client1.style.flexDirection = 'column';
     activeClient = client1;
    }
 });
 
  }
}
handleWindowSizeChange();
window.addEventListener('resize', handleWindowSizeChange);