# alon:ejson-moment
[![Build Status](https://travis-ci.org/MasterAM/meteor-esjon-moment.svg?branch=master)](https://travis-ci.org/MasterAM/meteor-esjon-moment)

A Meteor package that adds a Moment.js objects as custom EJSON type.

This allows Moment objects to be transmitted over DDP, which allows you to:

- publish Moment instances of if you pass them to publish handlers.
- use Moment instances in the return values or arguments to methods.
- store Moment instances client-side in Minimongo.
- allowing your type in reactive variables.

## Installation

```sh
$ meteor add alon:ejson-moment
```

## Table of Contents

<!-- TOC depth:6 withLinks:1 updateOnSave:1 orderedList:1 -->

1. [alon:ejson-moment](#alonejson-moment)
	1. [Installation](#installation)
	2. [Table of Contents](#table-of-contents)
	3. [Examples](#examples)
		1. [method call](#method-call)
<!-- /TOC -->

## Examples

```js
var momentInstance = moment();
```
### method call

Server:
```js
Meteor.methods({
  getMoment: function (m) {
    var ret = moment();
    var Moment = ret.constructor;
    var isMoment = m instanceof Moment;

    console.log('called getMoment. The argument is a Moment? %b.', isMoment);
    return ret;
  }
});
```

Client:
```js
Meteor.call('getMoment', moment(), function (err, result) {
  console.log(result);
});
```
