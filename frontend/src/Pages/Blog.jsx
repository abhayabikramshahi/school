import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const blogPosts = [
  {
    id: 1,
    title: 'Annual Sports Day 2025',
    date: 'April 15, 2025',
    author: 'Sports Department',
    excerpt: 'Join us for an exciting day of sports and athletic achievements...',
    content: 'Our annual sports day is approaching! This year, we have planned various events including track and field, team sports, and individual competitions. Students from all grades will participate in this grand event.',
    image: '/images/sports-day.jpg',
    category: 'Events'
  },
  {
    id: 2,
    title: 'Academic Excellence Awards',
    date: 'April 10, 2025',
    author: 'Academic Committee',
    excerpt: 'Celebrating our top performers of the academic year...',
    content: 'We are proud to announce the Academic Excellence Awards ceremony where we will recognize students who have shown exceptional performance in their studies.',
    image: '/images/academic-awards.jpg',
    category: 'Academics'
  },
  {
    id: 3,
    title: 'New Science Lab Equipment',
    date: 'April 5, 2025',
    author: 'Science Department',
    excerpt: 'Upgrading our science facilities with state-of-the-art equipment...',
    content: 'We are excited to announce the arrival of new laboratory equipment that will enhance our students learning experience in science subjects.',
    image: '/images/science-lab.jpg',
    category: 'Facilities'
  }
]

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))]

  useEffect(() => {
    const filtered = blogPosts.filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
    setFilteredPosts(filtered)
  }, [selectedCategory, searchTerm])

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">School Blog</h1>
        
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border rounded-lg w-full md:w-64"
          />
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-blue-600">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No posts found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog
