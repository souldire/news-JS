import News from './news/news';
import Sources from './sources/sources';
import { ArticlesResponse, SourcesResponse } from '../../types/news-api';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: Partial<ArticlesResponse> | undefined): void {
        const values = data?.articles ? data.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: Partial<SourcesResponse> | undefined): void {
        const values = data?.sources ? data.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
