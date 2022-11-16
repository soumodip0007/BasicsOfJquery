$(document).ready(function () {
    //your jQuery code here
    console.log($);
    // $('selector').action();
    //3.  clicks on all the p elements. element selector - This is an example of element selector which clicks on all p
    // $('p').click();  //click on p
    $('p').click(function () {
        //  console.log('you clicked on p');
        console.log('you clicked on p', this);
        //  $('p').hide();
        //  $(this).hide();
        // $('#id').hide();
        // $('.class').hide();

    });  //do this when click on p
    $('p').dblclick(function () {
        //  console.log('you clicked on p');
        console.log('you double clicked on p', this);
    })
    $('p').mouseenter(function () {
        //  console.log('you clicked on p');
        console.log('you entered on p', this);
    })
    $('p').hover(function () {
        //  console.log('you clicked on p');
        console.log('you hovered on p', this);
    })
    // console.log($);
    // $('selector').action();
    // $('p').click();  //click on p
    // $('p').click(function(){
    // //  console.log('you clicked on p');
    // //  $('p').hide();
    // //  $(this).hide();
    // // $('#id').hide();
    // // $('.class').hide();


    //demoing the on method

    $('p').on({
        click: function () {
            console.log('Thanks for clicking', this);
        },
        mouseleave: function () {
            console.log('mouseleft')
        }
    })

});  //do this when click on p


//2. id selector - This is a example of id selector
$('#second').click();

//3. class selector -  This is a example of class selector
$('.odd').click();





//there are three main types of selectors in jQuery
//element selector
//id selector
//class selector

//others selectors
// $('*').click() //clicks on all elements
// $('p.odd').click() //clicks on all elements
// $('p.first').click() //clicks on all elements
// $('*').click() //clicks on all elements

// Events in jQuery 

//  Mouse events = click, doubleClick, mouseLeave
//  KeyBoard = keypress, keydown, MediaKeyStatusMap
//  form evnets = submit, change, focus 
// blurdocument/window events = load, scroll, unlaod

// $('#wikipedia').hide();
// $('#wikipedia').hide(1000, function(){
//     console.log('Hide Succesfully Done')
// });

// $('#wikipedia').show(1000, function(){
//     console.log('Display Succesfully Done')
// });

// $('#wikipedia').show();
// $('#but').hide(3000, function(){
//     $('#wikipedia').toggle(1000);
// });

// $('#but').click(function () {
//     $('#wikipedia').fadeOut(1000);
// });

// $('#but').click(function () {
//     $('#wikipedia').fadeIn(1000);
// });

// $('#but').click(function(){
//     $('#wikipedia').fadeToggle(1000);
// });

// $('#but').click(function(){
//     $('#wikipedia').fadeTo(1000);
// });


//arguments taken by it 1st speed then time.#SLIDE METHODS - speed & callback method is optional
// $('#wikipedia').slideUp(1000)
// $('#wikipedia').slideDown(1000)
// $('#wikipedia').slideToggle(1000)

// $('#but').click(1000,function(){
//     $('#wikipedia').slideUp(1000);
//     console.log('done');
// })


//#Animate function in jQuery
// $('#wikipedia').animate({
//     opacity:0.3,
//     height: '150px',
//     width: '350px'
// }, 2000);  // slow or fast

// $('#wikipedia').animate({opacity: 0.3}, 1000);
// $('#wikipedia').animate({opacity: 0.9}, 12000);
// $('#wikipedia').animate({width: '350px'}, 12000);

// $('#but').click(function(){
//     $('#wikipedia').stop();
// })

// $('body').html('Learn jQuery');

$('#ta').val();
$('#ta').html('Clash Royale is a free-to-play real-time strategy video game developed and published by Supercell. The game combines elements from collectible card games, tower defense, and multiplayer online battle arena. The game was released globally on March 2, 2016. Clash Royale reached $1 billion in revenue in less than a year on the market. In three years, Clash Royale made $2.5 billion in revenue according to market intelligence company Sensor Tower. It is the first spinoff of Clash of Clans. Clash Royale is a tower rush video game which puts players in games featuring two or four players (1v1 or 2v2) in which the objective is to destroy the most opposing towers, with the destruction of the "Kings Tower" being an instantaneous win. After three minutes, if both of the players/teams have an equal number of crowns or none at all the match continues into a 2-minute overtime period and the player who destroys an opposing tower wins instantaneously. If no towers are destroyed during overtime, there is a tiebreaker, where all towers rapidly lose health, and the tower with the least health is destroyed. If two towers have the same health, there is a draw.');

$('#inp').val('Setting it to clashRoyal');
// $('#ta').empty();
// $('#wikipedia').remove();

// $('#wikipedia').addClass('myclass');
// $('#wikipedia').removeClass('myclass');

//ADDING CSS

$('#wikipedia').css('background-color', 'lightgrey');
$('#wikipedia').css('background-color');

//AJAX = Asynchronous JavaScript And XML 
$.get('https://code.jquery.com/jquery-3.6.1.js');
$.get('https://code.jquery.com/jquery-3.6.1.js', function (data, status) { alert(data); })
$.get('https://code.jquery.com/jquery-3.6.1.js', function (data, status) { alert(status); })
$.post('https://code.jquery.com/jquery-3.6.1.js', { name: 'Wiz', Course: 'Webdevelopment' }, function (data, status) { alert(status) })