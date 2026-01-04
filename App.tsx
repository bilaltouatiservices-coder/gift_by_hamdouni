
import React from 'react';
import { Layout } from './components/Layout';
import { ChatBot } from './components/ChatBot';
import { BOUQUETS, COMPARISONS } from './constants';

const App: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section id="hero" className="relative h-[85vh] flex items-center overflow-hidden bg-stone-100">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover opacity-30"
            alt="Floral background"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl serif font-bold text-emerald-950 mb-6 leading-tight">
              Everlasting Beauty, <br />
              <span className="italic font-normal">Thoughtfully Crafted.</span>
            </h1>
            <p className="text-lg text-stone-700 mb-8 leading-relaxed max-w-lg">
              Experience the artistry of botanically accurate artificial flowers. 
              Bring life to your home with arrangements that never fade, wilt, or demand your time.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#pricing" className="bg-emerald-800 text-white px-8 py-3 rounded-full hover:bg-emerald-900 transition-all font-medium text-lg">
                View Collection
              </a>
              <a href="#comparison" className="bg-white text-emerald-900 border border-emerald-900 px-8 py-3 rounded-full hover:bg-stone-50 transition-all font-medium text-lg">
                Why Artificial?
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl serif font-bold text-stone-900 mb-4">Nature vs. Artistry</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">Understanding the timeless benefits of high-quality artificial blooms.</p>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {COMPARISONS.map((point, i) => (
                <div key={i} className="group border-b border-stone-100 pb-6">
                  <h3 className="text-xl serif font-semibold text-emerald-900 mb-2">{point.title}</h3>
                  <div className="grid grid-cols-2 gap-8 text-sm">
                    <div>
                      <span className="block text-stone-400 font-medium mb-1 uppercase tracking-widest text-[10px]">Natural</span>
                      <p className="text-stone-600 italic">"{point.natural}"</p>
                    </div>
                    <div>
                      <span className="block text-emerald-600 font-medium mb-1 uppercase tracking-widest text-[10px]">EternalBloom</span>
                      <p className="text-emerald-900 font-medium">"{point.artificial}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden md:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2">
                <img 
                  src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=1000" 
                  alt="Floral detail"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-emerald-900/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing/Bouquets Section */}
      <section id="pricing" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl serif font-bold text-stone-900 mb-4">Our Signature Bouquets</h2>
          <p className="text-stone-600">Choose the perfect volume for your space.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BOUQUETS.map((bouquet) => (
              <div key={bouquet.id} className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all flex flex-col group">
                <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[4/5]">
                  <img 
                    src={bouquet.image} 
                    alt={bouquet.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-emerald-900 font-bold">
                    {bouquet.price} MAD
                  </div>
                </div>
                <div className="px-4 pb-4 flex-grow">
                  <h3 className="text-2xl serif font-bold text-stone-900 mb-2">{bouquet.name}</h3>
                  <p className="text-sm text-stone-500 mb-4 font-medium uppercase tracking-wider">{bouquet.count} Permanent Stems</p>
                  <p className="text-stone-600 mb-6 line-clamp-2">{bouquet.description}</p>
                  <ul className="space-y-2 mb-8">
                    {bouquet.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-stone-700">
                        <svg className="w-4 h-4 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-stone-900 text-white py-3 rounded-xl hover:bg-emerald-800 transition-colors font-semibold">
                    Select Bouquet
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-4xl serif font-bold text-stone-900 mb-4">Inspiration</h2>
            <p className="text-stone-600">See how our flowers transform real spaces.</p>
          </div>
          <button className="text-emerald-800 font-semibold flex items-center hover:underline">
            Follow our journey
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-4">
            <img src="https://picsum.photos/seed/gall1/400/600" className="rounded-2xl w-full" alt="Gallery 1" />
            <img src="https://picsum.photos/seed/gall2/400/400" className="rounded-2xl w-full" alt="Gallery 2" />
          </div>
          <div className="space-y-4 pt-8">
            <img src="https://picsum.photos/seed/gall3/400/300" className="rounded-2xl w-full" alt="Gallery 3" />
            <img src="https://picsum.photos/seed/gall4/400/600" className="rounded-2xl w-full" alt="Gallery 4" />
          </div>
          <div className="space-y-4">
            <img src="https://picsum.photos/seed/gall5/400/600" className="rounded-2xl w-full" alt="Gallery 5" />
            <img src="https://picsum.photos/seed/gall6/400/400" className="rounded-2xl w-full" alt="Gallery 6" />
          </div>
          <div className="space-y-4 pt-12">
            <img src="https://picsum.photos/seed/gall7/400/400" className="rounded-2xl w-full" alt="Gallery 7" />
            <img src="https://picsum.photos/seed/gall8/400/500" className="rounded-2xl w-full" alt="Gallery 8" />
          </div>
        </div>
      </section>

      {/* Testimonial / Call to Action */}
      <section className="py-24 bg-emerald-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-emerald-400 font-medium tracking-[0.2em] uppercase text-xs mb-6 block">Customer Love</span>
          <p className="text-3xl serif italic mb-8">
            "I was skeptical about artificial flowers until I saw EternalBloom. 
            The attention to detail is breathtaking. My living room finally feels 
            alive all year round, without the guilt of wilted petals."
          </p>
          <div className="flex items-center justify-center mb-12">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-800 mr-4">
              <img src="https://picsum.photos/seed/user/100/100" alt="Sarah J." />
            </div>
            <div className="text-left">
              <p className="font-bold">Sarah J.</p>
              <p className="text-emerald-400 text-sm">Interior Designer</p>
            </div>
          </div>
          <button className="bg-white text-emerald-950 px-10 py-4 rounded-full font-bold hover:bg-stone-100 transition-all text-lg">
            Start Your Collection
          </button>
        </div>
      </section>

      <ChatBot />
    </Layout>
  );
};

export default App;
