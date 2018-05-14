const mocks = {
  'auth': { 
    'POST': { 
      token: 'this-is-a-fake-token'
    } 
  }
}

const apiCall = ({ url, method }) => new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      resolve(mocks[url][method || 'GET']);
    } catch (err) {
      reject(new Error(err));
    }
  }, 1000);
});

export default apiCall;