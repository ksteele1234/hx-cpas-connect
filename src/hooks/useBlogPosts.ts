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
      slug: "2025-01-15-tax-planning-strategies-high-income-professionals",
      title: "2025 Tax Planning Strategies for High-Income Professionals",
      date: "2025-01-15",
      author: "Hiram Parmar, CPA",
      category: "Tax Planning",
      featuredImage: "/src/assets/blog/tax-planning-high-income-professionals.jpg",
      imageAlt: "Professional reviewing tax planning documents and financial charts",
      excerpt: "Maximize your tax savings with strategic planning techniques specifically designed for executives, entrepreneurs, and high-earning professionals in 2025.",
      seoTitle: "2025 Tax Planning Strategies for High-Income Professionals | HRX CPAs",
      metaDescription: "Discover proven tax planning strategies for high-income professionals in 2025. Expert CPA advice on maximizing deductions, retirement contributions, and tax-efficient investments.",
      tags: ["tax planning", "high income", "tax strategies", "2025 tax law", "executive compensation"],
      readingTime: "8 min read",
      featured: true,
      content: "# 2025 Tax Planning Strategies for High-Income Professionals\n\nHigh-income professionals face unique tax challenges that require sophisticated planning strategies..."
    },
    {
      slug: "2025-01-10-rd-tax-credits-hidden-opportunities-tech-companies",
      title: "R&D Tax Credits: Hidden Opportunities for Tech Companies",
      date: "2025-01-10",
      author: "Hiram Parmar, CPA",
      category: "Tax Credits",
      featuredImage: "/src/assets/blog/rd-tax-credits-tech-companies.jpg",
      imageAlt: "Tech developers working on code with tax credit documentation",
      excerpt: "Unlock significant tax savings through R&D credits. Learn how tech companies can identify qualifying activities and maximize their credit potential.",
      seoTitle: "R&D Tax Credits for Tech Companies: Hidden Opportunities | HRX CPAs",
      metaDescription: "Discover how tech companies can maximize R&D tax credits. Expert guidance on qualifying activities, documentation requirements, and credit optimization strategies.",
      tags: ["R&D tax credits", "tech companies", "software development", "tax savings", "research credits"],
      readingTime: "7 min read",
      featured: true,
      content: "# R&D Tax Credits: Hidden Opportunities for Tech Companies\n\nThe Research and Development (R&D) tax credit is one of the most valuable yet underutilized tax incentives..."
    },
    {
      slug: "2025-01-08-estate-planning-multi-generational-families",
      title: "Estate Planning for Multi-Generational Families",
      date: "2025-01-08",
      author: "Hiram Parmar, CPA",
      category: "Estate Planning",
      featuredImage: "/src/assets/blog/estate-planning-multi-generational.jpg",
      imageAlt: "Multi-generational family reviewing estate planning documents together",
      excerpt: "Comprehensive strategies for preserving and transferring wealth across generations while minimizing taxes and ensuring family harmony.",
      seoTitle: "Estate Planning for Multi-Generational Families | HRX CPAs",
      metaDescription: "Expert estate planning strategies for multi-generational families. Learn about wealth transfer techniques, tax optimization, and family governance structures.",
      tags: ["estate planning", "wealth transfer", "generation-skipping", "family trusts", "legacy planning"],
      readingTime: "9 min read",
      featured: true,
      content: "# Estate Planning for Multi-Generational Families\n\nEstate planning for multi-generational families requires sophisticated strategies..."
    },
    {
      slug: "2025-01-05-key-tax-law-changes-2025-business-owners",
      title: "Key Tax Law Changes for 2025: What Business Owners Need to Know",
      date: "2025-01-05",
      author: "Hiram Parmar, CPA",
      category: "Tax Law Updates",
      featuredImage: "/src/assets/blog/tax-law-changes-2025.jpg",
      imageAlt: "Business owner reviewing 2025 tax law changes and documentation",
      excerpt: "Stay ahead of 2025 tax law changes affecting businesses. Understand new requirements, deadlines, and opportunities for strategic tax planning.",
      seoTitle: "2025 Tax Law Changes for Business Owners | HRX CPAs",
      metaDescription: "Comprehensive guide to 2025 tax law changes affecting business owners. Expert analysis of new requirements, opportunities, and planning strategies.",
      tags: ["tax law changes", "2025 tax updates", "business tax", "tax compliance", "tax planning"],
      readingTime: "10 min read",
      featured: true,
      content: "# Key Tax Law Changes for 2025: What Business Owners Need to Know\n\nAs we enter 2025, business owners face significant tax law changes..."
    },
    {
      slug: "2025-01-03-rsu-tax-planning-timing-stock-vesting-maximum-benefit",
      title: "RSU Tax Planning: Timing Your Stock Vesting for Maximum Benefit",
      date: "2025-01-03",
      author: "Hiram Parmar, CPA",
      category: "Executive Compensation",
      featuredImage: "/src/assets/blog/rsu-tax-planning-stock-vesting.jpg",
      imageAlt: "Executive analyzing RSU vesting schedule and tax planning documents",
      excerpt: "Master RSU tax planning with strategic vesting timing, tax-efficient selling strategies, and comprehensive approaches to minimize your overall tax burden.",
      seoTitle: "RSU Tax Planning: Strategic Stock Vesting Timing | HRX CPAs",
      metaDescription: "Expert RSU tax planning strategies for tech professionals. Learn optimal vesting timing, selling strategies, and tax minimization techniques for restricted stock units.",
      tags: ["RSU planning", "stock compensation", "tax planning", "equity compensation", "tech professionals"],
      readingTime: "9 min read",
      featured: false,
      content: "# RSU Tax Planning: Timing Your Stock Vesting for Maximum Benefit\n\nRestricted Stock Units (RSUs) have become a cornerstone of compensation..."
    },
    {
      slug: "2025-01-01-small-business-tax-deductions-you-might-be-missing",
      title: "Small Business Tax Deductions You Might Be Missing",
      date: "2025-01-01",
      author: "Hiram Parmar, CPA",
      category: "Small Business",
      featuredImage: "/src/assets/blog/small-business-tax-deductions.jpg",
      imageAlt: "Small business owner reviewing tax deduction documentation and receipts",
      excerpt: "Discover overlooked tax deductions that could save your small business thousands. Learn about legitimate deductions you may not know about and proper documentation requirements.",
      seoTitle: "Small Business Tax Deductions You're Missing | HRX CPAs",
      metaDescription: "Comprehensive guide to overlooked small business tax deductions. Expert advice on maximizing legitimate deductions and proper documentation requirements.",
      tags: ["small business deductions", "tax savings", "business expenses", "tax planning", "small business tax"],
      readingTime: "8 min read",
      featured: false,
      content: "# Small Business Tax Deductions You Might Be Missing\n\nSmall business owners often focus on obvious deductions..."
    }
  ]);
  const [loading, setLoading] = useState(false);

  return { posts, loading };
};