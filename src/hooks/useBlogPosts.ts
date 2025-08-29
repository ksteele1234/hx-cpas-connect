import { useState, useEffect } from 'react';
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

// Simple frontmatter parser that works in the browser
const parseFrontmatter = (content: string) => {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { data: {}, content };
  }
  
  const frontmatter = match[1];
  const body = match[2];
  
  const data: any = {};
  
  // Parse YAML-like frontmatter
  frontmatter.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      let value: any = line.substring(colonIndex + 1).trim();
      
      // Remove quotes
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Convert boolean strings
      if (value === 'true') value = true;
      if (value === 'false') value = false;
      
      // Handle arrays (basic support)
      if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map(item => item.trim().replace(/['"]/g, ''));
      }
      
      data[key] = value;
    }
  });
  
  return { data, content: body };
};

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        console.log('Loading blog posts...');
        
        // Try different path patterns
        const patterns = [
          '/content/blog/*.md',
          '../content/blog/*.md',
          '/src/content/blog/*.md',
          './content/blog/*.md',
          'content/blog/*.md'
        ];
        
        let postFiles: Record<string, () => Promise<string>> = {};
        
        for (const pattern of patterns) {
          try {
            postFiles = import.meta.glob(pattern, { as: 'raw' }) as Record<string, () => Promise<string>>;
            console.log(`Pattern ${pattern}:`, Object.keys(postFiles));
            
            if (Object.keys(postFiles).length > 0) {
              console.log('Found files with pattern:', pattern);
              break;
            }
          } catch (error) {
            console.log(`Pattern ${pattern} failed:`, error);
          }
        }
        
        if (Object.keys(postFiles).length === 0) {
          console.log('No markdown files found. Check your file structure.');
          setLoading(false);
          return;
        }
        
        const loadedPosts = await Promise.all(
          Object.entries(postFiles).map(async ([path, loader]) => {
            try {
              const content = await loader();
              const { data, content: markdown } = parseFrontmatter(content);
              
              // Extract slug from filename
              const slug = path.split('/').pop()?.replace('.md', '') || '';
              
              // Only include posts that are published (not future-dated)
              if (data.date) {
                const postDate = parseISO(data.date);
                if (isFuture(postDate)) {
                  return null; // Skip future posts
                }
              }
              
              return {
                slug,
                ...data,
                content: markdown,
                date: data.date ? format(parseISO(data.date), 'yyyy-MM-dd') : new Date().toISOString().split('T')[0]
              } as BlogPost;
            } catch (error) {
              console.error(`Error loading post ${path}:`, error);
              return null;
            }
          })
        );

        // Filter out null values and sort by date
        const publishedPosts = loadedPosts
          .filter(post => post !== null)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        console.log('Loaded posts:', publishedPosts);
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