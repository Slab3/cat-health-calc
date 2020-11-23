let inputCatN = 0;

//function when click on button
ButtCalc.onclick = function () {
    inputCatN = document.getElementById('InputCatName').value; //getting name
        // getting id of EARS selected element, and after getting text which was inside
    let selind = document.getElementById("InputCatEars").options.selectedIndex;
    let txt = document.getElementById("InputCatEars").options[selind].text;
    let val = document.getElementById("InputCatEars").options[selind].value;

    alert("коефіціент здоров'я " + inputCatN + ' ' + txt );
};


