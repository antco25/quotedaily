export interface Quote {
    _id: string,
    author: string
    content: string,
    tags: string[],
    authorSlug: string,
    length: number,
    image: string,
}