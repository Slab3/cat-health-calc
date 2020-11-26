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

    // testing variables && onclick button
    // ===== ===== ===== Name ===== ===== ===== ===== ===== =====-
    console.log(gettingName);

    // =====  cat sex=====-
    if (gettingSex === 0) {console.log('1 sex');} else {console.log('2 sex');}

    // ===== Weight =====-
    if (gettingWeight < 3) {console.log('легесенький...');}

    // ===== Length =====-
    if (gettingLength > 80) {console.log('ого котееее довгий!');}

    let lngth = 0;
    if (gettingLength  > 120) {lngth = 6;} else if (gettingLength > 100) {lngth = 5;} else if (gettingLength > 80) {lngth = 4;} else if (gettingLength > 60) {lngth = 3;} else if (gettingLength > 40) {lngth = 2;} else if (gettingLength > 20) {lngth = 1;}

    // ===== birthday =====-
    if (gettingBirthday < "2020-11-01") {console.log('вашому коту більше місяця...')}

    // ===== weight category (getting selected Index) =====- weight category
    if (gettingWeightCtgry === 0) {console.log('1 wgth ctgry');} else if (gettingWeightCtgry === 1) {console.log('2 wgth ctgry');} else {console.log('3 wgth ctgry');}

    // ===== Nose =====- nose
    if (gettingNose === 0) {console.log('1 nose');} else {console.log('2 nose');}

    // ===== Ears =====- ears
    if (gettingEars === 0) {console.log('1 ears');} else {console.log('2 ears');}

    // ===== Breath =====- breath
    if (gettingBreath === 0) {console.log('1 breath');} else {console.log('2 breath');}

    // ===== Digestive System =====- digestive system
    if (gettingDigestiveSystem === 0) {console.log('1 syst');} else {console.log('2 syst');}


    // setting text in variables for quick send it into page generator

    // ---===--- BIG WEIGHT
    let bigWeightText = 'має проблеми з зайвою вагою. Постарайтесь більше вигулювати свого улюбленця. ' +  '<br>' +
        'Є проста перевірка: якщо взявши свого улюбленця, ви відчуваєте ребра, але не можете їх полічити, ' +
        'кіт має надмірну вагу. ' +
        '<p>'+ 'Для здоров\'я котів з зайвою вагою є такі ризики: ' +  '</p>' +
        '<p>' + 'Через ожиріння може бути порушена робота імунної системи кота, що робить його більш сприйнятливим до ' +
        'інфекцій. Зокрема, це інфекції сечовидільної системи та «камені», які виникають через те, що коти з ' +
        'надмірною вагою менш активні, схильні пити менше води, і сечовипускання у них відбувається рідше ' +
        'порівняно зі здоровими особинами.' +
        '</p>' + '<br>' +
        '<p>' + 'Коти з ожирінням <i class="small-txt">(>12кг на 50 см довжини)</i> мають набагато вищий ризик розвитку діабету: близько 80% із них мають цей стан, ' +
        'тобто потребують щоденних ін\'єкцій інсуліну. Часто розвиток діабету можна призупинити й покращити ' +
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
        '<p>' + 'Сформувавши у свого кота правильні звички, пов\'язані з годуванням, ви допоможете йому зберігати ' +
        'оптимальну вагу й уникнете таких явищ, як випрошування додаткової їжі.' +
        '</p>' +
        '<p>' + 'Переконайтеся, що ваш кіт отримує рекомендовану порцію їжі, зважуючи її за допомогою кухонних ваг. ' +
        'Вам може здаватися, що порція корму замала, однак промислово виготовлені корми є повноцінними й ' +
        'збалансованими за складом, а їх рекомендовану вагу розраховано так, щоб ваш кіт отримав усе необхідне. ' +
        'Крім того, у кота має бути необмежений доступ до прісної води для сприяння травленню й запобігання розладам ' +
        'сечовидільної системи, як-от утворенню каменів.' +
        '</p>' + '<br>' +
        '<p>' + 'Обмежте кількість ласощів, які ви даєте своєму коту, оскільки вони можуть суттєво збільшити ' +
        'його щоденну норму споживання калорій. Якщо кіт отримує ласощі, обов\'язково враховуйте їх у ' +
        'загальній калорійності раціону.' +
        '</p>' + '<br>' +
        '<p>' + 'Залежно від віку та способу життя коти потребують різної кількості поживних речовин для підтримання ' +
        'оптимальної ваги, а це означає, що ви маєте відстежувати їх ріст і коригувати раціон відповідно до їхніх потреб.' +
        '</p>';

    // ---===--- SMALL WEIGHT
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
        'поганим, тож кіт може просто не їсти. Крім того, збільшена порція не обов\'язково забезпечить вашого ' +
        'кота специфічним комплексом поживних речовин, необхідних для набору ваги або відновлення після хвороби. ' +
        'Натомість кориснішою може виявитися спеціальна дієта з додаванням пребіотиків, яка допоможе відновити ' +
        'баланс кишкової мікрофлори та покращити стан травної системи.' +
        '</p>' + '<br>' +
        '<p>' + 'Раціон кота під час набору ваги повинен мати високу енергоємність. У такому разі кіт ' +
        'отримуватиме від їжі все необхідне, хоча й з\'їдатиме менше. Корм також має бути привабливим на ' +
        'запах і смак, щоб стимулювати апетит, і зручним за формою: крокети правильно підібраного розміру ' +
        'або ніжніші за текстурою можуть заохотити кота їсти краще.' +
        '</p>' + '<br>' +
        '<p>' + 'Важливо, щоб під час приймання їжі кіт почувався спокійно та зручно, тоді тварина ' +
        'їстиме регулярно та почне набирати вагу.' + '</p>';



    // ========-----=-=- =-=-=----- if cat older than 8 years
    let catMore8Years;
    let catSexForBirthday;

    // getting cat Sex for text Paragraph
    if (gettingSex === 0) {
        catSexForBirthday = 'вашому коту більше 8 років, він стає більш лінивим';
    } else {
        catSexForBirthday = 'вашій кішці більше 8 років, вона стає більш лінивою';
    }

    // text if catMore8Years
    if (gettingBirthday === '') { // there can be ... == 0
        catMore8Years = '';
        gettingBirthday = '<u class="small-txt">Ви не вказали ' + '<i>дату народження.</i></u>'
    } else if (gettingBirthday <= "2012-11-01") {
        catMore8Years = '<p>' + 'Оскільки ' + catSexForBirthday + ', менше рухається ' +
            'та менше витрачає калорії. Підвищуються ризики виникнення хвороб, ожиріння та ін. Тому треба ' +
            'серйозніше відноситись до цієї інформації, і звертати увагу на стан вашого улюбленця частіше.' + '</p>'
    } else if (gettingBirthday > "2012-11-01") {
        catMore8Years = '';
    }


    //=== --- === ----- ===== checking for content in name
    if (gettingName === '') {
        gettingName = 'Ви не вказали ім\'я...'
    }

    // ============== --------------- calculating:
    let weightResult;

