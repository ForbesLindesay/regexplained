var TextBox = require('./text-box');

module.exports = AnyCharacter;

var base_text_attrs = {
    'font-size': 12,
    fill: '#ffffff'
  },
  base_rect_attrs = {
    r: 0,
    fill: '#6b6659',
    stroke: '#6b6659'
  };

function AnyCharacter(paper, structure) {
  TextBox.call(this, paper, 'any character',
    base_text_attrs, base_rect_attrs);
};

AnyCharacter.prototype = Object.create(TextBox.prototype);
AnyCharacter.prototype.constructor = AnyCharacter;