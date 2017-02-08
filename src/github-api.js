import nanoajax from 'nanoajax';
import {github as config} from './config.json';

export function findUsers(searchString) {
  return new Promise((resolve, reject) => {
    nanoajax.ajax({
      url: `https://api.github.com/search/users?q=${searchString}`,
      headers: {
        Authorization: `Basic ${config.basicHeader}`,
        Accept: 'application/json'
      },
      method: 'GET',
      cors: true
    }, (status, data) => {
      let parsedData = JSON.parse(data);
      if (status === 200) {
        resolve(parsedData.items);
      } else {
        reject(parsedData);
      }
    });
  });
}
