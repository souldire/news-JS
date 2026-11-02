export type Status = 'ok' | 'error';

export interface Source {
    id: string | null;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface Article {
    source: Pick<Source, 'id' | 'name'>;
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

export interface SourcesResponse {
    status: Status;
    sources: Source[];
}

export interface ArticlesResponse {
    status: Status;
    totalResults: number;
    articles: Article[];
}

export type Callback<T> = (data: T) => void;
