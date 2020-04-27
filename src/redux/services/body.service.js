import { api } from '../../configs';

export const bodyService = {
  generate,
  calculateDays,
};

function generate(data) {
  return new Promise((resolve, reject) => {        
    api.post('/generate/', data).then(response => {
      if (!response.data.matrix) {
        const error = (response.data && response.data.error) || response.statusText;
        reject(error);
      } else {
        resolve(response.data);
      }
    })
    .catch(err => {
      reject(err);
    });
  });
}

function calculateDays(data) {
  return new Promise((resolve, reject) => {        
    api.post('/forecast/', data).then(response => {
      if (!response.data.matrix) {
        const error = (response.data && response.data.error) || response.statusText;
        reject(error);
      } else {
        resolve(response.data);
      }
    })
    .catch(err => {
      reject(err);
    });
  });
}
