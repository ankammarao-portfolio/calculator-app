 let calculation =localStorage.getItem('calculation') || '';
    function updateCalculation(parameter){
        
      calculation += parameter;
      console.log(calculation)
      localStorage.setItem('calculation', calculation);

      displayResult();
    }

   
    function displayResult() {
      let result = document.querySelector('.display-result');
      result.innerHTML = calculation;
    }