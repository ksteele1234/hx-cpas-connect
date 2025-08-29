import { useState, useEffect } from 'react';
import matter from 'gray-matter';
import { format, parseISO, isFuture } from 'date-fns';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  featuredImage: string;
  imageAlt: string;
  seoTitle?: string;
  metaDescription?: string;
  tags?: string[];
  readingTime: string;
  featured: boolean;
  content: string;
}

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        // Import all markdown files from content/blog
        const postFiles = import.meta.glob('/content/blog/*.md', { as: 'raw' });
        
        const loadedPosts = await Promise.all(
          Object.entries(postFiles).map(async ([path, loader]) => {
            const content = await loader();
            const { data, content: markdown } = matter(content);
            
            // Extract slug from filename
            const slug = path.split('/').pop()?.replace('.md', '') || '';
            
            // Only include posts that are published (not future-dated)
            const postDate = parseISO(data.date);
            if (isFuture(postDate)) {
              return null; // Skip future posts
            }
            
            return {
              slug,
              ...data,
              content: markdown,
              date: format(postDate, 'yyyy-MM-dd')
            } as BlogPost;
          })
        );

        // Filter out null values and sort by date
        const publishedPosts = loadedPosts
          .filter(post => post !== null)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        setPosts(publishedPosts);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return { posts, loading };
};