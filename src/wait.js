export function wait(time) {
  return new Promise(function (resolve, reject) {
    if (time === 2000) {
      setTimeout(function () {
        reject();
      }, time);
      return;
    }
    setTimeout(function () {
      resolve();
    }, time);
  });
}
