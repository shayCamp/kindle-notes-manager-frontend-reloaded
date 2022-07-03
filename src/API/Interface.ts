export interface highlight {
    deleted: boolean;
    Text: string;
    Page?: number;
    LocationStart?: number;
    LocationEnd?: number;
    LocationStartX?: number;
    LocationEndX?: number;
    Date: string;
    notes: string;
    starred: boolean;
}

export interface randomHighlight {
    randomHighlight: {
        author: string;
        bookID: string;
        title: string;
        highlight: highlight;
    };
}

export interface dbBook extends Document {
    userID: string;
    cover_image: string;
    isbn: string;
    author: string;
    title: string;
    genre: string;
    rating: number;
    summary: string;
    deleted: boolean;
    upload_date: string;
    highlights: highlight[];
}