// import { entry.wordCount } from './journal.js'
import { Entry } from './journal.js';
import './styles.css';


$(document).ready(function() {

  $("form#input").submit(function(event) {
    event.preventDefault();

    var userName = $('#name').val();
    var userJournal = $('#journal-entry').val();

    let entry = new Entry(userName, userJournal);

    var wordCountOutput = entry.wordCount();
    $('.counter').show();
    $('#author').text(entry.author);//(userName) would work in this arguement too.
    $('#word-count').text(wordCountOutput);
    $('#first-eight').text(entry.teaser());
    $('#vowels').text(entry.letterCounter()[0]);
    $('#consonants').text(entry.letterCounter()[1]); //sleek way to call back multiple variables within a single prototype.
    $("#first-eight").click(function() {
      $('#users-entry').text(userJournal);
      $(".full-entry").show();
    });
  });


});