//-=-=-=- YARD category (11 до 1) - 0 - MALE
    if (gettingWeight === '' || gettingLength === '') {  //there can be ... ==
        weightResult = ':/ ви не вказали обов\'язковий параметр ' + '<i>Вага / Довжина кота.</i>'
    } else if (gettingLength / gettingWeight <= 8.7 && gettingSex === 0 && gettingWeightCtgry === 0) {
        weightResult = bigWeightText; // =========================================================== big weight
    } else if (gettingLength / gettingWeight > 8.7 && gettingLength / gettingWeight < 13.1 && gettingSex === 0 && gettingWeightCtgry === 0) {
        weightResult = normalWeightText; // =========================================================== normal weight
    } else if (gettingLength / gettingWeight > 13.1 && gettingSex === 0 && gettingWeightCtgry === 0) {
        weightResult = smallWeightText; // =========================================================== small weight
    }
//-=-=-=- 0 - FEMALE
    if (gettingWeight === '' || gettingLength === '') {  //there can be ... ==
        weightResult = ':/ ви не вказали обов\'язковий параметр ' + '<i>Вага / Довжина кота.</i>'
    } else if (gettingLength / gettingWeight <= 9 && gettingSex === 1 && gettingWeightCtgry === 0) {
        weightResult = bigWeightText; // =========================================================== big weight
    } else if (gettingLength / gettingWeight > 9 && gettingLength / gettingWeight < 13.4 && gettingSex === 1 && gettingWeightCtgry === 0) {
        weightResult = normalWeightText; // =========================================================== normal weight
    } else if (gettingLength / gettingWeight > 13.4 && gettingSex === 1 && gettingWeightCtgry === 0) {
        weightResult = smallWeightText; // =========================================================== small weight
    }

