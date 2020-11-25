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

    //getting text from inputs
    let gettingEarsText = document.getElementById("InputCatEars").options[gettingEars].text;
    console.log(gettingEarsText);


    // ===== ===== ===== if-else. for calculating
    // ===== ===== ===== Name ===== ===== ===== ===== ===== =====-
    // alert(gettingName);

    // ===== ===== ===== cat sex ===== ===== ===== ===== ===== =====-
    if (gettingSex === 0) {
        // alert('1 sex');
    } else {
        // alert('2 sex');
    }

    // ===== ===== ===== Weight ===== ===== ===== ===== ===== =====- weight
    if (gettingWeight < 3) {
        // alert('легесенький...');
    }

    // ===== ===== ===== Length ===== ===== ===== ===== ===== =====- length
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


    // ===== ===== ===== birthday ===== ===== ===== ===== ===== =====- birthday
    if (gettingBirthday < "2020-11-01") {
        // alert('вашому коту більше місяця...')
    }

    // ===== ===== ===== weight category (getting selected Index) ===== ===== ===== ===== ===== =====- weight category
    if (gettingWeightCtgry === 0) {
        // alert('1 wgth ctgry');
    } else if (gettingWeightCtgry === 1) {
        // alert('2 wgth ctgry');
    } else {
        // alert('3 wgth ctgry');
    }

    // ===== ===== ===== Nose ===== ===== ===== ===== ===== =====- nose
    if (gettingNose === 0) {
        // alert('1 nose');
    } else {
        // alert('2 nose');
    }

    // ===== ===== ===== Ears ===== ===== ===== ===== ===== =====- ears
    if (gettingEars === 0) {
        // alert('1 ears');
    } else {
        // alert('2 ears');
    }

    // ===== ===== ===== Breath ===== ===== ===== ===== ===== =====- breath
    if (gettingBreath === 0) {
        // alert('1 breath');
    } else {
        // alert('2 breath');
    }

    // ===== ===== ===== Digestive System ===== ===== ===== ===== ===== =====- digestive system
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

    // ======================= ------------------------ calculating:
    let weightResult;

//-=-=-=- категорія БЕЗ ПОРОДИ (11 до 1) - 0 - MALE
    if (gettingLength / gettingWeight <= 8.7 && gettingSex === 0 && gettingWeightCtgry === 0) {
        weightResult = 'має проблеми з вагою, ожиріння. Постарайтесь більше вигулювати свого улюбленця. ' +
            'Якщо ви відчуваєте ребра, але не можете їх полічити, кіт має надмірну вагу.';
    } else if (gettingLength / gettingWeight > 8.7 && gettingLength / gettingWeight < 13.1 && gettingSex === 0 && gettingWeightCtgry === 0) {
        weightResult = 'має хорошу вагу, та не має потреби в додатковій активності.';
    } else if (gettingLength / gettingWeight > 13.1 && gettingSex === 0 && gettingWeightCtgry === 0) {
        weightResult = 'має проблеми з вагою, дуже мала маса. Постарайтесь більше годувати улюбленця. Якщо він не хоче' +
            ' зверніться до спеціаліста. Можливо в нього проблеми з зубами, або якась інфекція.';
    }
//-=-=-=- 0 - FEMALE
    if (gettingLength / gettingWeight <= 9 && gettingSex === 1 && gettingWeightCtgry === 0) {
        weightResult = 'має проблеми з вагою, ожиріння. Постарайтесь більше вигулювати свого улюбленця. ' +
            'Якщо ви відчуваєте ребра, але не можете їх полічити, кіт має надмірну вагу.';
    } else if (gettingLength / gettingWeight > 9 && gettingLength / gettingWeight < 13.4 && gettingSex === 1 && gettingWeightCtgry === 0) {
        weightResult = 'має хорошу вагу, та не має потреби в додатковій активності.';
    } else if (gettingLength / gettingWeight > 13.4 && gettingSex === 1 && gettingWeightCtgry === 0) {
        weightResult = 'має проблеми з вагою, дуже мала маса. Постарайтесь більше годувати улюбленця. Якщо він не хоче' +
            ' зверніться до спеціаліста. Можливо в нього проблеми з зубами, або якась інфекція.';
    }

//-=-=-=- категорія БРИТАНЦІ/ШОТЛАНДЦІ (10 до 1) - 1 - MALE
    if (gettingLength / gettingWeight <= 8 && gettingSex === 0 && gettingWeightCtgry === 1) {
        weightResult = 'має проблеми з вагою, ожиріння. Постарайтесь більше вигулювати свого улюбленця. ' +
            'Якщо ви відчуваєте ребра, але не можете їх полічити, кіт має надмірну вагу.';
    } else if (gettingLength / gettingWeight > 8 && gettingLength / gettingWeight < 12.3 && gettingSex === 0 && gettingWeightCtgry === 1) {
        weightResult = 'має хорошу вагу, та не має потреби в додатковій активності.';
    } else if (gettingLength / gettingWeight > 12.3 && gettingSex === 0 && gettingWeightCtgry === 1) {
        weightResult = 'має проблеми з вагою, дуже мала маса. Постарайтесь більше годувати улюбленця. Якщо він не хоче' +
            ' зверніться до спеціаліста. Можливо в нього проблеми з зубами, або якась інфекція.';
    }
