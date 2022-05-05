/*
breed_name = breed(-sub_breed)
image_url = breed(/sub_breed)
*/

export default function nameToImageURL(breed_name: string): string {
    return breed_name.replace("-", "/")
}