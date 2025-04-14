export type NewsItem = {
    id: number,
    slug: string,
    title: string,
    image: string,
    date: string,
    content: string
}

export type PageParams = {
    params: Promise<{
        slug: string;
    }>
};

export interface CreateNewsAction {
    action: (prevState: { errors?: string[] }, formData: FormData) => Promise<{ errors?: string[] }>;
    errors?: string[];
}