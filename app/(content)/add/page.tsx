import NewsForm from "@/components/NewsForm/news-form";
import { createNews } from "@/lib/postActions";

export default function AddNewsPage() {

    return (
        <NewsForm action={createNews} />
    )
}