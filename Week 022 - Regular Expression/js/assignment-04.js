// Lessons from 134>>>146 Assignments
// Assignment 4
let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// Explain The Pattern
/*
// https?:
https?: => Match all http: or https: protocol

// \/\/
\/\/ => Match // backslash(\) for escaping

// (?:[-\w]+\.)?
(?:)  => non-capturing group 
[-\w] => match (Alphanumeric Character & underscore) => (\w), hyphen (-)
  +   => means we can find one or more character in that range before dot(.)
(?:[-\w]+\.)? => match (Alphanumeric Character & underscore) => (\w), and hyphen(-) that end with dot(.) one or zero time

// ([-\w]+)\.
([-\w]+)\. => match (Alphanumeric Character & underscore) => (\w), and hyphen(-)  and the dot(.)

// (?:\.\w+)?
(?:\.\w+)? => non-capturing group match (Alphanumeric Character & underscore) => (\w), and hyphen(-) that begin with dot(.) one or zero time

// \/?.*
\/? => match (/) character one or zero time
.* => match any character
*/