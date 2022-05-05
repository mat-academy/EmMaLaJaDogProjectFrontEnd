/*
breed_name = breed(-sub_breed)
image_url = breed(/sub_breed)
*/

export default function nameToImageURL(breed_name: string): string {
    const breed_name_lowerCase = breed_name.toLowerCase();
    return breed_name_lowerCase.replace("-", "/")
}