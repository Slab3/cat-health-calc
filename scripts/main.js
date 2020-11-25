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


    // setting text in variables for fastest work --------------============----------==========---- TEXT VARIABLES
    //

    // ---===--- BIG WEIGHT
    let bigWeightText = 'має проблеми з вагою, ожиріння. Постарайтесь більше вигулювати свого улюбленця. ' +  '<br>' +
        'Є проста перевірка: якщо взявши свого улюбленця, ви відчуваєте ребра, але не можете їх полічити, ' +
        'кіт має надмірну вагу. Для здоров`я котів з зайвою вагою є такі ризики: ' +  '<br>' +
        '<p>' + 'Через ожиріння може бути порушена робота імунної системи кота, що робить його більш сприйнятливим до ' +
        'інфекцій. Зокрема, це інфекції сечовидільної системи та «камені», які виникають через те, що коти з ' +
        'надмірною вагою менш активні, схильні пити менше води, і сечовипускання у них відбувається рідше ' +
        'порівняно зі здоровими особинами.' +
        '</p>' + '<br>' +
        '<p>' + 'Коти з ожирінням мають набагато вищий ризик розвитку діабету: 80–90% із них мають цей стан, ' +
        'тобто потребують щоденних ін’єкцій інсуліну. Часто розвиток діабету можна призупинити й покращити ' +
        'стан, якщо позбавити тварину зайвої ваги, оскільки вже не буде накопиченого жиру, який безпосередньо ' +
        'відповідає за нездатність регулювати рівень глюкози.' +
        '</p>' + '<br>' +
        '<p>' + 'Одним із серйозних і потенційно смертельних ризиків через ожиріння в котів є печінкова ' +
        'недостатність. Якщо організму кота здається, що він отримує недостатньо їжі, наприклад якщо припинити ' +
        'постійне харчування, жир переноситься з відкладень у печінку, де використовується для отримання енергії. ' +
        'Однак організм кота не може ефективно керувати цим процесом, що призводить до неналежного функціонування ' +
        'печінки, а іноді – до смертельно небезпечної печінкової недостатності та відмови печінки.'  +
        '</p>' + '<br>' +
        '<p>' + 'Котам із надмірною вагою важко доглядати за собою, що може призвести до проблем зі шкірою. ' +
        'Крім того, зайва вага створює навантаження на суглоби кота, через що він може страждати на артрити. ' +
        'Серцево-судинна та дихальна системи також уражаються, що призводить до задишки й проблем із серцем.' +
        '</p>';

    // ---===--- NORMAL WEIGHT
    let normalWeightText = 'має хорошу вагу, та не має потреби в додатковій активності.' +
        '<p>' + 'Для того, щоб допомогти коту підтримувати оптимальну вагу, потрібно регулярно гратися з улюбленцем, ' +
        'особливо якщо він не виходить на вулицю. У середньому домашнім котам потрібно на третину менше ' +
        'калорій, ніж вуличним, оскільки вони витрачають менше енергії. Тому ігри з улюбленцем – хороший ' +
        'спосіб підвищити його рухомість і запобігти набору ваги.' +
        '</p>' + '<br>' +
        '<p>' + 'Найкраще почати з двох хвилин двічі на день і поступово збільшувати тривалість, коли кіт стане ' +
        'активнішим. Дайте вихованцю іграшки для самостійної гри або харчові головоломки, які спонукатимуть його ' +
        'гратись, щоб отримати кілька крокетів як винагороду.' +
        '</p>' +
        '<p>' + 'Нудьга – одна з основних причин того, що коти їдять, коли не голодні, тому іграшки допоможуть ' +
        'вашому улюбленцю зосередитися на чомусь здоровішому та приємнішому в довгостроковій перспективі.' +
        '</p>' + '<br>' +
        '<p>' + '<b>Правильний підхід до годування кота</b>' +
        '</p>' +
        '<p>' + 'Сформувавши у свого кота правильні звички, пов’язані з годуванням, ви допоможете йому зберігати ' +
        'оптимальну вагу й уникнете таких явищ, як випрошування додаткової їжі.' +
        '</p>' +
        '<p>' + 'Переконайтеся, що ваш кіт отримує рекомендовану порцію їжі, зважуючи її за допомогою кухонних ваг. ' +
        'Вам може здаватися, що порція корму замала, однак промислово виготовлені корми є повноцінними й ' +
        'збалансованими за складом, а їх рекомендовану вагу розраховано так, щоб ваш кіт отримав усе необхідне. ' +
        'Крім того, у кота має бути необмежений доступ до прісної води для сприяння травленню й запобігання розладам ' +
        'сечовидільної системи, як-от утворенню каменів.' +
        '</p>' + '<br>' +
        '<p>' + 'Обмежте кількість ласощів, які ви даєте своєму коту, оскільки вони можуть суттєво збільшити ' +
        'його щоденну норму споживання калорій. Якщо кіт отримує ласощі, обов’язково враховуйте їх у ' +
        'загальній калорійності раціону.' +
        '</p>' + '<br>' +
        '<p>' + 'Залежно від віку та способу життя коти потребують різної кількості поживних речовин для підтримання ' +
        'оптимальної ваги, а це означає, що ви маєте відстежувати їх ріст і коригувати раціон відповідно до їхніх потреб.' +
        '</p>';

    // ---===--- NORMAL WEIGHT
    let smallWeightText = 'має проблеми з вагою, дуже мала маса. Постарайтесь більше годувати улюбленця. Якщо він не хоче' +
        ' зверніться до спеціаліста. Можливо в нього проблеми з зубами, або якась інфекція.' + '<br>' +
        '<p>' + 'Якщо кіт утратив вагу через хворобу, важливо не перевантажувати його травну систему під час ' +
        'набору ваги. Травна система кота є чутливішою, ніж у людини, вона не здатна впоратися зі ' +
        'змінами раціону – це призводить до розладів травлення та навіть подальшої втрати ваги.' +
        '</p>' +
        '<p>' + 'Крім того, кіт має отримувати правильний баланс поживних речовин під час дієти для набору ' +
        'ваги, щоб уникнути погіршення стану. Наприклад, енергоємні жири можуть допомогти коту набрати вагу, ' +
        'але й водночас викликати діарею. Так само, протеїн, необхідний для росту клітин, має бути ' +
        'високоякісним і легкозасвоюваним для зменшення навантаження на організм кота.' +
        '</p>' + '<br>' +
        '<p>' + 'Якщо коту потрібно набрати вагу, просте збільшення порції звичного корму – не надто слушне ' +
        'рішення. Травна система може не впоратися з більшою кількістю їжі, та й апетит, імовірно, буде ' +
        'поганим, тож кіт може просто не їсти. Крім того, збільшена порція не обов’язково забезпечить вашого ' +
        'кота специфічним комплексом поживних речовин, необхідних для набору ваги або відновлення після хвороби. ' +
        'Натомість кориснішою може виявитися спеціальна дієта з додаванням пребіотиків, яка допоможе відновити ' +
        'баланс кишкової мікрофлори та покращити стан травної системи.' +
        '</p>' + '<br>' +
        '<p>' + 'Раціон кота під час набору ваги повинен мати високу енергоємність. У такому разі кіт ' +
        'отримуватиме від їжі все необхідне, хоча й з’їдатиме менше. Корм також має бути привабливим на ' +
        'запах і смак, щоб стимулювати апетит, і зручним за формою: крокети правильно підібраного розміру ' +
        'або ніжніші за текстурою можуть заохотити кота їсти краще.' +
        '</p>' + '<br>' +
        '<p>' + 'Важливо, щоб під час приймання їжі кіт почувався спокійно та зручно, тоді тварина ' +
        'їстиме регулярно та почне набирати вагу.' + '</p>';



    // ========------------------=-=-==-=-=- =-=-=-=-=-=-=- text if cat older than 8 years
    let catMore8Years;
    let catSexForBirthday;

    // getting cat Sex for text Paragraph
    if (gettingSex === 0) {
        catSexForBirthday = 'вашому коту більше 8 років, він стає більш лінивим';
    } else {
        catSexForBirthday = 'вашій кішці більше 8 років, вона стає більш лінивою ';
    }

    // text catMore8Years
    if (gettingBirthday < "2012-11-01") {
        catMore8Years = '<p>' + 'Оскільки ' + catSexForBirthday + ', менше рухається ' +
            'та менше витрачає калорії. Тому треба серйозніше відноситись до цієї інформації, та звертати увагу ' +
            'на стан вашого улюбленця.' + '</p>'
    }



    // ======================= ------------------------ calculating:
    let weightResult;