//-=-=-=- 1 - FEMALE
    if (gettingLength / gettingWeight <= 8.3 && gettingSex === 1 && gettingWeightCtgry === 1) {
        weightResult = 'має проблеми з вагою, ожиріння. Постарайтесь більше вигулювати свого улюбленця. ' +
            'Якщо ви відчуваєте ребра, але не можете їх полічити, кіт має надмірну вагу.';
    } else if (gettingLength / gettingWeight > 8.3 && gettingLength / gettingWeight < 12.6 && gettingSex === 1 && gettingWeightCtgry === 1) {
        weightResult = 'має хорошу вагу, та не має потреби в додатковій активності.';
    } else if (gettingLength / gettingWeight > 12.6 && gettingSex === 1 && gettingWeightCtgry === 1) {
        weightResult = 'має проблеми з вагою, дуже мала маса. Постарайтесь більше годувати улюбленця. Якщо він не хоче' +
            ' зверніться до спеціаліста. Можливо в нього проблеми з зубами, або якась інфекція.';
    }
//-=-=-=- категорія Великі - Мейн-кун... (7 до 1) - 2 - MALE
    if (gettingLength / gettingWeight <= 6 && gettingSex === 0 && gettingWeightCtgry === 2) {
        weightResult = 'має проблеми з вагою, ожиріння. Постарайтесь більше вигулювати свого улюбленця. ' +
            'Якщо ви відчуваєте ребра, але не можете їх полічити, кіт має надмірну вагу.';
    } else if (gettingLength / gettingWeight > 6 && gettingLength / gettingWeight < 9 && gettingSex === 0 && gettingWeightCtgry === 2) {
        weightResult = 'має хорошу вагу, та не має потреби в додатковій активності.';
    } else if (gettingLength / gettingWeight > 9 && gettingSex === 0 && gettingWeightCtgry === 2) {
        weightResult = 'має проблеми з вагою, дуже мала маса. Постарайтесь більше годувати улюбленця. Якщо він не хоче' +
            ' зверніться до спеціаліста. Можливо в нього проблеми з зубами, або якась інфекція.';
    }
//-=-=-=- 2 - FEMALE
    if (gettingLength / gettingWeight <= 6.3 && gettingSex === 1 && gettingWeightCtgry === 2) {
        weightResult = 'має проблеми з вагою, ожиріння. Постарайтесь більше вигулювати свого улюбленця. ' +
            'Якщо ви відчуваєте ребра, але не можете їх полічити, кіт має надмірну вагу.';
    } else if (gettingLength / gettingWeight > 6.3 && gettingLength / gettingWeight < 9.3 && gettingSex === 1 && gettingWeightCtgry === 2) {
        weightResult = 'має хорошу вагу, та не має потреби в додатковій активності.';
    } else if (gettingLength / gettingWeight > 9.3 && gettingSex === 1 && gettingWeightCtgry === 2) {
        weightResult = 'має проблеми з вагою, дуже мала маса. Постарайтесь більше годувати улюбленця. Якщо він не хоче' +
            ' зверніться до спеціаліста. Можливо в нього проблеми з зубами, або якась інфекція.';
    }


    // alert(weightResult);







    // document.write(gettingEars + gettingNose)
    alert('Зараз ви будете переведені на сторінку результатів')

    // dropping result on page:
    document.body.innerHTML =
        '<header>' +
        '   <div class="flex-elem ">' +
        '       <div class="logo-cont">' +
        '           <a href="index.html">' +
        '               <img class="logo" src="img/cat-notebook.png" alt="logo-item">' +
        '           </a>' +
        '       </div>' +
        '       <div class="right-btm-header">' +
        '           <h2 class="info-head-right result-elem">Це сайт, на якому ви можете визначити, наскільки здоровий ваш кіт</h2>' +
        '       </div>' +
        '    </div>' +
        '</header>' +
        '<section class="main-page container-result">' +
        '   <p>' + gettingName + ' ' + weightResult + ' text with result ... ... ... ...' + '</p>' +
        '   <p>' + 'text with result... ... ... ...' + '</p>' +
        '   <p>' + 'text with result... ... ... ...' + '</p>' +
        '   <p>' + 'text with result... ... ... ...' + '</p>' +
        '</section>'
    ;
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

