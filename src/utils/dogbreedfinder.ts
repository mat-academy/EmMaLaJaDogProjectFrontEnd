export function dogbreedfinder(url: string): string {
  const urlArray = url.split("/");
  let dogBreed = urlArray[4];
  if (dogBreed) {
    dogBreed = dogBreed.toUpperCase();
  }
  return dogBreed;
}