//-=-=-=- category BRITISH / SCOTTISH (10sm to 1 kg) - 1 - MALE
    if (gettingWeight === '' || gettingLength === '') {  //there can be ... ==
        weightResult = ':/ ви не вказали обов\'язковий параметр ' + '<i>Вага / Довжина кота.</i>'
    } else if (gettingLength / gettingWeight <= 8 && gettingSex === 0 && gettingWeightCtgry === 1) {
        weightResult = bigWeightText; // =========================================================== big weight
    } else if (gettingLength / gettingWeight > 8 && gettingLength / gettingWeight < 12.3 && gettingSex === 0 && gettingWeightCtgry === 1) {
        weightResult = normalWeightText; // =========================================================== normal weight
    } else if (gettingLength / gettingWeight > 12.3 && gettingSex === 0 && gettingWeightCtgry === 1) {
        weightResult = smallWeightText; // =========================================================== small weight
    }
//-=-=-=- 1 - FEMALE
    if (gettingWeight === '' || gettingLength === '') {  //there can be ... ==
        weightResult = ':/ ви не вказали обов\'язковий параметр ' + '<i>Вага / Довжина кота.</i>'
    } else if (gettingLength / gettingWeight <= 8.3 && gettingSex === 1 && gettingWeightCtgry === 1) {
        weightResult = bigWeightText; // =========================================================== big weight
    } else if (gettingLength / gettingWeight > 8.3 && gettingLength / gettingWeight < 12.6 && gettingSex === 1 && gettingWeightCtgry === 1) {
        weightResult = normalWeightText; // =========================================================== normal weight
    } else if (gettingLength / gettingWeight > 12.6 && gettingSex === 1 && gettingWeightCtgry === 1) {
        weightResult = smallWeightText; // =========================================================== small weight
    }
//-=-=-=- category BIG - MAINE COON ... (7sm to 1 kg) - 2 - MALE
    if (gettingWeight === '' || gettingLength === '') {  //there can be ... ==
        weightResult = ':/ ви не вказали обов\'язковий параметр ' + '<i>Вага / Довжина кота.</i>'
    } else if (gettingLength / gettingWeight <= 6 && gettingSex === 0 && gettingWeightCtgry === 2) {
        weightResult = bigWeightText; // =========================================================== big weight
    } else if (gettingLength / gettingWeight > 6 && gettingLength / gettingWeight < 9 && gettingSex === 0 && gettingWeightCtgry === 2) {
        weightResult = normalWeightText; // =========================================================== normal weight
    } else if (gettingLength / gettingWeight > 9 && gettingSex === 0 && gettingWeightCtgry === 2) {
        weightResult = smallWeightText; // =========================================================== small weight
    }
