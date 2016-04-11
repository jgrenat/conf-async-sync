import nanoajax from 'nanoajax';

import {betaseries as config} from 'app/config.json!';


const apiEndpoint = 'http://api.betaseries.com';
const apiVersion = 2.4;
const headers = {
  version: 'X-BetaSeries-Version',
  key: 'X-BetaSeries-Key',
  token: 'X-BetaSeries-Token'
};


export function authenticateUser() {
  return new Promise((resolve, reject) => {
    nanoajax.ajax({
      url: `${apiEndpoint}/members/access_token?key=${config.key}&version=${apiVersion}`,
      headers: {
        Accept: 'application/json'
      },
      method: 'POST',
      body: `client_id=${config.key}&client_secret=${config.secret}&code=${config.userCode}&redirect_uri=http://localhost:8080`,
      cors: true
    }, (status, data) => {
      let parsedData = JSON.parse(data);
      if (status === 200) {
        resolve(parsedData);
      } else {
        reject(parsedData.errors);
      }
    });
  })
};

export function getUserInfos(token, userId) {
  return new Promise((resolve, reject) => {
    nanoajax.ajax({
      url: `${apiEndpoint}/members/infos?key=${config.key}&version=${apiVersion}&token=${token}&id=${userId}`,
      headers: {
        Accept: 'application/json'
      },
      method: 'GET',
    }, (status, data) => {
      let parsedData = JSON.parse(data);
      if (status === 200) {
        resolve(parsedData.member);
      } else {
        reject(parsedData.errors);
      }
    });
  });
};

export function getShowCharacters(show) {
  return new Promise((resolve, reject) => {
    nanoajax.ajax({
      url: `${apiEndpoint}/shows/characters?key=${config.key}&version=${apiVersion}&id=${show.id}`,
      method: 'GET',
    }, (status, data) => {
      let parsedData = JSON.parse(data);
      if (status === 200) {
        resolve(parsedData.characters);
      } else {
        reject(parsedData.errors);
      }
    });
  });
};

export function getUserFriends(token) {
  return new Promise((resolve, reject) => {
    nanoajax.ajax({
      url: `${apiEndpoint}/friends/list?key=${config.key}&version=${apiVersion}&token=${token}`,
      headers: {
        Accept: 'application/json'
      },
      method: 'GET',
    }, (status, data) => {
      let parsedData = JSON.parse(data);
      if (status === 200) {
        resolve(parsedData.users);
      } else {
        reject(parsedData.errors);
      }
    });
  });
};
