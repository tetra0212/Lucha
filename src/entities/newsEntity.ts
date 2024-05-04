export interface NewsItem {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  category: CategoryItem;
  thumbnail: ThumbnailItem;
}

export interface CategoryItem {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
}

export interface ThumbnailItem {
  url: string;
  height: string;
  width: string;
}

export interface NewsData {
  contents: NewsItem[];
  totalCount: number;
  offset: number;
  limit: number;
}