//-=-=-=- категорія БЕЗ ПОРОДИ (11 до 1) - 0 - MALE
    if (gettingLength / gettingWeight <= 8.7 && gettingSex === 0 && gettingWeightCtgry === 0) {
        weightResult = bigWeightText; // =========================================================== big weight
    } else if (gettingLength / gettingWeight > 8.7 && gettingLength / gettingWeight < 13.1 && gettingSex === 0 && gettingWeightCtgry === 0) {
        weightResult = normalWeightText; // =========================================================== normal weight
    } else if (gettingLength / gettingWeight > 13.1 && gettingSex === 0 && gettingWeightCtgry === 0) {
        weightResult = smallWeightText; // =========================================================== small weight
    }
//-=-=-=- 0 - FEMALE
    if (gettingLength / gettingWeight <= 9 && gettingSex === 1 && gettingWeightCtgry === 0) {
        weightResult = bigWeightText; // =========================================================== big weight
    } else if (gettingLength / gettingWeight > 9 && gettingLength / gettingWeight < 13.4 && gettingSex === 1 && gettingWeightCtgry === 0) {
        weightResult = normalWeightText; // =========================================================== normal weight
    } else if (gettingLength / gettingWeight > 13.4 && gettingSex === 1 && gettingWeightCtgry === 0) {
        weightResult = smallWeightText; // =========================================================== small weight
    }