//-=-=-=- 2 - FEMALE
    if (gettingWeight === '' || gettingLength === '') {  //there can be ... ==
        weightResult = ':/ ви не вказали обов\'язковий параметр ' + '<i>Вага / Довжина кота.</i>'
    } else if (gettingLength / gettingWeight <= 6.3 && gettingSex === 1 && gettingWeightCtgry === 2) {
        weightResult = bigWeightText; // =========================================================== big weight
    } else if (gettingLength / gettingWeight > 6.3 && gettingLength / gettingWeight < 9.3 && gettingSex === 1 && gettingWeightCtgry === 2) {
        weightResult = normalWeightText; // =========================================================== normal weight
    } else if (gettingLength / gettingWeight > 9.3 && gettingSex === 1 && gettingWeightCtgry === 2) {
        weightResult = smallWeightText; // =========================================================== small weight
    }



    // === === --- --- calculating nose, ears, breathe, dig. system:
    let physiologicalFeatures;
    let physFtText = '<b>Фізіологічні особливості кота </b>';


    if (gettingNose + gettingEars + gettingBreath === 0) {
        physiologicalFeatures = physFtText + 'в нормі. ';
    } else if (gettingNose + gettingEars + gettingBreath === 3) {
        physiologicalFeatures = physFtText + 'не в нормі. Сухий ніс, гарячі вуха, та часте, ускладнене дихання - ' +
            'разом можуть бути ознакою підвищеної температури. Можливо ваш клубок щастя захворів. Якщо є можливість, поміряйте ' +
            'температуру тварини. ' + '<i class="small-txt">(Пам\'ятайте,що нормальна температура тіла кота - 38,5°).</i>' +
            'Також при таких симптомах можлива серцева недостатність - при проблемах із серцем у тварини розвивається ' +
            'сильна задишка, кішка важко дихає животом та кашляє.'
    } else if (gettingNose + gettingEars === 2) {
        physiologicalFeatures = physFtText + 'не в нормі. Сухий ніс та гарячі вуха можуть бути ознакою того, ' +
            'що ваш улюбленець перегрівся або ж переохолодився, також можливо, що він прихворів.'
    } else if (gettingNose + gettingBreath === 2) {
        physiologicalFeatures = physFtText + 'не в нормі. Сухий ніс та ускладнене дихання є можливою ознакою того, ' +
            'що ваш улюбленець захворів або перегрівся <i class="small-txt">(зазвичай в випадку перегріву або ' +
            'переохолодження також гарячі й вуха)</i>.' + 'Зверніться до спеціаліста. Також можлива серцева ' +
            'недостатність - при проблемах із серцем у тварини розвивається сильна задишка, кішка ' +
            'важко дихає животом, кашляє, її слизові поверхні бліднуть аж до легкої синяви.'
    } else if (gettingEars + gettingBreath === 2) {
        physiologicalFeatures = physFtText + 'не в нормі. Гарячі вуха та ускладнене дихання є можливою ознакою того, ' +
            'що ваш улюбленець перегрівся, або ж захворів, якщо маєте можливість, поміряйте температуру тіла тварини.' +
            '<i class="small-txt">(Пам\'ятайте,що нормальна температура тіла кота - 38,5°).</i>' +
            'Також можлива серцева недостатність - при проблемах із серцем у тварини розвивається сильна задишка, кішка ' +
            'важко дихає животом та кашляє.'
    } else if (gettingNose === 1) {
        physiologicalFeatures = physFtText + 'не в нормі. Сухість носової мочки може говорити про: переохолодження, перегрівання, ' +
            'звичайну хворобу(<i class="small-txt">зазвичай супроводжується сонливістю, прискореним, або ж уповільненим ' +
            'диханням, та гарячими вухами</i>), або ж наявністю внутрішніх патологій, але вони до того часу вже починають ' +
            'проявляти себе і з’являється клінічна картина того чи іншого захворювання.'
    } else if (gettingEars === 1) {
        physiologicalFeatures = physFtText + 'не в нормі. Однією з причин гарячих вух може стати елементарний стрес, ' +
            'який зазнала тварина. Серце починає битися сильніше, внаслідок чого температура може підскочити. ' +
            'У цьому кішки не дуже відрізняються від людей, у яких теж підвищується температура тіла при ' +
            'переляку або сильному хвилюванні. Якщо вам здається, що вуха у вашого вихованця гарячі, ' +
            'уважно огляньте їх: іноді причиною цього можуть бути вушні кліщі. Якщо ви виявили підозрілі грудочки ' +
            'і бруд на вушних раковинах, негайно обробіть їх відповідними препаратами, які порекомендує ветеринар. ' +
            'Також гарячі вуха можуть бути ознакою підвищеної температури тіла, якщо маєте можливість, поміряйте ' +
            'температуру тіла тварини.' + '<i class="small-txt">(Пам\'ятайте,що нормальна температура тіла кота - 38,5°).</i>'
    } else if (gettingBreath === 1) {
        physiologicalFeatures = physFtText + 'не в нормі, або ж ваш вихованець просто перевтомився після активних ігор, ' +
            'знаходиться в душній та жаркій кімнаті, агресивно налаштований по відношенню до іншої, недружньої кішки, ' +
            'яка знаходиться поблизу, або ж він злякався чогось. ' +
            '<br>' +
            'Серйозними з можливих причин важкого дихання кота є: ' +
            '<ul class="list-st">' +
            '   <li>Чужорідний предмет в дихальних шляхах - дуже часто, коли кішка стала важко дихати, виною ' +
            'всьому камінчик, гілочка або кістка, що застрягли в дихальних органах.</li>' +
            '   <li>Інфекційні та неінфекційні хвороби дихальної системи - при ринотрахеїті, кальцивірозі, пневмонії, ' +
            'бронхіті, ларингіті, риніті, трахеїті, астмі та інших недугах дихальних органів кішки важко дихають зі ' +
            'свистом або хрипом, температура тіла піднімається, тварини часто ловлять повітря відкритим ротом, чхають.</li>' +
            '   <li>Набряк легень - подібна недуга, при якій дихання кішки стає важким, можуть викликати багато ' +
            'факторів: хвороби печінки і нирок, алергія і анафілактичний шок, травми, серцеві хвороби. При ' +
            'набряку легенів кішка може байдуже лежати, важко дихаючи животом і хапаючи повітря відкритим ротом</li>' +
            '   <li>Легеневі гельмінти - якщо кішка лежить і важко дихає більшу частину часу, відмовляється від їжі, ' +
            'у неї спостерігаються сухий кашель і сильна задишка навіть при мінімальних навантаженнях, виною ' +
            'всьому можуть бути паразитичні черви, які облюбували легкі</li>' +
            '   <li>Серцева недостатність - при проблемах із серцем у тварини розвивається сильна задишка, кішка ' +
            'важко дихає животом, кашляє, її слизові поверхні бліднуть аж до легкої синяви.</li>' +
            '</ul>'
    }

    //getting cat sex for digSystRes
    let digSystRes;
    let catNecat;
    if (gettingSex === 0) {
        catNecat = ' кота '
    } else {catNecat = ' кішки '}

    if (gettingDigestiveSystem === 1 && gettingWeightCtgry === 2) {
        digSystRes = '<b>Травлення: </b>' + 'Кота, що страждає на блювоту і діарею, слід завжди обстежувати, ' +
            'щоб визначити, чи є зараження паразитами, наприклад глистами або лямбліями (одноклітинними організмами). ' +
            'Зараження лямблією важко лікується і може викликати повторну слизову, іноді криваву діарею. Коти, які ' +
            'перебувають у хорошому загальному стані здоров\'я, але часто страждають діареєю, повинні бути ' +
            'перевірені на інші патогени, такі як Tritrichomonas fetus та coccidia. Оскільки існує так багато ' +
            'можливих причин та признаків порушення травлення, таких як діарея, блювота, закреп або втрата ' +
            'апетиту. Вихованця необхідно обстеживати: зробити лабораторні тести, рентген та ультразвукове дослідження.' +
            '<br>' + 'У котів  породи Мейн-Кун завжди слід враховувати інвагінацію кишечника як причину, оскільки ' +
            'ця порода є статистично схильною до цього стану. Це стан, при якому частина кишечника згинається в ' +
            'ділянці поруч з ним, що показує типовий висновок на УЗД.'
    } else if (gettingDigestiveSystem === 1) {
        digSystRes = '<b>Травлення: </b>' + 'Кота, що страждає на блювоту і діарею, слід завжди обстежувати, ' +
            'щоб визначити, чи є зараження паразитами, наприклад глистами або лямбліями (одноклітинними організмами). ' +
            'Зараження лямблією важко лікується і може викликати повторну слизову, іноді криваву діарею. Коти, які ' +
            'перебувають у хорошому загальному стані здоров\'я, але часто страждають діареєю, повинні бути ' +
            'перевірені на інші патогени, такі як Tritrichomonas fetus та coccidia. Оскільки існує так багато ' +
            'можливих причин та признаків порушення травлення, таких як діарея, блювота, закреп або втрата ' +
            'апетиту. Вихованця необхідно обстеживати: зробити лабораторні тести, рентген та ультразвукове дослідження.'
    } else if (gettingDigestiveSystem === 0) {
        digSystRes = '<b>Травлення: </b>' + 'З травленням' + catNecat + 'все добре. ' + '<br>' + '<i class="small-txt">' +
            'Важливо знати: коли справа стосується їжі, коти стають дуже прискіпливими. Деякі коти особливо ' +
            'чутливі до свого харчування. Часто виникає ситуація, коли кіт колись любив певну їжу, згодом ' +
            'відмовляється від неї. Голодний кіт демонструє, що він хоче їсти, але відвертається від корму ' +
            'ніби образившись. Коти, безумовно, гурмани, і тому можуть бути дуже прискіпливими. Потім кіт ' +
            'може відмовитись від конкретного корму, оскільки він погано почувається після його вживання. ' +
            'Деякі коти реагують дивно на стрес, який потім викликає у них шлунково-кишкові негаразди: вони ' +
            'починають блювати, навіть якщо їхня травна система здорова.' + '</i>';
    }


    alert('Зараз ви будете перенаправлені на сторінку результатів');
    // ----------------------------------------------------------------------------------: dropping result on page:
    document.body.innerHTML =
        '<header class="header-result">' +
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
        '   <p>' + '<b>' + gettingName + '</b>' + ' ' + weightResult + '<br>' + catMore8Years +
        '       <i class="float-right-result small-txt">(інформацію надано враховуючи дату народження: '
                    + gettingBirthday + ')</i>' +
        '       <br>' +
        '   </p>' +
        '   <hr>' +
        '   <p class="physiologFt">' + physiologicalFeatures + '</p>' +
        '   <p>' + digSystRes + '</p>' +
        '</section>'
    ;
};


