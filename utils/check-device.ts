export function CheckDevice() {
  const regex =
    /Mobi|Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}
