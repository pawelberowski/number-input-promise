export function getMillisecondsToWait(value) {
  if (value < 0) {
    return 2000;
  }
  if (value % 2 === 0) {
    return 10000;
  }
  return 5000;
}