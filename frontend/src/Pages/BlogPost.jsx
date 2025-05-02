import { useParams, Link } from 'react-router-dom'

// Using the same blog posts data from Blog.jsx
// In a real application, this would come from an API or database
const blogPosts = [
  {
    id: 1,
    title: 'Annual Sports Day 2025',
    date: 'April 15, 2025',
    author: 'Sports Department',
    excerpt: 'Join us for an exciting day of sports and athletic achievements...',
    content: 'Our annual sports day is approaching! This year, we have planned various events including track and field, team sports, and individual competitions. Students from all grades will participate in this grand event. The day will begin with a march past, followed by track events in the morning and field events in the afternoon. Parents are welcome to attend and cheer for their children. Refreshments will be provided for all participants.',
    image: '/images/sports-day.jpg',
    category: 'Events'
  },
  {
    id: 2,
    title: 'Academic Excellence Awards',
    date: 'April 10, 2025',
    author: 'Academic Committee',
    excerpt: 'Celebrating our top performers of the academic year...',
    content: 'We are proud to announce the Academic Excellence Awards ceremony where we will recognize students who have shown exceptional performance in their studies. The ceremony will include special recognition for students who have maintained perfect attendance, achieved highest scores in various subjects, and demonstrated outstanding improvement throughout the year. Guest speakers from renowned universities will be present to inspire our students.',
    image: '/images/academic-awards.jpg',
    category: 'Academics'
  },
  {
    id: 3,
    title: 'New Science Lab Equipment',
    date: 'April 5, 2025',
    author: 'Science Department',
    excerpt: 'Upgrading our science facilities with state-of-the-art equipment...',
    content: 'We are excited to announce the arrival of new laboratory equipment that will enhance our students learning experience in science subjects. The new equipment includes advanced microscopes, chemistry apparatus, and digital measurement tools. This upgrade will enable students to perform more complex experiments and gain hands-on experience with modern scientific instruments.',
    image: '/images/science-lab.jpg',
    category: 'Facilities'
  }
]

function BlogPost() {
  const { id } = useParams()
  const post = blogPosts.find(post => post.id === parseInt(id))

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="text-blue-600 hover:text-blue-800 font-medium">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/blog" className="text-blue-600 hover:text-blue-800 font-medium inline-block mb-8">
          ← Back to Blog
        </Link>
        
        <article>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg shadow-md mb-8"
          />
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-blue-600 font-medium">{post.category}</span>
              <span className="text-gray-500">{post.date}</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
            <p className="text-gray-500 mb-8">By {post.author}</p>
            
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {post.content}
              </p>
            </div>
          </div>
        </article>

        <div className="mt-8 flex justify-between items-center">
          {post.id > 1 && (
            <Link
              to={`/blog/${post.id - 1}`}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Previous Post
            </Link>
          )}
          {post.id < blogPosts.length && (
            <Link
              to={`/blog/${post.id + 1}`}
              className="text-blue-600 hover:text-blue-800 font-medium ml-auto"
            >
              Next Post →
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default BlogPost
