import './style.css';
import {after, sample} from 'lodash';
import * as betaseriesApi from './betaseries-api.js';
import Mustache from 'mustache';
import co from 'co';

const templates = {
  user: document.getElementById('tpl-user').innerText,
  show: document.getElementById('tpl-show').innerText,
  characters: document.getElementById('tpl-characters').innerText,
  friends: document.getElementById('tpl-friends').innerText
};
Mustache.parse(templates.user);
Mustache.parse(templates.show);
Mustache.parse(templates.characters);
Mustache.parse(templates.friends);

const renderTemplate = (className, template, view) => {
  document.getElementsByClassName(className)[0].innerHTML += Mustache.render(template, view);
};


const displayShowCharacters = characters => {
  const someCharacters = characters.filter(c => !!c.picture).splice(0, 6);
  renderTemplate('js-characters-container', templates.characters, { characters: someCharacters });
};










const displayFriends = (token, friends) => {
  const renderFriends = friends => {
    renderTemplate('js-friends-container', templates.friends, { friends });
  };
  const promises = friends.map(f => betaseriesApi.getUserInfos(token, f.id));
  return Promise.all(promises)
    .then(friends => renderFriends(friends));
};













(async function() {
  const userData = await betaseriesApi.authenticateUser();
  const userInfos = await betaseriesApi.getUserInfos(userData.token, userData.user.id);
  const randomShow = sample(userInfos.shows);
  renderTemplate('js-user', templates.user, userInfos);
  renderTemplate('js-show', templates.show, randomShow);
  await Promise.all([
    betaseriesApi.getShowCharacters(randomShow)
      .then(characters => displayShowCharacters(characters)),
    betaseriesApi.getUserFriends(userData.token)
      .then(friends => displayFriends(userData.token, friends))
  ]);
})()
  .catch(err => console.error(err));
