export default {
    async send(event, data = {}) {
      /* eslint-disable no-unreachable */
      return fetch(`http://police-cad/${event}`, {
        method: 'post',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
      });
      /* eslint-enable no-unreachable  */
    },
    emulate(type, data = null) {
      window.dispatchEvent(
        new MessageEvent('message', {
          data: {
            type,
            data,
          },
        }),
      );
    },
  };