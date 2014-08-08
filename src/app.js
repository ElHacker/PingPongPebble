/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');
var scores = {us: 0, them: 0};

/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');

// Create a Dynamic Window
var wind = new UI.Window();

var usLabel = new UI.Text({
  text: 'US:',
  color: 'white',
  textAlign: 'left',
  position: new Vector2(0, 20),
  size: new Vector2(80, 50),
  font: 'gothic-28-bold'
});

var usScoreLabel = new UI.Text({
  text: '0',
  color: 'white',
  textAlign: 'right',
  position: new Vector2(80, 20),
  size: new Vector2(64, 50),
  font: 'gothic-28-bold'
});

var themLabel = new UI.Text({
  text: 'THEM:',
  color: 'white',
  textAlign: 'left',
  position: new Vector2(0, 75),
  size: new Vector2(80, 50),
  font: 'gothic-28-bold'
});

var themScoreLabel = new UI.Text({
  text: '0',
  color: 'white',
  textAlign: 'right',
  position: new Vector2(80, 75),
  size: new Vector2(64, 50),
  font: 'gothic-28-bold'
});


wind.add(usLabel);
wind.add(usScoreLabel);
wind.add(themLabel);
wind.add(themScoreLabel);

// Score up for US
wind.on('click', 'up', function() {
  scores.us += 1;
  usScoreLabel.text(scores.us);
});

// Score up for them
wind.on('click', 'down', function() {
  scores.them += 1;
  themScoreLabel.text(scores.them);
});

wind.on('click', 'select', function() {
  scores.us = 0;
  scores.them = 0;
  usScoreLabel.text(scores.us);
  themScoreLabel.text(scores.them);
});

wind.show();