# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @danross88/lotide`

**Require it:**

`const _ = require('@danross88/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head(array) : returns the initial index from an array.
* tail(array) : returns everyting but the head of the array.
* middle(arr) : returns the middle one or two indexes of an array.
* assertArraysEqual(actual, expected) : asserts true or false based on if two arrays are equal or not.
* assertEqual(actual, expected) : asserts equals.
* eqArrays(a, b) : returns true or false based on if two arrays are equal or not.