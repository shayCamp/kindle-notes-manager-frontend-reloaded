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
export interface AllHighlights {
    allHighlights: [
        {
            author: string;
            highlight: highlight;
            title: string;
        },
    ];
}
export interface singleHighlight {
    author: string;
    highlight: highlight;
    title: string;
}

export interface randomHighlight {
    randomHighlight: {
        author: string;
        bookID: string;
        title: string;
        highlight: highlight;
    };
}

export interface dbBook {
    length: number;
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
    _id: string;
}

export interface users {
    username: string;
    userID: string;
}

export interface userInfo {
    book_count: number;
    profile_picture: string;
    following: users[];
    bookRecomDate: string;
    username: string;
    registration_date: string;
    dark_mode: boolean;
    column_count: number;
    __v: number;
}