//-=-=-=- категорія БРИТАНЦІ/ШОТЛАНДЦІ (10 до 1) - 1 - MALE
    if (gettingLength / gettingWeight <= 8 && gettingSex === 0 && gettingWeightCtgry === 1) {
        weightResult = bigWeightText; // =========================================================== big weight
    } else if (gettingLength / gettingWeight > 8 && gettingLength / gettingWeight < 12.3 && gettingSex === 0 && gettingWeightCtgry === 1) {
        weightResult = normalWeightText; // =========================================================== normal weight
    } else if (gettingLength / gettingWeight > 12.3 && gettingSex === 0 && gettingWeightCtgry === 1) {
        weightResult = smallWeightText; // =========================================================== small weight
    }
//-=-=-=- 1 - FEMALE
    if (gettingLength / gettingWeight <= 8.3 && gettingSex === 1 && gettingWeightCtgry === 1) {
        weightResult = bigWeightText; // =========================================================== big weight
    } else if (gettingLength / gettingWeight > 8.3 && gettingLength / gettingWeight < 12.6 && gettingSex === 1 && gettingWeightCtgry === 1) {
        weightResult = normalWeightText; // =========================================================== normal weight
    } else if (gettingLength / gettingWeight > 12.6 && gettingSex === 1 && gettingWeightCtgry === 1) {
        weightResult = smallWeightText; // =========================================================== small weight
    }
//-=-=-=- категорія Великі - Мейн-кун... (7 до 1) - 2 - MALE
    if (gettingLength / gettingWeight <= 6 && gettingSex === 0 && gettingWeightCtgry === 2) {
        weightResult = bigWeightText; // =========================================================== big weight
    } else if (gettingLength / gettingWeight > 6 && gettingLength / gettingWeight < 9 && gettingSex === 0 && gettingWeightCtgry === 2) {
        weightResult = normalWeightText; // =========================================================== normal weight
    } else if (gettingLength / gettingWeight > 9 && gettingSex === 0 && gettingWeightCtgry === 2) {
        weightResult = smallWeightText; // =========================================================== small weight
    }
//-=-=-=- 2 - FEMALE
    if (gettingLength / gettingWeight <= 6.3 && gettingSex === 1 && gettingWeightCtgry === 2) {
        weightResult = bigWeightText; // =========================================================== big weight
    } else if (gettingLength / gettingWeight > 6.3 && gettingLength / gettingWeight < 9.3 && gettingSex === 1 && gettingWeightCtgry === 2) {
        weightResult = normalWeightText; // =========================================================== normal weight
    } else if (gettingLength / gettingWeight > 9.3 && gettingSex === 1 && gettingWeightCtgry === 2) {
        weightResult = smallWeightText; // =========================================================== small weight
    }



    // === === --- --- === === --- --- === === --- --- nose, ears, breathe, dig. system:
    let physiologicalFeatures;
    let physFtText = 'Фізіологічні особливості кота ';

    if (gettingNose + gettingEars + gettingBreath === 0) {
        physiologicalFeatures = physFtText + 'в нормі. ';
    } else if (gettingNose + gettingEars + gettingBreath === 3) {
        physiologicalFeatures = physFtText + 'не в нормі. Сухий ніс, гарячі вуха, та часте, ускладнене дихання - ' +
            'ознака підвищеної температура'
    }







    // document.write(gettingEars + gettingNose)
    alert('Зараз ви будете перенаправлені на сторінку результатів');

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
        '           <h2 class="info-head-right">Це сайт, на якому ви можете визначити, наскільки здоровий ваш кіт</h2>' +
        '       </div>' +
        '    </div>' +
        '</header>' +
        '<section class="main-page container-result">' +
        '   <p>' + gettingName + ' ' + weightResult + '<br>' + catMore8Years +
        '       <i class="float-right-result">(інформацію надано враховуючи дату народження: ' + gettingBirthday + ')</i>' +
        '       <br>' +
        '   </p>' +
        '   <hr>' +
        '   <p>' + 'сюда писать нові елементи.' + '</p>' +
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