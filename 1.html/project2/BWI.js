const form = document.querySelector('form')
form.addEventListener('submit',(eve) =>
{
      eve.preventDefault();

     const height = parseInt(document.querySelector('#height').value)
     const weight = parseInt(document.querySelector('#weight').value)
     const result = document.querySelector('#results')

     if(height === '' || height < 0 || isNaN(height)) 
     {
              result.innerHTML = `Please give a valid height ${height}`
     }
    else if(weight === '' || weight < 0 || isNaN(weight)) 
     {
              result.innerHTML = `Please give a valid height ${height}`
     }
     else
     {
      const BMI =(weight / ((height*height) / 1000)).toFixed(2);
      //show the result
      result.innerHTML = `<span>${BMI} kg/m2</span>`;
     }
});