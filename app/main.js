'use strict'

import _ from 'lodash';
import $ from 'jquery';
import './main.css';
import './main.scss';

function component () {
	var element = document.createElement('div');

	/* lodash is required for the next line to work */
	element.innerHTML = _.join(['Hello','webpack'], ' ');
	element.className = "foo-bar";

	return element;
}

document.body.appendChild(component());

let foo = 'foo bar baz mar';

console.log(foo.includes('mar'));

$('body').css('color', 'red');