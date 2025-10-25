import Navigation from '../components/Navigation'

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation currentPage="/about" />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Hayyuu Technologies</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Building the Future of Learning — Digitally. We&apos;re transforming education in Ethiopia through innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded with a vision to revolutionize education in Ethiopia, Hayyuu Technologies PLC 
                  emerged from the recognition that traditional learning methods needed to evolve with 
                  the digital age. We saw the potential to bridge the gap between Ethiopia&apos;s rich 
                  educational heritage and modern technological capabilities.
                </p>
                <p className="text-gray-600 mb-4">
                  Our journey began with a simple yet powerful belief: every student, regardless of 
                  location or background, deserves access to quality education enhanced by cutting-edge 
                  technology. This vision has driven us to develop comprehensive digital solutions that 
                  serve schools, teachers, and students across Ethiopia.
                </p>
                <p className="text-gray-600">
                  Today, we stand as a leading force in educational technology, having successfully 
                  transformed hundreds of schools and empowered thousands of educators and students 
                  with our innovative platforms and services.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To empower educational institutions across Ethiopia with innovative digital solutions 
                  that enhance learning outcomes, streamline operations, and prepare students for the 
                  challenges of tomorrow.
                </p>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 mb-6">
                  To be the leading provider of educational technology solutions in Ethiopia, 
                  creating a digitally transformed learning ecosystem that fosters excellence and innovation.
                </p>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Innovation and continuous improvement</li>
                  <li>• Educational excellence and impact</li>
                  <li>• Collaboration and partnership</li>
                  <li>• Accessibility and inclusion</li>
                  <li>• Integrity and transparency</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine innovation, collaboration, and impact to deliver transformative educational solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously explore emerging technologies and methodologies to create 
                cutting-edge solutions that address the evolving needs of modern education.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We work closely with schools, educators, and stakeholders to understand their 
                unique challenges and co-create solutions that truly meet their needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Impact</h3>
              <p className="text-gray-600">
                Every solution we develop is designed to create measurable positive impact on 
                learning outcomes, operational efficiency, and educational accessibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The visionary leaders driving educational transformation across Ethiopia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-blue-600">AD</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Adisu Denboba</h3>
              <p className="text-blue-600 mb-2 font-semibold">CEO & Founder</p>
              <p className="text-gray-600 text-sm mb-4">
                Visionary leader with 15+ years of experience in educational technology and 
                digital transformation. Passionate about leveraging technology to improve 
                learning outcomes across Ethiopia.
              </p>
              <div className="text-xs text-gray-500">
                <p>• PhD in Educational Technology</p>
                <p>• Former Director of Digital Learning at Addis Ababa University</p>
                <p>• Published researcher in EdTech innovation</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-green-600">SM</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Mekonnen</h3>
              <p className="text-green-600 mb-2 font-semibold">CTO</p>
              <p className="text-gray-600 text-sm mb-4">
                Technical architect with expertise in cloud computing, scalable systems, 
                and educational software development. Leads our engineering team in creating 
                robust, user-friendly platforms.
              </p>
              <div className="text-xs text-gray-500">
                <p>• MSc in Computer Science</p>
                <p>• 10+ years in software architecture</p>
                <p>• Expert in cloud-based educational platforms</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-purple-600">TM</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tewodros Mulugeta</h3>
              <p className="text-purple-600 mb-2 font-semibold">Head of Product</p>
              <p className="text-gray-600 text-sm mb-4">
                Product strategist focused on user experience and educational impact. 
                Ensures our solutions meet the real needs of schools, teachers, and students 
                while maintaining high standards of usability and effectiveness.
              </p>
              <div className="text-xs text-gray-500">
                <p>• MBA in Technology Management</p>
                <p>• Former education consultant</p>
                <p>• Specializes in user-centered design</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-24 h-24 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-orange-600">EH</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Eleni Haile</h3>
              <p className="text-orange-600 mb-2 font-semibold">Head of Education</p>
              <p className="text-gray-600 text-sm mb-4">
                Educational specialist with deep understanding of Ethiopian curriculum and 
                pedagogy. Ensures our solutions align with national educational standards 
                and support effective teaching and learning practices.
              </p>
              <div className="text-xs text-gray-500">
                <p>• PhD in Curriculum & Instruction</p>
                <p>• Former Ministry of Education advisor</p>
                <p>• Expert in digital pedagogy</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-24 h-24 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-indigo-600">DK</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dawit Kebede</h3>
              <p className="text-indigo-600 mb-2 font-semibold">Head of Operations</p>
              <p className="text-gray-600 text-sm mb-4">
                Operations expert ensuring smooth implementation and support of our solutions. 
                Manages client relationships and oversees the successful deployment of our 
                platforms across partner institutions.
              </p>
              <div className="text-xs text-gray-500">
                <p>• MBA in Operations Management</p>
                <p>• 12+ years in project management</p>
                <p>• Expert in educational technology deployment</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-24 h-24 bg-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-pink-600">AG</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Alem Gebre</h3>
              <p className="text-pink-600 mb-2 font-semibold">Head of Design</p>
              <p className="text-gray-600 text-sm mb-4">
                Creative director responsible for the visual and user experience design of 
                our platforms. Ensures our solutions are not only functional but also 
                intuitive and engaging for all users.
              </p>
              <div className="text-xs text-gray-500">
                <p>• MFA in Digital Design</p>
                <p>• Award-winning UX designer</p>
                <p>• Specializes in educational interfaces</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl opacity-90">
              Transforming education across Ethiopia through technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">250+</div>
              <div className="text-lg opacity-90">Schools Transformed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <div className="text-lg opacity-90">Students Impacted</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2,500+</div>
              <div className="text-lg opacity-90">Teachers Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-lg opacity-90">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
