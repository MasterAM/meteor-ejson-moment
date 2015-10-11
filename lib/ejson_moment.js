'use strict';

var Moment = moment.fn.constructor;

_.extend(Moment.prototype, {

  /**
   * Compare this instance to another instance
   * @param  {object} other the object to compare agains
   * @return {boolean}       whether or not the instances are equal
   */
  equals: function (other) {
    console.log('equals');
    if (!(other instanceof Moment))
      return false;

    return this.toJSON() == other.toJSON();
  },

  /**
   * Return the name of this type which should be the same as the one
   * padded to EJSON.addType
   * @return {string} the type name
   */
  typeName: function () {
    return "Moment";
  },

  /**
   * Serialize the instance into a JSON-compatible value.
   * @return {Object} the JSON-compatible representation of the moment object.
   */
  toJSONValue: function () {
    return {
      date: this._d
    };
  }
});

// Tell EJSON about our new custom type
EJSON.addType("Moment", function fromJSONValue(value) {
  // the parameter - value - will look like whatever we
  // returned from toJSONValue from above.
  return moment(value.date);
});
