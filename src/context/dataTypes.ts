export interface Bookmark {
    id: string,
    name: string,
}

export interface Quote {
    _id: string,
    author: string
    content: string,
    tags: string[],
    authorSlug: string,
    length: number,
    image: string,
}

export interface SavedQuote {
    id: string,
    bookmarkId: string,
    quoteId: string
}

export interface CurrentQuote {
    savedQuote?: SavedQuote,
    quote: Quote
}