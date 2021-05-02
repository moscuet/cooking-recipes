import fetch from 'isomorphic-fetch';

export function ceateJsonPost(data) {
    return fetch('Your Rest url', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response;
           // window.location.reload()
          } else {
           console.log('Somthing happened wrong');
          }
    }).catch(err => err);
    }
