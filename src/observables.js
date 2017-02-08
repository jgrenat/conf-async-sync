import {findUsers} from './github-api.js';
import Mustache from 'mustache';
import {Observable} from 'rx';


const usersTemplate = document.getElementById('tpl-users').innerText;
Mustache.parse(usersTemplate);
const renderTemplate = (className, template, view) => {
  document.getElementsByClassName(className)[0].innerHTML = Mustache.render(template, view);
};




const debounce = 500;
const minLength = 2;

Observable.fromEvent(document.querySelector('.js-search'), 'keyup')
  .map(event => event.target.value)
  .distinctUntilChanged()
  .debounce(debounce)
  .filter(value => value && value.length >= minLength)
  .flatMapLatest(value => Observable.fromPromise(findUsers(value)))
  .subscribe(users => renderTemplate('js-users', usersTemplate, {users}));
