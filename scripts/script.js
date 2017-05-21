$(onReady);

var objective = [];
var output = '';
var j = 0;
var effect = document.createElement('audio');
effect.autoplay = false;


function onReady(){
console.log('js loaded');
$(".button").click(function(){
    //starteffect
    effect.src = effectsArray[j];
    soundEffect();
    j++;
    if(j > effectsArray.length-1){
      j=0;
    }
  //end effect
    var toAdd = $('input[name=checkListItem]').val();
    console.log(toAdd);
    if( toAdd === '' || toAdd === undefined ){
    }
    else{
        objective = (toAdd.split(' '));
        console.log(objective);
        //forEach??
        for(var i in objective) {
          result = checkWord(objective[i]);
          console.log(result);
          output += result + ' ';
        }
        addAnswer(output);
        output = '';
    }
    var color = '#'+Math.floor(Math.random()*16777215).toString(16);
    console.log(color);
    $('.button').css('background-color', color);
  });
   // end of click
  $('#outputDiv').on('click', 'p', deleteMessage);
} // end doc ready

var vowelsArray = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
//look for vowels in string from Array
function checkWord( word ){
  // an array to hold positions for the vowels
  var positions = [];
  // loop through word and give positions of each vowel
  for (var i = 0; i < vowelsArray.length; i++) {
    positions[i] = word.indexOf( vowelsArray[i] );
  } //end for
  // -1 if not found
  console.log( positions );
  // find the lowest that is above -1
  var lowest = word.length;
  for (var i = 0; i < positions.length; i++) {
    if( positions[i] != -1 && positions[i] < lowest ){
      lowest = positions[i];
    } // end if
  } // end for
  // split the word at that vowel
  var start = word.slice( 0, lowest );
  var end = word.slice( lowest, word.length );
  var pigLatinizedWord = end + start + 'ay';
  return pigLatinizedWord;
} // end checkWord

//add <p>
function addAnswer(output) {
$('#outputDiv').append('<p class=response>' + output + '</p>');
}

function deleteMessage(){
//remove element from DOM
$(this).remove();
}

function soundEffect(){
    effect.play();
    console.log('j=', j, 'n/ sound effectsArray: ', effectsArray[j]);
    }



// function pigLatin(str){
//   console.log(str);
//
//   if(str.length === 0) {
//       console.log('no input');
//     return noInput;
//   }
//
//   if(str.length == 1) {
//       console.log('one letter string: ', str);
//     return str + 'ay';
//   }
//   // consonant onset tests
//
//   var firstThree = str.substr(0, 3);
//   console.log('cut off first 3: ', firstThree);
//   if(firstThree === 'sph'||firstThree === 'sth'||firstThree === 'thl'||firstThree === 'thw'
//     ||firstThree === 'spl'||firstThree === 'scl'||firstThree === 'spr'||firstThree === 'str'
//     ||firstThree === 'scr'||firstThree === 'squ'||firstThree === 'sch'){
//
//   return str.substr(3, str.length-1) + firstThree + 'ay';
//   }
//
//
//   var firstTwo = str.substr(0, 2);
//   console.log('cut off first 2: ', firstTwo);
//   if(firstTwo === 'pl'||firstTwo === 'bl'||firstTwo === 'cl'||firstTwo === 'gl'||firstTwo === 'pr'
//       ||firstTwo === 'br'||firstTwo === 'tr'||firstTwo === 'dr'||firstTwo === 'cr'||firstTwo === 'gr'
//       ||firstTwo === 'tw'||firstTwo === 'dw'||firstTwo === 'fl'||firstTwo === 'sl'||firstTwo === 'th'
//       ||firstTwo === 'fr'||firstTwo === 'sh'||firstTwo === 'wh'||firstTwo === 'sw'||firstTwo === 'sp'
//       ||firstTwo === 'st'||firstTwo === 'sk'||firstTwo === 'sm'||firstTwo === 'sn'||firstTwo === 'sk'
//       ||firstTwo === 'pl'||firstTwo === 'sm'||firstTwo === 'kn'){
//
//         return str.substr(2, str.length-1) + firstTwo + 'ay';
//   }
//
//
//   var firstLetter = str.substr(0, 1);
//   console.log('cut off: ', firstLetter);
//
//   if(firstLetter === 'a'|| firstLetter === 'e'||firstLetter === 'i'||firstLetter === 'o'||firstLetter === 'u') {
//     console.log('string in if:', str);
//     return str + 'ay';
//   } else {
//     console.log('string in else:', str);
//     return str.substr(1, str.length-1) + firstLetter + 'ay';
//
//   }
// }
