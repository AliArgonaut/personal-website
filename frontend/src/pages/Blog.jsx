import React, { useState } from 'react';
import Navigation from '../components/Navigation.jsx'
import { Link } from "react-router-dom"
const BlogsData = [
  {
    id: 1,
    name: "Building With Agents",
    date: "11.30.25",
    author: "Lloyd Bonds",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    link: "/autodoc"
  },
];

export default function BlogSystem() {

      

  return (
    <>
    <Navigation />
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Blog</h1>
          <p className="text-gray-600">Thoughts on software engineering and development</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BlogsData.map((blog) => (
            <Link to={blog.link}>
              <article
                key={blog.id}
                onClick={() => setSelectedBlog(blog)}
                className="border border-black cursor-pointer hover:shadow-lg transition-shadow duration-200 group"
              >
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={blog.thumbnail}
                    alt={blog.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-2 group-hover:underline">
                    {blog.name}
                  </h2>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{blog.author}</span>
                    <span>{blog.date}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
