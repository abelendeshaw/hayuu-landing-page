import Image from 'next/image'
import Link from 'next/link'
import Navigation from './components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation currentPage="/" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Empowering the Future of Learning Through Technology
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              We design, build, and integrate digital solutions for modern education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://www.diversityeducations.com/" 
                target="_blank"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Diversity LMS
              </Link>
              <Link 
                href="https://sms.hayyuu.et" 
                target="_blank"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Visit Hayyuu SMS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Transforming Education in Ethiopia</h2>
            <p className="text-lg text-gray-600 mb-8">
              Hayyuu Technologies PLC is at the forefront of educational digital transformation, 
              providing comprehensive solutions that bridge the gap between traditional learning 
              and modern technology. We're committed to empowering schools, teachers, and students 
              across Ethiopia with innovative digital tools and platforms.
            </p>
            <Link 
              href="/about" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Four pillars of educational technology excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Learning</h3>
              <p className="text-gray-600 mb-4">Comprehensive LMS platform for grades 7-12 with Ethiopian curriculum alignment</p>
              <Link href="https://www.diversityeducations.com/" target="_blank" className="text-blue-600 font-semibold hover:underline">
                Visit Diversity LMS →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">School Management</h3>
              <p className="text-gray-600 mb-4">Cloud-based ERP system to streamline school operations and communication</p>
              <Link href="https://sms.hayyuu.et" target="_blank" className="text-green-600 font-semibold hover:underline">
                Visit Hayyuu SMS →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Consulting & Studio Design</h3>
              <p className="text-gray-600 mb-4">Digital transformation consulting and turnkey eLearning studio solutions</p>
              <Link href="/solutions" className="text-purple-600 font-semibold hover:underline">
                Explore Services →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Educational Software & Tech</h3>
              <p className="text-gray-600 mb-4">Authorized partner for educational tools and classroom technology materials</p>
              <Link href="/solutions" className="text-orange-600 font-semibold hover:underline">
                View Products →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Leading Institutions</h2>
            <p className="text-gray-600">
              Partnering with schools and organizations across Ethiopia
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-semibold">School A</span>
            </div>
            <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-semibold">School B</span>
            </div>
            <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-semibold">School C</span>
            </div>
            <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-semibold">School D</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your School?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the digital revolution in education. Let's build the future of learning together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Work with Us
            </Link>
            <Link 
              href="/solutions" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
