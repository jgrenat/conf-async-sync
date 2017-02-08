import {findUsers} from './github-api.js';
import Mustache from 'mustache';


const usersTemplate = document.getElementById('tpl-users').innerText;
Mustache.parse(usersTemplate);
const renderTemplate = (className, template, view) => {
  document.getElementsByClassName(className)[0].innerHTML = Mustache.render(template, view);
};



const debounce = 500;
const minLength = 2;

let previousValue;
let deferTimer;

function searchAndDisplayUsers(searchString) {
  findUsers(searchString).then(users => {
    if(previousValue !== searchString) {
      return;
    }
    renderTemplate('js-users', usersTemplate, {users});
    console.log(users);
  });
}

document.querySelector('.js-search').addEventListener('input', event => {
  const value = event.target.value;

  clearTimeout(deferTimer);
  deferTimer = setTimeout(() => {
    if (value && value.length >= minLength && value != previousValue) {
      searchAndDisplayUsers(value);
      previousValue = value;
    }
  }, debounce);
});
