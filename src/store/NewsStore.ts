import type { NewsData, NewsItem } from "@/entities/newsEntity";
import axios from "axios";
import { defineStore } from "pinia";

export const useNewsStore = defineStore(
  'newsStore',
  {
    state: (): NewsData => ({
      contents: [],
      totalCount: 0,
      offset: 0,
      limit: 0
    }),
    getters: {
      getHomeNews: state =>
        state.contents
        .filter((news) => news.category.id === "8xko3dvcl")
        .slice(0, 3)
        .map((news) => {
          return {
            title: news.title,
            publishedAt: new Date(news.publishedAt),
          };
        }
      ),
      getHomeBlog: state =>
        state.contents
        .filter((blog) => blog.category.id === "ftnz1ahl9a")
        .slice(0, 3)
        .map((blog) => {
          return {
            title: blog.title,
            imageUrl: blog.thumbnail?.url,
            publishedAt: new Date(blog.publishedAt),
          }
        })
    },
    actions: {
      async init() {
        const response =
          await axios.get("https://wdrq6z495s.microcms.io/api/v1/news", {
            headers: {
              "X-MICROCMS-API-KEY": import.meta.env.VITE_HEADLESS_CMS_API_KEY,
            },
          })
        this.contents = response.data.contents;
      }
    }
  }
);