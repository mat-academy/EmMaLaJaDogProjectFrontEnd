// Format dog names to correct format without impacting the database or API fetches ( .toUpperCase cannot be applied to a null value )
export function readNameURLFormatter(url: string): string {
  let read_name = "";
  if (url) {
    const urlArray: string[] = url.split("/");
    const url_name: string = urlArray[4];
    if (url.includes("-")) {
      const originalArr: string[] = url_name.split("-");
      const original_read_name: string = originalArr[1] + " " + originalArr[0];
      read_name = original_read_name.toUpperCase();
    } else {
      read_name = url_name.toUpperCase();
    }
  }
  return read_name;
}

// "greyhound-italian"
// to
// "italian greyhound"
// "Italian Greyhound"

// "greyhound"
// to
// "greyhound"

// "null"
// to
// "null"
