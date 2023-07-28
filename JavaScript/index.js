//*******************code for calculator*******************
let string = "";
let buttons = document.querySelectorAll('.item');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = " ";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'x'){
            string = string.slice(0, string.length-1)
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == '√'){
            string = Math.sqrt(string);
            document.querySelector('input').value = string;
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})


//*********************code for conversion*********************
//select conversion types
let selectType = document.getElementById('selectType');
selectType.addEventListener('change', showMeasure);
function showMeasure(){
    if(selectType.value=="Temprature"){
        document.getElementById('temp').style.display = 'block';
        document.getElementById('length').style.display = 'none';
    }
    else if(selectType.value=="Length"){
        document.getElementById('temp').style.display = 'none';
        document.getElementById('length').style.display = 'block';
    }
}



//Convert temprature value
let tempInput = document.getElementById('tempInput');
let tempResult = document.getElementById('tempResult');
let tempInputType = document.getElementById('tempInputType');
let tempResultType = document.getElementById('tempResultType');

tempInput.addEventListener('keyup', myTempResult);
tempInputType.addEventListener('change', myTempResult);
tempResultType.addEventListener('change', myTempResult);

function myTempResult(){
    if(tempInputType.value =='Celsius' && tempResultType.value=='Celsius'){
        tempResult.value = tempInput.value;
    }
    else if(tempInputType.value =='Celsius' && tempResultType.value=='Kelvin'){
        tempResult.value = (tempInput.value)+273.15;
    }
    else if(tempInputType.value =='Celsius' && tempResultType.value=='Fahrenheit'){
        tempResult.value = (tempInput.value*1.8)+32;
    }
    else if(tempInputType.value =='Kelvin' && tempResultType.value=='Celsius'){
        tempResult.value = (tempInput.value)-273.15;
    }
    else if(tempInputType.value =='Kelvin' && tempResultType.value=='Kelvin'){
        tempResult.value = tempInput.value;
    }
    else if(tempInputType.value =='Kelvin' && tempResultType.value=='Fahrenheit'){
        tempResult.value = ((tempInput.value-273.15)*1.8) + 32;
    }
    else if(tempInputType.value =='Fahrenheit' && tempResultType.value=='Celsius'){
        tempResult.value = (tempInput.value-32)/1.8;
    }
    else if(tempInputType.value =='Fahrenheit' && tempResultType.value=='Kelvin'){
        tempResult.value = ((tempInput.value-32)/1.8) + 273.15;
    }
    else if(tempInputType.value =='Fahrenheit' && tempResultType.value=='Fahrenheit'){
        tempResult.value = tempInput.value;
    }
}


//Convert length value
let lengthInput = document.getElementById('lengthInput');
let lengthResult = document.getElementById('lengthResult');
let lenghtInputType = document.getElementById('lenghtInputType');
let lengthResultType = document.getElementById('lengthResultType');

lengthInput.addEventListener('keyup', myLenghtResult);
lenghtInputType.addEventListener('change', myLenghtResult);
lengthResultType.addEventListener('change', myLenghtResult);

function myLenghtResult(){
    if(lenghtInputType.value =='centimeter' && lengthResultType.value=='centimeter'){
        lengthResult.value = lengthInput.value;
    }
    else if(lenghtInputType.value =='centimeter' && lengthResultType.value=='meter'){
        lengthResult.value = (lengthInput.value)/100;
    }
    else if(lenghtInputType.value =='centimeter' && lengthResultType.value=='kilometer'){
        lengthResult.value = (lengthInput.value)/100000;
    }
    else if(lenghtInputType.value =='centimeter' && lengthResultType.value=='Foot'){
        lengthResult.value = (lengthInput.value)/30.48;
    }
    else if(lenghtInputType.value =='centimeter' && lengthResultType.value=='Inch'){
        lengthResult.value = (lengthInput.value)/2.54;
    }
    else if(lenghtInputType.value =='meter' && lengthResultType.value=='meter'){
        lengthResult.value = lengthInput.value;
    }
    else if(lenghtInputType.value =='meter' && lengthResultType.value=='centimeter'){
        lengthResult.value = (lengthInput.value)*100;
    }
    else if(lenghtInputType.value =='meter' && lengthResultType.value=='kilometer'){
        lengthResult.value = (lengthInput.value)/1000;
    }
    else if(lenghtInputType.value =='meter' && lengthResultType.value=='Foot'){
        lengthResult.value = (lengthInput.value)*3.28;
    }
    else if(lenghtInputType.value =='meter' && lengthResultType.value=='Inch'){
        lengthResult.value = (lengthInput.value)*39.37;
    }
    else if(lenghtInputType.value =='kilometer' && lengthResultType.value=='kilometer'){
        lengthResult.value = lengthInput.value;
    }
    else if(lenghtInputType.value =='kilometer' && lengthResultType.value=='meter'){
        lengthResult.value = (lengthInput.value)*1000;
    }
    else if(lenghtInputType.value =='kilometer' && lengthResultType.value=='centimeter'){
        lengthResult.value = (lengthInput.value)*100000;
    }
    else if(lenghtInputType.value =='kilometer' && lengthResultType.value=='Foot'){
        lengthResult.value = (lengthInput.value)*3280.83;
    }
    else if(lenghtInputType.value =='kilometer' && lengthResultType.value=='Inch'){
        lengthResult.value = (lengthInput.value)*39370;
    }
    else if(lenghtInputType.value =='Foot' && lengthResultType.value=='centimeter'){
        lengthResult.value = (lengthInput.value)*30.48;
    }
    else if(lenghtInputType.value =='Foot' && lengthResultType.value=='meter'){
        lengthResult.value = (lengthInput.value)/3.28;
    }
    else if(lenghtInputType.value =='Foot' && lengthResultType.value=='kilometer'){
        lengthResult.value = (lengthInput.value)/3280.83;
    }
    else if(lenghtInputType.value =='Foot' && lengthResultType.value=='Foot'){
        lengthResult.value = lengthInput.value;
    }
    else if(lenghtInputType.value =='Foot' && lengthResultType.value=='Inch'){
        lengthResult.value = (lengthInput.value)*12;
    }
    else if(lenghtInputType.value =='Inch' && lengthResultType.value=='centimeter'){
        lengthResult.value = (lengthInput.value)*2.54;
    }
    else if(lenghtInputType.value =='Inch' && lengthResultType.value=='meter'){
        lengthResult.value = (lengthInput.value)/39.37;
    }
    else if(lenghtInputType.value =='Inch' && lengthResultType.value=='kilometer'){
        lengthResult.value = (lengthInput.value)/39370;
    }
    else if(lenghtInputType.value =='Inch' && lengthResultType.value=='Foot'){
        lengthResult.value = (lengthInput.value)/12;
    }
    else if(lenghtInputType.value =='Inch' && lengthResultType.value=='Inch'){
        lengthResult.value = lengthInput.value;
    }
}



// *********************************code for Tip Calculator*********************************

const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {
  const bill = Number(billInput.value)
  const tipPercent = Number(tipInput.value) / 100
  const tipAmount = bill * tipPercent
  const total = tipAmount + bill
  const perPersonTotal = total / numberOfPeople
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2).toLocaleString('en-US')}`
}

const increasePeople = () => {
  numberOfPeople += 1
  numberOfPeopleDiv.innerText = numberOfPeople
  calculateBill()
}

const decreasePeople = () => {
  if (numberOfPeople <= 1) {
    return
  }
  numberOfPeople -= 1
  numberOfPeopleDiv.innerText = numberOfPeople
  calculateBill()
}

