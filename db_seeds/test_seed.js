var Language = require("../models/language").Language;
var Site = require("../models/site").Site;
var mongoose = require('mongoose');
var async = require('async');


var nodejs_lang = new Language({
  _id: 0, url: "https://nodejs.org",
  name: 'NodeJS',
  category: 1,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: "" });
var angularjs_lang = new Language({ _id: 1,
  url: "https://angularjs.org",
  name: 'AngularJS',
  category: 1,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: ""});
var html_lang = new Language({ _id: 2,
  url: "http://www.w3.org/html/",
  name: 'HTML',
  category: 1,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: "" });
var css_lang = new Language({ _id: 3,
  url: "http://www.w3.org/Style/CSS/Overview.en.html",
  name: 'CSS',
  category: 1,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: "" });
var javascript_lang = new Language({ _id: 4,
  url: "https://www.javascript.com/",
  name: 'JavaScript',
  category: 1,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: "" });
var jquery_lang = new Language({ _id: 5,
  url: "https://jquery.com/",
  name: 'jQuery',
  category: 1,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: "" });
var php_lang = new Language({ _id: 6,
  url: "https://php.net",
  name: 'PHP',
  category: 1,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: "" });
var python_lang = new Language({ _id: 7,
  url: "https://python.org",
  name: 'Python',
  category: 2,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: "" });
var ruby_lang = new Language({ _id: 8,
  url: "https://ruby-lang.org",
  name: 'Ruby',
  category: 2,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: "" });
var rails_lang = new Language({ _id: 9,
  url: "https://rubyonrails.org",
  name: 'Rails',
  category: 3,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: "" });
var sql_lang = new Language({ _id: 10,
  url: "https://en.wikipedia.org/wiki/SQL",
  name: 'SQL',
  category: 4,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: "" });
var git_lang = new Language({ _id: 11,
  url: "https://git-scm.com/",
  name: 'Git',
  category: 7,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: "" });
var ios_lang = new Language({ _id: 12,
  url: "https://developer.apple.com/ios",
  name: 'iOS',
  category: 5,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: "" });
var android_lang = new Language({ _id: 13,
  url: "https://developer.android.com",
  name: 'Android',
  category: 5,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: "" });
var winphone_lang = new Language({ _id: 14,
  url: "https://dev.windows.com/en-us/develop",
  name: 'Windows Phone',
  category: 5,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: "" });
var java_lang = new Language({ _id: 15,
  url: "https://java.com/",
  name: 'Java',
  category: 6,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: "" });
var csharp_lang = new Language({ _id: 16,
  url: "https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx",
  name: 'C#',
  category: 6,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: "" });
var cplusplus_lang = new Language({ _id: 17,
  url: "http://www.cplusplus.com/",
  name: 'C++',
  category: 6,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: "" });
var hadoop_lang = new Language({ _id: 18,
  url: "https://hadoop.apache.org/",
  name: 'Hadoop',
  category: 4,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: "" });
var bash_lang = new Language({ _id: 19,
  url: "https://www.gnu.org/software/bash/",
  name: 'Bash',
  category: 7,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: "" });
var expressjs_lang = new Language({ _id: 20,
  url: "http://expressjs.com/",
  name: 'ExpressJS',
  category: 3,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: "" });
var swift_lang = new Language({ _id: 21,
  url: "https://developer.apple.com/swift/",
  name: 'Swift',
  category: 5,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: "" });

var code_pupil_site = new Site({
  _id: 1,
  url: "codepupil.com",
  name: "Code Pupil",
  languages: [css_lang._id, html_lang._id],
  //languages: [html_lang.id, css_lang.id].to,
  //*languages: ["HTML","CSS"],
  paid: false,
  plans: [{plan_type: "Free", price: 0}],
  virtual: true,
  rating: 2,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: ""
});


var codecademy_site = new Site({
  _id: 2,
  url: "codecademy.com",
  name: "Codecademy",
  languages: [html_lang._id,css_lang._id,javascript_lang._id,jquery_lang._id,php_lang._id,python_lang._id,ruby_lang._id,rails_lang._id,angularjs_lang._id,sql_lang._id,java_lang._id,git_lang._id],
  //*languages: ["HTML","CSS","JavaScript","jQuery","PHP","Python","Ruby","Rails","AngularJS","CLI","SQL","Java","Git"],
  paid: false,
  plans: [{plan_type: "Free", price: 0}],
  virtual: true,
  rating: 4,
  long_description: "",
  short_description: "",
  thumbnail_path: "/images/table_logos/codecademy_logo.png",
  large_banner_path: ""
});

