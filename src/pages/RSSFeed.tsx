import { useEffect, useState } from 'react';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { rssGenerator } from '../utils/rssGenerator';

const RSSFeed = () => {
  const { posts, loading } = useBlogPosts();
  const [rssXML, setRssXML] = useState<string>('');

  useEffect(() => {
    if (!loading && posts.length > 0) {
      // Generate RSS XML
      const xml = rssGenerator.generateRSSXML(posts);
      setRssXML(xml);
      
      // Update cached version
      rssGenerator.updateRSSFeed(posts);
    }
  }, [posts, loading]);

  useEffect(() => {
    if (rssXML) {
      // Set the correct content type for RSS
      const response = new Response(rssXML, {
        headers: {
          'Content-Type': 'application/rss+xml; charset=utf-8',
          'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
        }
      });

      // Create a blob URL and navigate to it to serve the RSS
      const blob = new Blob([rssXML], { type: 'application/rss+xml' });
      const url = URL.createObjectURL(blob);
      
      // For development, we'll display the XML content
      // In production, this would be handled by the server
      console.log('RSS Feed generated:', url);
    }
  }, [rssXML]);

  if (loading) {
    return (
      <div style={{ fontFamily: 'monospace', padding: '20px' }}>
        <h1>RSS Feed Loading...</h1>
        <p>Please wait while we generate your RSS feed...</p>
      </div>
    );
  }

  if (!rssXML) {
    return (
      <div style={{ fontFamily: 'monospace', padding: '20px' }}>
        <h1>RSS Feed Error</h1>
        <p>Unable to generate RSS feed. Please check back later.</p>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap', fontSize: '12px' }}>
      {rssXML}
    </div>
  );
};

export default RSSFeed;