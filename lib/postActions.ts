'use server'
import { redirect } from "next/navigation";
import { storeNews } from "./news";
import { uploadImage } from "./cloudinary";

export async function createNews(prevState: {errors?: string[]}, formData: FormData): Promise<{ errors?: string[] }>  {
    //id, title, slug, image, date, content
    const title = formData.get("title");
    const image = formData.get("image");
    const content = formData.get("content");

    const errors = [];

    if (!title || typeof title === 'string' && title.trim().length === 0) errors.push("Title must be provided");
    if (!content || typeof content === 'string' && content.trim().length === 0) errors.push("Content must be provided");
    if (!image || !(image instanceof File) || image.size === 0) errors.push("Image must be provided");

    if (errors.length > 0) return { errors };

    let imageUrl;

    if (image instanceof File) {
        try {
            imageUrl = await uploadImage(image);
        } catch(e) {
            console.error("cannot store your image, try it again", e);
        }
    }
    storeNews({
        id: Math.floor(Math.random() * Date.now()),
        slug: typeof title === 'string' ? title.replaceAll(" ", "-").toLowerCase() : "",
        title: title as string,
        content: content as string,
        date: new Date(Date.now()).toISOString().split('T')[0],
        image: imageUrl as string,
    });


    redirect("/news");
}