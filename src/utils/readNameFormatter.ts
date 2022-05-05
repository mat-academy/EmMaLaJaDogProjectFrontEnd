// Format dog names to correct format without impacting the database or API fetches ( .toUpperCase cannot be applied to a null value )
export function readNameFormatter(url_name: string): string {
    const originalArr = url_name.split("-");
    const original_read_name = originalArr[1]+" "+originalArr[0];
    const read_name = original_read_name.toUpperCase();
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