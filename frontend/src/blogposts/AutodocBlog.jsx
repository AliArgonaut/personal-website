import { Link } from "react-router-dom";



const date = "12.6.25"
const author = "lloyd"

const content = ` 
# Building With Agents
hello


`


export default function AutodocBlog () {

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



  return (
  <>
      <div className="min-h-screen bg-white text-black">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link to = "/blog"> 
          <button
            className="mb-8 text-sm font-medium hover:underline"
          >
            ← Back to Blogs
          </button>
          </Link>
          
          <article>
            <div className="mb-8">
              <div className="text-sm text-gray-600 mb-2">
                {date} • {author}
              </div>
            </div>
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
            />
          </article>
        </div>
      </div>
  </>
  )
  
}








