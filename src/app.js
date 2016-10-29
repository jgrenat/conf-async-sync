import './style.css';
import {after, sample} from 'lodash';
import * as betaseriesApi from './betaseries-api.js';
import Mustache from 'mustache';

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
  let friendsInfos = [];
  const renderFriends = () => {
    renderTemplate('js-friends-container', templates.friends, { friends: friendsInfos });
  };
  const done = after(friends.length, renderFriends);
  friends.forEach(f => betaseriesApi.getUserInfos(token, f.id, (err, friend) => {
    if(err) {
      console.error(err);
    } else {
      friendsInfos.push(friend);
    }
    done();
  }));
};

betaseriesApi.authenticateUser((err, userData) => {
  if (err) {
    console.error(err);
    return;
  }
  betaseriesApi.getUserInfos(userData.token, userData.user.id, (err, userInfos) => {
    if (err) {
      console.error(err);
      return;
    }
    const randomShow = sample(userInfos.shows);
    renderTemplate('js-user', templates.user, userInfos);
    renderTemplate('js-show', templates.show, randomShow);
    betaseriesApi.getShowCharacters(randomShow, (err, characters) => {
      if (err) {
        console.error(err);
      } else {
        displayShowCharacters(characters);
      }
    });
    betaseriesApi.getUserFriends(userData.token, (err, friends) => {
      if (err) {
        console.error(err);
      } else {
        displayFriends(userData.token, friends);
      }
    });
  });
});
