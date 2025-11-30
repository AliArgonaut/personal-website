import React, { useState } from 'react';

// Blog data structure
const BlogsData = [
  {
    id: 1,
    name: "Coding With Agency",
    date: "11.30.25",
    author: "Lloyd Bonds",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    content: `# Coding With Agency

## Introduction

As developers, we often find ourselves caught between two extremes: rigid frameworks that constrain our creativity, and complete freedom that leads to analysis paralysis. The concept of "agency" in coding strikes a balance between these extremes.

## What Does Agency Mean?

Agency in software development means having the autonomy to make meaningful decisions while working within established constraints. It's about:

- **Choosing the right tools** for the job, not just the familiar ones
- **Questioning assumptions** in requirements and design
- **Owning your code** from conception to deployment

## The Power of Constraints

Interestingly, constraints don't limit agency—they enable it. When you know the boundaries, you can push against them intelligently. This is why:

1. Microservices force you to think about boundaries
2. Test coverage requirements make you consider edge cases
3. Performance budgets drive creative optimization

## Building With Intent

Every line of code is a decision. When you code with agency, you:

- Understand *why* you're writing each function
- Consider the maintenance burden of your choices
- Balance perfectionism with pragmatism

## Conclusion

Agency isn't about doing whatever you want—it's about making informed, intentional decisions that move your projects forward. It's the difference between a developer and a software engineer.`
  },
  {
    id: 2,
    name: "Microservices at Scale",
    date: "11.15.25",
    author: "Lloyd Bonds",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    content: `# Microservices at Scale

## The Journey

Building microservices isn't just about splitting a monolith into smaller pieces. It's a fundamental shift in how you think about software architecture.

## Key Lessons

After working on production microservices, here's what I've learned:

### 1. Service Boundaries Matter
Don't just split by tech—split by business domains.

### 2. Communication is Hard
REST, gRPC, message queues—choose based on your use case, not trends.

### 3. Observability is Critical
You can't debug what you can't see. Invest in logging and tracing early.

## The Reality Check

Microservices introduce complexity. Only use them when the benefits outweigh the costs.`
  },
  {
    id: 3,
    name: "AI Integration Done Right",
    date: "11.01.25",
    author: "Lloyd Bonds",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    content: `# AI Integration Done Right

## The Hype vs Reality

Everyone wants AI in their product. But strategic AI integration is about solving real problems, not chasing trends.

## Strategic Implementation

### Where AI Adds Value
- Automating repetitive tasks (like documentation)
- Enhancing user experience with smart suggestions
- Processing unstructured data at scale

### Where AI Doesn't Belong
- Critical decision-making without human oversight
- Systems where explainability is required
- Edge cases that need 100% accuracy

## Best Practices

1. **Start Small**: Prove value with one use case
2. **Measure Impact**: Track metrics that matter
3. **Plan for Failure**: AI will make mistakes—handle them gracefully

## The Future

AI is a tool, not a solution. Use it strategically, and it can be transformative.`
  }
];

export default function BlogSystem() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Simple markdown parser for basic formatting
  const parseMarkdown = (md) => {
    let html = md;
    
    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-lg font-bold mt-4 mb-2">$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-4">$1</h1>');
    
    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Lists
    html = html.replace(/^\- (.*$)/gim, '<li class="ml-4">$1</li>');
    html = html.replace(/^\d+\. (.*$)/gim, '<li class="ml-4">$1</li>');
    
    // Wrap lists
    html = html.replace(/(<li.*<\/li>)/s, '<ul class="list-disc space-y-1 my-2">$1</ul>');
    
    // Paragraphs
    html = html.split('\n\n').map(para => {
      if (!para.startsWith('<')) {
        return `<p class="mb-4 leading-relaxed">${para}</p>`;
      }
      return para;
    }).join('\n');
    
    return html;
  };

  if (selectedBlog) {
    return (
      <div className="min-h-screen bg-white text-black">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <button
            onClick={() => setSelectedBlog(null)}
            className="mb-8 text-sm font-medium hover:underline"
          >
            ← Back to Blogs
          </button>
          
          <article>
            <div className="mb-8">
              <div className="text-sm text-gray-600 mb-2">
                {selectedBlog.date} • {selectedBlog.author}
              </div>
            </div>
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: parseMarkdown(selectedBlog.content) }}
            />
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-3xl font-bold mb-2">Blog</h1>
          <p className="text-gray-600">Thoughts on software engineering and development</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BlogsData.map((blog) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}
