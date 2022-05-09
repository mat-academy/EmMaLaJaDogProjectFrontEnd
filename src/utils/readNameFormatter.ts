// Format dog names to correct format without impacting the database or API fetches ( .toUpperCase cannot be applied to a null value )
export function readNameFormatter(name: string): string {
  let read_name = "";
  if (name.includes("-")) {
    const originalArr: string[] = name.split("-");
    const firstWord = originalArr[1] === undefined ? "" : originalArr[1];
    const original_read_name: string = firstWord + " " + originalArr[0];
    read_name = original_read_name.toUpperCase();
  } else {
    read_name = name.toUpperCase();
  }
  return read_name;
}
