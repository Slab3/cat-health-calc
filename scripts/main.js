ButtCalc.onclick = function () {
    //getting all inputs here.
    let gettingName = document.getElementById("InputCatName").value;
    let gettingSex = document.getElementById("InputCatSex").options.selectedIndex;
    let gettingWeight = document.getElementById("InputCatWeight").value;
    let gettingLength = document.getElementById("InputCatLength").value;
    let gettingBirthday = document.getElementById("InputCatBirthday").value;
    let gettingWeightCtgry = document.getElementById("InputCatWeightCtgry").options.selectedIndex;
    let gettingNose = document.getElementById("InputCatNose").options.selectedIndex;
    let gettingEars = document.getElementById("InputCatEars").options.selectedIndex;
    let gettingDigestiveSystem = document.getElementById("InputCatDigestiveSystem").options.selectedIndex;
    let gettingBreath = document.getElementById("InputCatBreath").options.selectedIndex;


    // ===== ===== ===== if-else. for calculating
    // ===== ===== ===== Name ===== ===== ===== ===== ===== =====-
    // alert(gettingName);

    // ===== ===== ===== cat sex ===== ===== ===== ===== ===== =====-
    if (gettingSex === 0) {
        // alert('1 sex');
    } else {
        // alert('2 sex');
    }

    // ===== ===== ===== Weight ===== ===== ===== ===== ===== =====-
    if (gettingWeight < 3) {
        // alert('легесенький...');
    }

    // ===== ===== ===== Length ===== ===== ===== ===== ===== =====-
    if (gettingLength > 75) {
        // alert('ого він довгий!');
    }

    let lngth = 0;

    if (gettingLength  > 120) {
        lngth = 6;
    } else if (gettingLength > 100) {
        lngth = 5;
    } else if (gettingLength > 80) {
        lngth = 4;
    } else if (gettingLength > 60) {
        lngth = 3;
    } else if (gettingLength > 40) {
        lngth = 2;
    } else if (gettingLength > 20) {
        lngth = 1;
    }
    document.body.innerHTML = '<p class="result-elem">' + lngth +
        " проіндексована довжина кота...  а не число" + '</p>';


    // ===== ===== ===== birthday ===== ===== ===== ===== ===== =====-
    if (gettingBirthday < "2020-11-01") {
        // alert('вашому коту більше місяця...')
    }

    // ===== ===== ===== weight category (getting selected Index) ===== ===== ===== ===== ===== =====-
    if (gettingWeightCtgry === 0) {
        // alert('1 wgth ctgry');
    } else if (gettingWeightCtgry === 1) {
        // alert('2 wgth ctgry');
    } else {
        // alert('3 wgth ctgry');
    }

    // ===== ===== ===== Nose ===== ===== ===== ===== ===== =====-
    if (gettingNose === 0) {
        // alert('1 nose');
    } else {
        // alert('2 nose');
    }

    // ===== ===== ===== Ears ===== ===== ===== ===== ===== =====-
    if (gettingEars === 0) {
        // alert('1 ears');
    } else {
        // alert('2 ears');
    }

    // ===== ===== ===== Breath ===== ===== ===== ===== ===== =====-
    if (gettingBreath === 0) {
        // alert('1 breath');
    } else {
        // alert('2 breath');
    }

    // ===== ===== ===== Digestive System ===== ===== ===== ===== ===== =====-
    if (gettingDigestiveSystem === 0) {
        // alert('1 syst');
    } else {
        // alert('2 syst');
    }


    // random sum - if nose + ears = 2, document write...  ===== =----------------------------- -
    // це треба убрать, бо не работає в парі з innerHTML
    //
    if (gettingNose + gettingEars === 2) {
        // document.writeln('<p>' + 'ало це шо за, коту плохо, вуха + ніс це капець!!!!!!!' + '</p>')
    }
    //
    //

    // document.write(gettingEars + gettingNose)
    alert('Зараз ви будете переведені на сторінку результатів')
};














//
// // on bottom - useless..may be :D
//
// let inputCatN = 0;
//
// //function when click on button
// ButtCalc.onclick = function () {
//     inputCatN = document.getElementById('InputCatName').value; //getting name
//         // getting id of EARS selected element, and after getting text which was inside
//
//
//     let selindWeightCateg = document.getElementById("InputCatBreed").options.selectedIndex;
//     if (selindWeightCateg === 0) {
//         console.log('eto ono, rabotaet!!!!!')
//     } else if (selindWeightCateg === 1) {
//         console.log('eto britanec');
//     } else if (selindWeightCateg === 2) {
//         console.log('eto VERY BIG CAT!!');
//     }
//
//
//     // ===== ===== NOSE
//     let selindNose = document.getElementById("InputCatNose").options.selectedIndex;
//     let txtNose = document.getElementById("InputCatNose").options[selindNose].text;
//     //value - deleted from this elem in html, so it's useless.
//     // let valNose = document.getElementById("InputCatNose").options[selindNose].value;
//
//     // ===== ===== EARS
//     let selindEars = document.getElementById("InputCatEars").options.selectedIndex;
//     let txtEars = document.getElementById("InputCatEars").options[selindEars].text;
//     //value - deleted from this elem in html, so it's useless.
//     // let valEars = document.getElementById("InputCatEars").options[selindEars].value;
//
//     alert("коефіціент здоров'я " + inputCatN + ' ' + txtNose + ' ' +txtEars  );
// };
//

