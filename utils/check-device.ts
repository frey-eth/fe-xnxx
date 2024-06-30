export function checkDevice() {
  if (typeof navigator !== "undefined") {
    const regex =
      /Mobi|Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  }
  return false; // Default to false if navigator is not defined
}
