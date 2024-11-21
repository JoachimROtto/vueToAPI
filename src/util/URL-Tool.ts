import { store } from '@/stores';

export async function getURL(url: string) {
  fetch('http://localhost:8080/shorten', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      text: url.trim(),
    }),
    mode: 'cors',
  }).then((response) => {
    if (response.ok) {
      response.text().then((response) => {
        store.commit('setURLToken', response);
      });
    } else {
      alert('Fehler in der URL! (http?)');
    }
  });
}
