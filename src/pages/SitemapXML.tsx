import { useEffect, useState } from 'react';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { sitemapGenerator } from '../utils/sitemapGenerator';

const SitemapXML = () => {
  const { posts, loading } = useBlogPosts();
  const [sitemapXML, setSitemapXML] = useState<string>('');

  useEffect(() => {
    if (!loading && posts.length > 0) {
      const xml = sitemapGenerator.generateSitemapXML(posts);
      setSitemapXML(xml);
    }
  }, [posts, loading]);

  if (loading) {
    return <div>Loading sitemap...</div>;
  }

  // Return raw XML
  return (
    <div style={{ 
      fontFamily: 'monospace', 
      whiteSpace: 'pre-wrap',
      fontSize: '12px',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      overflow: 'auto'
    }}>
      {sitemapXML}
    </div>
  );
};

export default SitemapXML;