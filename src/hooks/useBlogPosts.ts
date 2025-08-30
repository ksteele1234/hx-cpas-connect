import { useState, useEffect } from 'react';
import matter from 'gray-matter';
import { Buffer } from 'buffer';

// Polyfill Buffer for browser environment
if (typeof window !== 'undefined') {
  window.Buffer = Buffer;
}

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
  status?: string;
  published: boolean;
  content: string;
}

// Function to dynamically import all markdown files
const importAllMarkdownFiles = async (): Promise<BlogPost[]> => {
  const modules = import.meta.glob('/content/blog/*.md', { as: 'raw' });
  const posts: BlogPost[] = [];
  
  for (const path in modules) {
    try {
      const content = await modules[path]();
      const { data, content: body } = matter(content);
      
      // Debug logging for frontmatter
      console.log('Frontmatter status field:', data.status);
      console.log('All frontmatter fields:', Object.keys(data));
      
      // Extract slug from filename
      const filename = path.split('/').pop()?.replace('.md', '') || '';
      
      // Only include posts that have a valid date (but show all statuses)
      const postDate = new Date(data.date);
      const published = data.published || false;
      
      // Include all posts regardless of status or publication date
      posts.push({
        slug: filename,
        title: data.title || '',
        date: data.date || '',
        author: data.author || 'HRX CPAs Team',
        category: data.category || '',
        featuredImage: data.featuredImage || '',
        imageAlt: data.imageAlt || '',
        excerpt: data.excerpt || '',
        seoTitle: data.seoTitle,
        metaDescription: data.metaDescription,
        tags: data.tags || [],
        readingTime: data.readingTime || '5 min read',
        featured: data.featured || false,
        status: data.status,
        published: published,
        content: body,
      });
    } catch (error) {
      console.error(`Error processing blog post ${path}:`, error);
    }
  }
  
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const loadedPosts = await importAllMarkdownFiles();
        setPosts(loadedPosts);
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const getPostBySlug = (slug: string): BlogPost | undefined => {
    return posts.find(post => post.slug === slug);
  };

  const getFeaturedPosts = (): BlogPost[] => {
    return posts.filter(post => post.featured).slice(0, 3);
  };

  const getPostsByCategory = (category: string): BlogPost[] => {
    return posts.filter(post => post.category === category);
  };

  const getRecentPosts = (limit: number = 6): BlogPost[] => {
    return posts
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  };

  return {
    posts,
    loading,
    getPostBySlug,
    getFeaturedPosts,
    getPostsByCategory,
    getRecentPosts,
  };
};