var code_avengers_site = new Site({
  _id: 3,
  url: "codeavengers.com",
  name: "Code Avengers",
  languages: [html_lang._id,css_lang._id,android_lang._id,javascript_lang._id],
  //*languages: ["HTML","CSS","Andro_id","JavaScript","Games"],
  paid: true,
  plans: [{plan_type: "HTML/CSS Level 1", price: 19},{plan_type: "HTML/CSS Level 2", price: 29},{plan_type: "HTML/CSS Level 3", price: 29},{plan_type: "JavaScript Level 1", price: 25},{plan_type: "JavaScript Level 2", price: 39},{plan_type: "JavaScript Level 3", price: 39},{plan_type: "Python Level 1", price: 0},{plan_type: "Python Level 1", price: 29}],
  virtual: true,
  rating: 2,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: ""
});


var team_treehouse_site = new Site({
  _id: 4,
  url: "teamtreehouse.com",
  name: "Team Treehouse",
  languages: [html_lang._id,
    css_lang._id,
    javascript_lang._id,
    jquery_lang._id,
    php_lang._id,
    python_lang._id,
    ruby_lang._id,
    rails_lang._id,
    angularjs_lang._id,
    sql_lang._id,
    java_lang._id,
    git_lang._id,
    nodejs_lang._id,
    ios_lang._id],
  /*languages: ["HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "PHP",
    "Python",
    "Ruby",
    "Rails",
    "AngularJS",
    "CLI",
    "SQL",
    "Java",
    "Git",
    "Jekyl",
    "Design",
    "Business",
    "Dev Tools",
    "NodeJS",
    "AngularJS",
    "iOS"],*/
  paid: true,
  plans: [{plan_type: "Student", price: 9},{plan_type:"Basic", price: 25},{plan_type:"Pro", price: 50}],
  virtual: true,
  rating: 2,
  long_description: "",
  short_description: "",
  thumbnail_path: "/images/table_logos/treehouse_logo.png",
  large_banner_path: ""
});


var ruby_monk_site = new Site({
  _id: 5,
    url: "rubymonk.com",
  name: "Ruby Monk",
  languages: [ruby_lang._id],
  //*languages: ["Ruby"],
  paid: false,
  plans: [{plan_type: "Free", price: 0}],
  virtual: true,
  rating: 3,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: ""
});


var try_ruby_site = new Site({
  _id: 6,
  url: "tryruby.org",
  name: "Try Ruby",
  languages: [ruby_lang._id],
  //*languages: ["Ruby"],
  paid: false,
  plans: [{plan_type: "Free", price: 0}],
  virtual: true,
  rating: 3,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: ""
});

var crunchy_site = new Site({
  _id: 7,
  url: "https://code.google.com/p/crunchy/",
  name: "Crunchy",
  languages: [python_lang._id],
  //*languages: ["Python"],
  paid: false,
  plans: [{plan_type: "Free", price: 0}],
  virtual: true,
  rating: 3,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: ""
});

var javascript_site = new Site({
  _id: 8,
  url: "https://www.javascript.com/try",
  name: "JavaScript.com",
  languages: [javascript_lang._id],
  //*languages: ["JavaScript"],
  paid: false,
  plans: [{plan_type: "Free", price: 0}],
  virtual: true,
  rating: 3,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: ""
});


var tryregex_site = new Site({
  _id: 9,
  url: "http://tryregex.com/",
  name: "TryRegex",
  languages: [],
  //*languages: ["Regex"],
  paid: false,
  plans: [{plan_type: "Free", price: 0}],
  virtual: true,
  rating: 3,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: ""
});

var codingbat_site = new Site({
  _id: 10,
  url: "http://codingbat.com/",
  name: "Coding Bat",
  languages: [java_lang._id, python_lang._id],
  //*languages: ["Java","Python"],
  paid: false,
  plans: [{plan_type: "Free", price: 0}],
  virtual: true,
  rating: 3,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: ""
});


var jpassion_site = new Site({
  _id: 11,
  url: "http://www.jpassion.com/portal/",
  name: "JPassion",
  languages: [java_lang._id, ruby_lang._id, rails_lang._id, javascript_lang._id, jquery_lang._id, angularjs_lang._id, html_lang._id, android_lang._id, ios_lang._id, sql_lang._id, hadoop_lang._id],
  //*languages: ["Java","Groovy","Grails","Ruby","Rails","JavaScript","jQuery","AngularJS","HTML","Andro_id","iOS","SQL","Hadoop"],
  paid: false,
  plans: [{plan_type: "Free", price: 0}],
  virtual: true,
  rating: 2,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: ""
});


