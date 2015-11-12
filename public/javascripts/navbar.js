
var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

var states = ['NodeJS', 'ExpressJS', 'HTML/CSS', 'Java', 'Ruby',
  'Rails', 'C#', 'C++', 'JavaScript', 'AngularJS', 'Python',
  'C'
];

$('.typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'states',
  source: substringMatcher(states)
});



$(document).ready(function() {
  var myjson = [
    {
      text: "Languages",
      children:
            [{"id":"Ruby","text":"Ruby"},{"id":"JavaScript","text":"JavaScript"},
            {"id":"Regex","text":"Regex"},{"id":"Java","text":"Java"},{"id":"Python","text":"Python"},
            {"id":"Groovy","text":"Groovy"},{"id":"Grails","text":"Grails"},{"id":"Rails","text":"Rails"},
            {"id":"jQuery","text":"jQuery"},{"id":"AngularJS","text":"AngularJS"},{"id":"HTML","text":"HTML"},
            {"id":"Android","text":"Android"},{"id":"iOS","text":"iOS"},{"id":"SQL","text":"SQL"},
            {"id":"Hadoop","text":"Hadoop"},{"id":"CSS","text":"CSS"},{"id":"C#","text":"C#"},
            {"id":"C++","text":"C++"},{"id":"J2EE","text":"J2EE"},{"id":"BackboneJS","text":"BackboneJS"},
            {"id":"PhoneGap","text":"PhoneGap"},{"id":"PHP","text":"PHP"},{"id":"CLI","text":"CLI"},
            {"id":"Git","text":"Git"},{"id":"Games","text":"Games"},{"id":"HTML/CSS","text":"HTML/CSS"},
            {"id":"Database","text":"Database"},{"id":"Swift","text":"Swift"},{"id":"R","text":"R"},
            {"id":"Linux","text":"Linux"},{"id":"Shell","text":"Shell"},{"id":"Bash","text":"Bash"},
            {"id":"Jekyl","text":"Jekyl"},{"id":"Design","text":"Design"},{"id":"Business","text":"Business"},
            {"id":"Dev Tools","text":"Dev Tools"},{"id":"NodeJS","text":"NodeJS"}]
    },
    {
      text: "Sites",
      children: [{"id":"Ruby Monk","text":"Ruby Monk"},{"id":"JavaScript.com","text":"JavaScript.com"},
      {"id":"TryRegex","text":"TryRegex"},{"id":"Coding Bat","text":"Coding Bat"},
      {"id":"JPassion","text":"JPassion"},{"id":"Programmr","text":"Programmr"},
      {"id":"Code Pupil","text":"Code Pupil"},{"id":"Codecademy","text":"Codecademy"},
      {"id":"Code Avengers","text":"Code Avengers"},{"id":"Try Ruby","text":"Try Ruby"},
      {"id":"Crunchy","text":"Crunchy"},{"id":"edX","text":"edX"},{"id":"Code School","text":"Code School"},
      {"id":"Udacity","text":"Udacity"},{"id":"Team Treehouse","text":"Team Treehouse"}]
    }];
  /*$.getJSON("/sites/language_list.json", function(json){
           myjson = json;
      });
    console.log("myjson: " + myjson);
*/
  $(".navselect").select2({
    data: myjson,
    placeholder: "Select Language/Site"
  });




  $(".navselect").change(function(){
    $("#search_input").val($(this).val());
  });

});
