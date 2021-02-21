const frontformatter = require('frontformatter');

const addProperties = {
  toc: true,
  layout: "single",
  related: true,
};

frontformatter('src', addProperties, ['meta', 'author','permalink'], []);

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
