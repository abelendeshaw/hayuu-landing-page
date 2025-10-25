import Link from 'next/link'
import Navigation from '../components/Navigation'

export default function Insights() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation currentPage="/insights" />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights & Blog</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Stay informed with expert insights, EdTech trends, and success stories from the world of educational technology.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                  Featured Article
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  The Future of Digital Learning in Ethiopia: Trends and Opportunities
                </h2>
                <p className="text-gray-600 mb-6">
                  Explore how Ethiopia&apos;s education sector is embracing digital transformation, 
                  the challenges we face, and the incredible opportunities that lie ahead. 
                  Learn from real case studies and success stories from schools across the country.
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">AD</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Adisu Denboba</p>
                    <p className="text-sm text-gray-600">CEO & Founder</p>
                  </div>
                  <div className="text-sm text-gray-500">•</div>
                  <div className="text-sm text-gray-500">March 15, 2024</div>
                </div>
                <Link 
                  href="#" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Read Full Article
                </Link>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8">
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 text-center">
                  Video: &quot;Digital Transformation Success Stories&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find insights tailored to your interests and role in education
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">EdTech Trends</h3>
              <p className="text-gray-600 mb-4">
                Latest developments in educational technology, emerging tools, and innovative teaching methods.
              </p>
              <Link href="#" className="text-blue-600 font-semibold hover:underline">
                Read Articles →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Learning</h3>
              <p className="text-gray-600 mb-4">
                Best practices for online learning, student engagement strategies, and curriculum development.
              </p>
              <Link href="#" className="text-green-600 font-semibold hover:underline">
                Read Articles →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">School Management</h3>
              <p className="text-gray-600 mb-4">
                Administrative efficiency, parent communication, and operational excellence in schools.
              </p>
              <Link href="#" className="text-purple-600 font-semibold hover:underline">
                Read Articles →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Articles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay up-to-date with our latest insights and thought leadership content
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">EdTech</span>
                  <span className="text-sm text-gray-500">March 10, 2024</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Implementing Interactive Whiteboards in Ethiopian Classrooms
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  A comprehensive guide to successfully integrating interactive whiteboard technology 
                  in Ethiopian schools, including best practices and common challenges.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-xs font-semibold">SM</span>
                    </div>
                    <span className="text-sm text-gray-600">Sarah Mekonnen</span>
                  </div>
                  <Link href="#" className="text-blue-600 text-sm font-semibold hover:underline">
                    Read More →
                  </Link>
                </div>
              </div>
            </article>

            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Management</span>
                  <span className="text-sm text-gray-500">March 5, 2024</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Building Strong Parent-School Communication Channels
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  How digital communication tools are revolutionizing the way schools connect 
                  with parents and guardians in Ethiopia.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 text-xs font-semibold">TM</span>
                    </div>
                    <span className="text-sm text-gray-600">Tewodros Mulugeta</span>
                  </div>
                  <Link href="#" className="text-blue-600 text-sm font-semibold hover:underline">
                    Read More →
                  </Link>
                </div>
              </div>
            </article>

            <article className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-semibold">Innovation</span>
                  <span className="text-sm text-gray-500">February 28, 2024</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  The Role of AI in Personalized Learning
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Exploring how artificial intelligence can create personalized learning 
                  experiences for students in Ethiopian schools.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 text-xs font-semibold">EH</span>
                    </div>
                    <span className="text-sm text-gray-600">Eleni Haile</span>
                  </div>
                  <Link href="#" className="text-blue-600 text-sm font-semibold hover:underline">
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for the latest insights, updates, and success stories from the world of educational technology.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
