let arNum = [2,5,92,11,47,4,1 ];
let b = 0
        let nextInput = document.getElementById('result');
        let calcbtn = document.querySelector('[data-next]');
        
        calcbtn.addEventListener('click', displayNextNumber)
        function displayNextNumber(){
            if(b < arNum.length){
                let next = arNum[b];
                b++
                // console.log()
                nextInput.value = next
            }else{
                b = 0
            }
        }

  
  
  
  
