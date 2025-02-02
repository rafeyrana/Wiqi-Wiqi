export interface Track{
    _id: string,
    title: string,
    dj: string,
    collection: string | null,
    imageUrl: string,
    audioUrl: string,
    genre: string[],
    duration: number,
    plays: number,
    downloads: number,
    createdAt: Date;
}

export interface Collection{
    _id: string,
    title: string,
    dj: string,
    imageUrl: string,
    tracks: Track[],
    description: string,
    releaseYear: Date;
    createdAt: Date;
}