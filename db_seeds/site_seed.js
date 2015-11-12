
//var Site = require("models/site").Site;
var mongoose = require('mongoose');

var Site = mongoose.model('Site');
newSite = new Site({
  url: "codepupil.com",
  name: "Code Pupil",
  languages: ["HTML","CSS"],
  paid: false,
  plans: [{plan_type: "Free", price: 0}],
  virtual: true,
  rating: 2,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: ""
});

newSite.save(function (err) {
  if (err) console.log ('Error on save!')
});

newSite = new Site({
  url: "codecademy.com",
  name: "Codecademy",
  languages: ["HTML","CSS","JavaScript","jQuery","PHP","Python","Ruby","Rails","AngularJS","CLI","SQL","Java","Git"],
  paid: false,
  plans: [{plan_type: "Free", price: 0}],
  virtual: true,
  rating: 4,
  long_description: "",
  short_description: "",
  thumbnail_path: "/images/table_logos/codecademy_logo.png",
  large_banner_path: ""
});

newSite.save(function (err) {
  if (err) console.log ('Error on save!')
});
newSite = new Site({
  url: "codeavengers.com",
  name: "Code Avengers",
  languages: ["HTML","CSS","Android","JavaScript","Games"],
  paid: true,
  plans: [{plan_type: "HTML/CSS Level 1", price: 19},{plan_type: "HTML/CSS Level 2", price: 29},{plan_type: "HTML/CSS Level 3", price: 29},{plan_type: "JavaScript Level 1", price: 25},{plan_type: "JavaScript Level 2", price: 39},{plan_type: "JavaScript Level 3", price: 39},{plan_type: "Python Level 1", price: 0},{plan_type: "Python Level 1", price: 29}],
  virtual: true,
  rating: 2,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: ""
});

newSite.save(function (err) {
  if (err) console.log ('Error on save!')
});



newSite = new Site({
  url: "teamtreehouse.com",
  name: "Team Treehouse",
  languages: ["HTML",
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
    "iOS"],
  paid: true,
  plans: [{plan_type: "Student", price: 9},{plan_type:"Basic", price: 25},{plan_type:"Pro", price: 50}],
  virtual: true,
  rating: 2,
  long_description: "",
  short_description: "",
  thumbnail_path: "/images/table_logos/treehouse_logo.png",
  large_banner_path: ""
});

newSite.save(function (err) {
  if (err) console.log ('Error on save!')
});


newSite = new Site({
  url: "rubymonk.com",
  name: "Ruby Monk",
  languages: ["Ruby"],
  paid: false,
  plans: [{plan_type: "Free", price: 0}],
  virtual: true,
  rating: 3,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: ""
});

newSite.save(function (err) {
  if (err) console.log ('Error on save!')
});



newSite = new Site({
  url: "tryruby.org",
  name: "Try Ruby",
  languages: ["Ruby"],
  paid: false,
  plans: [{plan_type: "Free", price: 0}],
  virtual: true,
  rating: 3,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: ""
});

newSite.save(function (err) {
  if (err) console.log ('Error on save!')
});


newSite = new Site({
  url: "https://code.google.com/p/crunchy/",
  name: "Crunchy",
  languages: ["Python"],
  paid: false,
  plans: [{plan_type: "Free", price: 0}],
  virtual: true,
  rating: 3,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: ""
});

newSite.save(function (err) {
  if (err) console.log ('Error on save!')
});


newSite = new Site({
  url: "https://www.javascript.com/try",
  name: "JavaScript.com",
  languages: ["JavaScript"],
  paid: false,
  plans: [{plan_type: "Free", price: 0}],
  virtual: true,
  rating: 3,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: ""
});

newSite.save(function (err) {
  if (err) console.log ('Error on save!')
});


newSite = new Site({
  url: "http://tryregex.com/",
  name: "TryRegex",
  languages: ["Regex"],
  paid: false,
  plans: [{plan_type: "Free", price: 0}],
  virtual: true,
  rating: 3,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: ""
});

newSite.save(function (err) {
  if (err) console.log ('Error on save!')
});

newSite = new Site({
  url: "http://codingbat.com/",
  name: "Coding Bat",
  languages: ["Java","Python"],
  paid: false,
  plans: [{plan_type: "Free", price: 0}],
  virtual: true,
  rating: 3,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: ""
});

newSite.save(function (err) {
  if (err) console.log ('Error on save!')
});

newSite = new Site({
  url: "http://www.jpassion.com/portal/",
  name: "JPassion",
  languages: ["Java","Groovy","Grails","Ruby","Rails","JavaScript","jQuery","AngularJS","HTML","Android","iOS","SQL","Hadoop"],
  paid: false,
  plans: [{plan_type: "Free", price: 0}],
  virtual: true,
  rating: 2,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: ""
});

newSite.save(function (err) {
  if (err) console.log ('Error on save!')
});
newSite = new Site({
  url: "http://www.programmr.com/",
  name: "Programmr",
  languages: ["Java",
    "Ruby",
    "JavaScript",
    "jQuery",
    "AngularJS",
    "HTML",
    "CSS",
    "Android",
    "iOS",
    "SQL",
    "C#",
    "C++",
    "J2EE",
    "BackboneJS",
    "PhoneGap",
    "Python"],
  paid: false,
  plans: [{plan_type: "Free", price: 0}],
  virtual: true,
  rating: 4,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: ""
});

newSite.save(function (err) {
  if (err) console.log ('Error on save!')
});
newSite = new Site({
  url: "https://www.edx.org/",
  name: "edX",
  languages: ["Java","Ruby","JavaScript","jQuery","AngularJS","HTML","CSS","Android","iOS","SQL","C#","C++"],
  paid: false,
  plans: [{plan_type: "Free", price: 0}],
  virtual: true,
  rating: 4,
  long_description: "",
  short_description: "",
  thumbnail_path: "",
  large_banner_path: ""
});

newSite.save(function (err) {
  if (err) console.log ('Error on save!')
});

newSite = new Site({
  url: "codeschool.com",
  name: "Code School",
  languages: ["Ruby","JavaScript","HTML/CSS","iOS","Git","Database"],
  paid: true,
  plans: [{plan_type: "Monthly", price: 29},{plan_type:"Yearly", price: 290}],
  virtual: true,
  rating: 5,
  long_description: "",
  short_description: "",
  thumbnail_path: "/images/table_logos/codeschool_logo.png",
  large_banner_path: ""
});

newSite.save(function (err) {
  if (err) console.log ('Error on save!')
});

newSite = new Site({
  url: "udacity.com",
  name: "Udacity",
  languages: ["Swift","JavaScript","CSS","HTML","Hadoop","R","Python","SQL","Java","Linux","Shell","Bash"],
  paid: false,
  plans: [{plan_type: "Free", price: 0},{plan_type:"Nanodegree", price: 200}],
  virtual: true,
  rating: 5,
  long_description: "",
  short_description: "",
  thumbnail_path: "/images/table_logos/udacity_logo.png",
  large_banner_path: ""
});

newSite.save(function (err) {
  if (err) console.log ('Error on save!')
});
