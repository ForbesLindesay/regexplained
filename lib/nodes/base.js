module.exports = Base;

function Base() {
  this._contents = [];
  this._stack_order = [];
  this._completes = [];
  this._completed = false;
  this._x = 0;
  this._y = 0;
  this._width = 0;
  this._height = 0;
}

Base.prototype.position = function(x, y) {
  this._x = x;
  this._y = y;
};

Base.prototype.stack = function(relative) {
  var i = 0;

  if (!relative) {
    i = 1;
    relative = this._stack_order[0];
  }

  for (; i < this._stack_order.length; i++) {
    this._stack_order[i].insertAfter(relative);
    relative = this._stack_order[i];
  }

  for (i = 0; i < this._contents.length; i++) {
    this._contents[i].stack(relative);
  }
};

Base.prototype.get_box = function() {
  return {
    x: this._x,
    y: this._y,
    x2: this._x + this._width,
    y2: this._y + this._height,
    width: this._width,
    height: this._height
  };
};

Base.prototype.get_connection_offset = function() {
  return this._height / 2;
};

Base.prototype.complete = function(complete) {
  if (this._completed) {
    complete();
  } else {
    this._completes.push(complete);
  }
};

Base.prototype._mark_complete = function() {
  var i;

  this._completed = true;
  for (i = 0; i < this._completes.length; i++) {
    this._completes[i]();
  }
  this._completes = [];
};