var programmr_site = new Site({
  _id: 12,
  url: "http://www.programmr.com/",
  name: "Programmr",
  languages:[java_lang._id,
    ruby_lang._id,
    javascript_lang._id,
    jquery_lang._id,
    angularjs_lang._id,
    html_lang._id,
    css_lang._id,
    android_lang._id,
    ios_lang._id,
    sql_lang._id,
    csharp_lang._id,
    cplusplus_lang._id,
    python_lang._id],
  /*languages: ["Java",
    "Ruby",
    "JavaScript",
    "jQuery",
    "AngularJS",
    "HTML",
    "CSS",
    "Andro_id",
    "iOS",
    "SQL",
    "C#",
    "C++",
    "J2EE",
    "BackboneJS",
    "PhoneGap",
    "Python"],*/
  paid: false,
  plans: [{plan_type: "Free", price: 0}],
  virtual: true,
  rating: 4,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: ""
});

var edx_site = new Site({
  _id: 13,
  url: "https://www.edx.org/",
  name: "edX",
  languages: [java_lang._id,ruby_lang._id,javascript_lang._id,jquery_lang._id,angularjs_lang._id,html_lang._id,css_lang._id,android_lang._id,ios_lang._id,sql_lang._id,csharp_lang._id,cplusplus_lang._id],
  //*languages: ["Java","Ruby","JavaScript","jQuery","AngularJS","HTML","CSS","Andro_id","iOS","SQL","C#","C++"],
  paid: false,
  plans: [{plan_type: "Free", price: 0}],
  virtual: true,
  rating: 4,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: ""
});


var codeschool_site = new Site({
  _id: 14,
  url: "codeschool.com",
  name: "Code School",
  languages: [ruby_lang._id, javascript_lang._id, html_lang._id, css_lang._id, ios_lang._id, git_lang._id, sql_lang._id],
//*languages: ["Ruby","JavaScript","HTML/CSS","iOS","Git","Database"],
  paid: true,
  plans: [{plan_type: "Monthly", price: 29},{plan_type:"Yearly", price: 290}],
  virtual: true,
  rating: 5,
  long_description: "",
  short_description: "",
  thumbnail_path: "/images/table_logos/codeschool_logo.png",
  large_banner_path: ""
});

var udacity_site = new Site({
  _id: 15,
  url: "udacity.com",
  name: "Udacity",
  languages: [ios_lang._id, java_lang._id, css_lang._id, html_lang._id, hadoop_lang._id, python_lang._id, sql_lang._id, java_lang._id, bash_lang._id],
//*languages: ["Swift","JavaScript","CSS","HTML","Hadoop","R","Python","SQL","Java","Linux","Shell","Bash"],
  paid: false,
  plans: [{plan_type: "Free", price: 0},{plan_type:"Nanodegree", price: 200}],
  virtual: true,
  rating: 5,
  long_description: "",
  short_description: "",
  thumbnail_path: "/images/table_logos/udacity_logo.png",
  large_banner_path: ""
});

async.series([
  function(callback){
    nodejs_lang.save(),
    angularjs_lang.save(),
    html_lang.save(),
    css_lang.save(),
    javascript_lang.save(),
    jquery_lang.save(),
    php_lang.save(),
    python_lang.save(),
    ruby_lang.save(),
    rails_lang.save(),
    sql_lang.save(),
    git_lang.save(),
    ios_lang.save(),
    android_lang.save(),
    winphone_lang.save(),
    java_lang.save(),
    csharp_lang.save(),
    cplusplus_lang.save(),
    hadoop_lang.save(),
    bash_lang.save(),
    expressjs_lang.save(),
    swift_lang.save(),
    code_pupil_site.save(),
    codecademy_site.save(),
    code_avengers_site.save(),
    team_treehouse_site.save(),
    ruby_monk_site.save(),
    try_ruby_site.save(),
    crunchy_site.save(),
    javascript_site.save(),
    tryregex_site.save(),
    codingbat_site.save(),
    jpassion_site.save(),
    programmr_site.save(),
    edx_site.save(),
    codeschool_site.save(),
    udacity_site.save()
  }

]);
