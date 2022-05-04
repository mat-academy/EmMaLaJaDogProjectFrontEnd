export function dogbreedfinder(url: string): string {
    const urlArray = url.split("/");
    const dogBreed = urlArray[4];
    return dogBreed      
  }
  