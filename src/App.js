import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [status, setStatus] = useState(""); 
  const formRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    console.log("%cDeveloped by: Manish Aswal", "color: #C5A059; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 0px rgba(0,0,0,0.2);");
  }, []);

  // Smooth Scroll Function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("SENDING...");

    if (!formRef.current) {
      setStatus("FORM ERROR. PLEASE REFRESH.");
      return;
    }

    emailjs.sendForm(
      'service_v27do8l',
      'template_snzz80n',
      formRef.current,
      '5GdGQL1XeGIzLznAb'
    )
    .then((response) => {
      if (response.status === 200) {
        setStatus("INQUIRY SENT SUCCESSFULLY!");
        formRef.current.reset();
      }
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setStatus("FAILED TO SEND. PLEASE TRY WHATSAPP.");
    });
  };

  return (
    <div className="bg-pure-white text-pure-black font-body selection:bg-black selection:text-white">
      
      {/* --- NAVIGATION --- */}
      <nav style={{ zIndex: 1000 }} className={`fixed w-full transition-all duration-500 px-8 py-6 flex justify-between items-center ${scrolled ? 'bg-pure-white border-b border-black py-4 shadow-sm' : 'bg-transparent text-white'}`}>
        <div className={`text-2xl font-display font-bold tracking-tighter ${scrolled ? 'text-pure-black' : 'text-white'}`}>
          JAUNPUR SOUL
        </div>
        <div className={`hidden md:flex space-x-10 text-xs font-bold uppercase tracking-widest ${scrolled ? 'text-pure-black' : 'text-white'}`}>
          <button onClick={() => scrollToSection('culture')} className="hover:line-through transition">Experience</button>
          <button onClick={() => scrollToSection('food')} className="hover:line-through transition">Organic Kitchen</button>
          <button onClick={() => scrollToSection('booking')} className={`px-8 py-3 transition-all border font-bold ${scrolled ? 'bg-pure-white text-pure-black border-black' : 'bg-white text-pure-black border-white'} hover:bg-black hover:text-white`}>
            Book Now
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img src="images/WhatsApp Image 2026-02-11 at 8.13.47 PM.jpeg" className="w-full h-full object-cover opacity-60 scale-105 transition duration-10000ms hover:scale-100" alt="Jaunpur View" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <span className="uppercase tracking-widest text-xs font-bold mb-6 block">Uttarakhandi Heritage</span>
          <h1 className="text-6xl md:text-9xl font-display italic mb-10 leading-tight">Authentic Living.</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12 opacity-80">
            Himalayan views, organic farming, and ancient traditions in the heart of Jaunpur.
          </p>
          <button onClick={() => scrollToSection('booking')} className="bg-accent-gold text-pure-black px-12 py-5 uppercase text-xs tracking-widest font-bold inline-block hover:bg-white transition-all border border-accent-gold shadow-2xl cursor-pointer">
            Enter the Village
          </button>
        </div>
      </section>

      {/* --- USP SECTION (Clickable) --- */}
      <div className="bg-pure-white py-20 border-b border-black">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-xs font-bold uppercase tracking-widest">
          <button onClick={() => scrollToSection('culture')} className="group cursor-pointer">
            <span className="block text-2xl mb-4 group-hover:scale-125 transition duration-300">🏔️</span> Mountain Views
          </button>
          <button onClick={() => scrollToSection('food')} className="group cursor-pointer">
            <span className="block text-2xl mb-4 group-hover:scale-125 transition duration-300">🍲</span> Organic Food
          </button>
          <button onClick={() => scrollToSection('culture')} className="group cursor-pointer">
            <span className="block text-2xl mb-4 group-hover:scale-125 transition duration-300">🕉️</span> Ancient Mandirs
          </button>
          <button onClick={() => scrollToSection('culture')} className="group cursor-pointer">
            <span className="block text-2xl mb-4 group-hover:scale-125 transition duration-300">🐄</span> Village Life
          </button>
        </div>
      </div>

      {/* --- CULTURE SECTION --- */}
      <section id="culture" className="py-32 px-10 max-w-7xl mx-auto bg-pure-white">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="relative border-l border-black pl-4">
            <img src="images/WhatsApp Image 2026-02-11 at 6.54.15 PM.jpeg" className="w-full aspect-4/5 object-cover grayscale hover:grayscale-0 transition duration-1000" alt="Village Life" />
          </div>
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-10 tracking-tighter uppercase text-pure-black">VIRASAT.</h2>
            <p className="text-pure-black leading-relaxed mb-10 text-lg font-medium italic">
              "Gaon mein pasu-palan, bageeche aur kheti ka asli anubhav."
            </p>
            <p className="text-pure-black leading-relaxed mb-10 opacity-70">
              Humare homestay mein aapko Jaunpur ke paramparik tyohar aur sudh hawa milegi. Aap bageecho se taaza phal tod sakte hain aur pahadi jeevan ko karib se dekh sakte hain.
            </p>
            <div className="space-y-6 text-xs font-bold uppercase tracking-widest">
              <p className="border-b border-black/10 pb-4">01/ Traditional Architecture</p>
              <p className="border-b border-black/10 pb-4">02/ Heritage Village Walks</p>
              <p className="border-b border-black/10 pb-4">03/ Organic Farming Sessions</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOD SECTION --- */}
      <section id="food" className="py-32 bg-pure-white text-pure-black text-center">
        <div className="max-w-5xl mx-auto px-10">
          <h2 className="text-5xl md:text-8xl font-display mb-12 italic tracking-tighter">Pure Kitchen.</h2>
          <p className="text-xl opacity-70 leading-relaxed mb-20 italic font-light max-w-3xl mx-auto">
            "Mandua ki roti, Gahat ki daal aur ghar ka makkhan—wohi swad jo hamare apne khet se aata hai."
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className = "text-center">
            <img src="images/WhatsApp Image 2026-02-11 at 8.14.44 PM (1).jpeg" className="w-full h-125 object-cover border border-black/20 p-2 grayscale hover:grayscale-0 transition duration-500" alt= "Traditional Food"  />
              <p className="text-pure-black text-xs font-bold uppercase tracking-widest mt-2">Traditional Food</p>
              </div>
            <div className="text-center mt-8 md:mt-0">
            <img src="images/WhatsApp Image 2026-02-11 at 8.14.53 PM (1).jpeg" className="w-full h-125 object-cover border border-black/20 p-2 grayscale hover:grayscale-0 transition duration-500" alt="Farming" />
            <p className="text-pure-black text-xs font-bold uppercase tracking-widest mt-2">Farming</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- BOOKING SECTION --- */}
      <section id="booking" className="py-32 bg-pure-white px-10">
        <div className="max-w-5xl mx-auto border border-black flex flex-col md:flex-row shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
          <div className="md:w-1/2 bg-pure-white p-16 text-pure-black flex flex-col justify-between">
          <div>
            <h3 className="text-5xl font-display mb-12 italic text-pure-black">Booking.</h3>
            <p className="opacity-70 font-light mb-12 uppercase tracking-widest text-pure-black">
            Miriyagaon , Nainbagh Jaunpur (Tehri Garhwal) Uttarakhand
            </p>
          </div>
            <div className="space-y-4 text-xs font-bold tracking-widest uppercase text-pure-black">
              <p>📍 Miriyagaon , Nainbagh Jaunpur</p>
              <p>📞 +91 9410505636</p>
            </div>
          </div>
          <form ref={formRef} onSubmit={sendEmail} className="md:w-1/2 p-16 space-y-10">
            <input type="text" name="from_name" placeholder="YOUR NAME" className="w-full border-b border-black py-4 outline-none font-bold text-xs tracking-widest bg-transparent text-black" required />
            <input type="tel" name="phone_number" placeholder="PHONE NUMBER" className="w-full border-b border-black py-4 outline-none font-bold text-xs tracking-widest bg-transparent text-black" required />
            <select name="experience_type" className="w-full border-b border-black py-4 outline-none font-bold text-xs tracking-widest bg-transparent text-black">
              <option value="Homestay">SELECT: HOMESTAY</option>
              <option value="Camping">SELECT: CAMPING</option>
            </select>
            <button type="submit" className="w-full bg-pure-white text-pure-black py-6 uppercase text-xs tracking-widest font-bold border border-black hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">
              Confirm Inquiry
            </button>
            {status && (
              <p className="text-center font-bold text-xs tracking-widest mt-4 uppercase animate-pulse">
                {status}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* --- FOOTER & SOCIALS --- */}
      <footer className="py-24 bg-pure-white border-t border-black text-center px-10">
        <div className="font-display text-4xl font-bold text-pure-black mb-6 tracking-tighter uppercase italic">JAUNPUR SOUL</div>
      
        {/* Social Icons */}
        <div className="flex justify-center space-x-8 mb-10">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-2xl hover:scale-125 transition duration-300">
            <i className="fab fa-facebook-f text-pure-black"></i> {/* FontAwesome icon example */}
            <span className="text-xs font-bold tracking-widest uppercase">Facebook</span>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-2xl hover:scale-125 transition duration-300">
            <i className="fab fa-instagram text-pure-black"></i>
            <span className="text-xs font-bold tracking-widest uppercase">Instagram</span>
          </a>
        </div>

        {/* Developer Credit */}
      <p className="text-[10px] text-black/60 uppercase tracking-[0.3em] mb-4">
        Designed & Developed by <span className="font-bold border-b border-black">Manish Aswal</span>
      </p>

        <p className="text-xs text-black/40 uppercase tracking-widest">© 2026 Crafted for Jaunpur Heritage Tourism</p>
      </footer>

      {/* --- WHATSAPP FLOATING BUTTON --- */}
      <a 
        href="https://wa.me/919410505636?text=Hi, I am interested in Jaunpur Soul Homestay." 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-100 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>

    </div>
  );
}

export default App;