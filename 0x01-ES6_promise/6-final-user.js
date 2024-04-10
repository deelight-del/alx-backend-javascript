import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function (firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      const array = [];
      for (const result of results) {
        array.push({ status: result.status, value: result.status === 'fulfilled' ? result.value : result.reason });
      }
      return array;
    });
}
