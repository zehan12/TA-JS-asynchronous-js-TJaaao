## XMLHttpRequest + Promise

- Create a function named `fetch` which can accept one parameter an `url` and returns a promise.
- Use `XMLHttpRequest` to make a network request using the `url` from parameter
- When the data is loaded resolve the promise with the value
- If there is any issue loading data reject the promise with an error message

Add-on:

- Refactor the image search app you created (in previous exercise) to use the function `fetch` you crated above.

```js
function fetch(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = resolve;
        xhr.onerror = reject;
        xhr.send();
    });
}

function fetch(url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}
```