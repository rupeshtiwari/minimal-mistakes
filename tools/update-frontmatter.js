const frontformatter = require('frontformatter');

const addProperties = {
 
};

frontformatter('src', addProperties, ['layout', 'author','permalink'], []);

/**
 * 
 * const frontformatter = require('./frontformatter')

const addProperties = {
  add: 'this'
}
const removeProperties = ['remove']

const markdownOptions = {
  resultVersion: 3,
  'first-line-heading': 2,
  'no-empty-links': true
}

frontformatter('src', addProperties, removeProperties, markdownOptions)
 */
