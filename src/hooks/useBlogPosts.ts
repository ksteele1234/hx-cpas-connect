import { useState, useEffect } from 'react';

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
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      slug: "2025-tax-planning-strategies-high-income-professionals",
      title: "2025 Tax Planning Strategies for High-Income Professionals",
      date: "2025-01-15",
      author: "Hiram Parmar, CPA",
      category: "Tax Planning",
      featuredImage: "/images/blog/tax-planning-high-income-professionals.jpg",
      imageAlt: "Professional reviewing tax planning documents",
      excerpt: "Maximize your tax savings with strategic planning techniques specifically designed for executives, entrepreneurs, and high-earning professionals in 2025.",
      seoTitle: "2025 Tax Planning Strategies for High-Income Professionals | HRX CPAs",
      metaDescription: "Discover proven tax planning strategies for high-income professionals in 2025. Expert CPA advice on maximizing deductions and tax-efficient investments.",
      tags: ["tax planning", "high income", "tax strategies"],
      readingTime: "8 min read",
      featured: true,
      content: "# 2025 Tax Planning Strategies for High-Income Professionals\n\nHigh-income professionals face unique tax challenges that require sophisticated planning strategies..."
    },
    {
      slug: "rd-tax-credits-tech-companies",
      title: "R&D Tax Credits: Hidden Opportunities for Tech Companies",
      date: "2025-01-12",
      author: "HRX CPAs Team",
      category: "Business Growth",
      featuredImage: "/images/blog/rd-tax-credits-tech-companies.jpg",
      imageAlt: "Technology innovation and development",
      excerpt: "Learn how software companies can claim substantial R&D tax credits, including common qualifying activities and documentation requirements.",
      readingTime: "6 min read",
      featured: false,
      content: "# R&D Tax Credits: Hidden Opportunities for Tech Companies\n\nSoftware companies often overlook valuable R&D tax credit opportunities..."
    }
  ]);
  const [loading, setLoading] = useState(false);

  return { posts, loading };
};