/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  MessageCircle, 
  CheckCircle2, 
  Star, 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Facebook, 
  ChevronRight,
  ArrowRight,
  ShoppingBag,
  Home,
  Zap
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Produk', href: '#produk' },
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Cara Pesan', href: '#cara-pesan' },
    { name: 'Lokasi', href: '#lokasi' },
  ];

  const waLink = "https://wa.me/6285169175438?text=Halo%2C%20saya%20mau%20pesan%20Kue%20Bolu%20Pisang";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-display font-bold text-primary">🍌 Kue Bolu Viral 15000</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="font-medium text-text-main hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
          <a 
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
          >
            <MessageCircle size={18} />
            Pesan Sekarang →
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-text-main" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden py-6 px-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-text-main border-b border-gray-100 pb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Pesan Sekarang
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const waLink = "https://wa.me/6285169175438?text=Halo%2C%20saya%20mau%20pesan%20Kue%20Bolu%20Pisang";

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden paper-texture">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center bg-accent/20 text-secondary px-4 py-1.5 rounded-full font-bold text-sm w-fit">
            🌟 Varian Baru & Terlaris — Kue Bolu Pisang
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-text-main">
            Lembut, Harum, dan Langsung dari Dapur Kami
          </h1>
          <p className="text-xl text-text-soft leading-relaxed max-w-lg">
            Kue Bolu Pisang kami dibuat setiap hari dengan pisang segar pilihan — manisnya pas, teksturnya bikin ketagihan. Hanya Rp 15.000!
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm font-semibold text-secondary">
            <div className="flex items-center gap-1.5"><CheckCircle2 size={16} /> Dibuat Setiap Pagi</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 size={16} /> Tanpa Pengawet</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 size={16} /> Siap Diantar ke Rumahmu</div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all group w-full sm:w-auto text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <ShoppingBag size={20} />
                Pesan via WhatsApp — Rp 15.000
              </span>
              <div className="absolute inset-0 shimmer opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </a>
            <a href="#produk" className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all">
              Lihat semua varian <ArrowRight size={18} />
            </a>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-sm font-medium text-text-soft">
              ⭐ 4.9/5 dari 200+ pelanggan setia di Lima Puluh Kota
            </span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-accent to-primary p-1 shadow-2xl floating">
            <div className="w-full h-full rounded-[22px] bg-bg-warm flex flex-col items-center justify-center relative overflow-hidden">
              <span className="text-9xl">🍌</span>
              <span className="mt-4 font-display text-3xl font-bold text-secondary">Kue Bolu Pisang</span>
              <div className="absolute top-4 right-4 bg-accent text-secondary font-accent text-2xl px-6 py-2 rounded-full -rotate-12 shadow-lg border-2 border-white">
                VIRAL!
              </div>
              <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur px-4 py-2 rounded-lg text-sm font-bold shadow-sm">
                Tersedia Hari Ini 🍌
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
        </motion.div>
      </div>

      {/* Wavy Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-bg-dark">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.23,103.19,114.49,107.47,172,107.47,223.45,107.47,274.84,101.48,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const features = [
    {
      icon: "🍌",
      title: "Pisang Segar Setiap Hari",
      body: "Kami tidak pakai pisang kemasan. Setiap loyang dibuat dari pisang Kepok matang yang dipilih langsung dari kebun lokal."
    },
    {
      icon: "🏠",
      title: "Resep Turun-Temurun",
      body: "Formula rahasia kami sudah teruji puluhan tahun. Tekstur bolu yang lembut dan mengembang sempurna bukan kebetulan — itu seni."
    },
    {
      icon: "✅",
      title: "Tanpa Bahan Pengawet",
      body: "100% alami. Kami bangga tidak memakai pengawet apapun. Makanya habis dalam sehari — karena memang selalu habis!"
    },
    {
      icon: "🚀",
      title: "Harga Bersahabat, Rasa Bintang Lima",
      body: "Rp 15.000 saja. Karena kami percaya makanan enak seharusnya bisa dinikmati semua orang, bukan cuma orang tertentu."
    }
  ];

  return (
    <section id="tentang" className="bg-bg-dark py-24 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent">Kenapa Kue Bolu Kami Beda?</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#3D2415] p-8 rounded-2xl border-l-4 border-accent hover:-translate-y-1 transition-all hover:shadow-[0_0_30px_rgba(245,200,66,0.1)]"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-white">{f.title}</h3>
              <p className="text-gray-300 leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductShowcase = () => {
  const waLink = "https://wa.me/6285169175438?text=Halo%2C%20saya%20mau%20pesan%20Kue%20Bolu%20";

  const products = [
    {
      id: 'original',
      name: 'Kue Bolu Original',
      desc: 'Klasik manis yang tidak pernah mengecewakan. Pilihan aman untuk semua usia dan semua selera.',
      price: 'Rp 15.000',
      emoji: '🍰'
    },
    {
      id: 'pandan',
      name: 'Kue Bolu Pandan',
      desc: 'Hijau segar, harum daun pandan asli. Kombinasi yang elegan dan cocok untuk hantaran atau arisan.',
      price: 'Rp 15.000',
      emoji: '🌿'
    },
    {
      id: 'keju',
      name: 'Kue Bolu Keju',
      desc: 'Taburan keju cheddar yang melimpah di atas bolu lembut. Favorit anak-anak dan yang suka gurih-manis.',
      price: 'Rp 19.900',
      emoji: '🧀'
    }
  ];

  return (
    <section id="produk" className="py-24 bg-bg-warm relative overflow-hidden">
      {/* Decorative Leaves */}
      <div className="absolute top-10 -left-20 opacity-10 rotate-45 pointer-events-none">
        <svg width="300" height="300" viewBox="0 0 100 100" fill="green"><path d="M50 0 C70 30 100 50 50 100 C0 50 30 30 50 0" /></svg>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Menu Pilihan Kami</h2>
          <p className="text-xl text-text-soft">Semua dibuat segar. Semua Rp 15.000.</p>
        </div>

        {/* Featured Product */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12 border border-gray-100 flex flex-col md:flex-row"
        >
          <div className="md:w-1/2 bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center p-12">
            <div className="text-center">
              <span className="text-9xl block mb-4">🍌</span>
              <span className="font-display text-2xl font-bold text-secondary">FOTO PRODUK</span>
            </div>
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center gap-6">
            <div className="flex flex-wrap gap-2">
              <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">🔥 TERLARIS</span>
              <span className="bg-accent text-secondary text-xs font-bold px-3 py-1 rounded-full">⭐ VARIAN UNGGULAN</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold">Kue Bolu Pisang</h3>
            <p className="text-lg text-text-soft leading-relaxed">
              Bolu lembut dengan aroma pisang yang menggoda. Setiap gigitan terasa harum manis alami dari pisang Kepok pilihan. Cocok untuk sarapan, oleh-oleh, atau camilan keluarga. Dijamin habis sebelum sore!
            </p>
            <div className="text-2xl font-bold text-primary">Rp 15.000 / buah</div>
            <a 
              href={waLink + "Pisang"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-4 rounded-full font-bold text-center hover:bg-secondary transition-all shadow-lg"
            >
              Pesan Sekarang 🛒
            </a>
          </div>
        </motion.div>

        {/* Other Products */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-50 flex flex-col gap-4 hover:-translate-y-2 transition-all"
            >
              <div className="h-48 bg-gray-50 rounded-xl flex items-center justify-center text-6xl">
                {p.emoji}
              </div>
              <h4 className="text-xl font-bold">{p.name}</h4>
              <p className="text-text-soft text-sm flex-grow">{p.desc}</p>
              <div className="font-bold text-primary text-lg">{p.price}</div>
              <a 
                href={waLink + p.name.replace('Kue Bolu ', '')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bg-warm text-primary border border-primary/20 py-2 rounded-full font-bold text-center hover:bg-primary hover:text-white transition-all"
              >
                Pesan via WA
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bulk Order */}
        <div className="mt-16 bg-primary/10 border-2 border-dashed border-primary/30 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">🎉 Pesan Banyak? Ada Harga Spesial!</h3>
          <p className="text-text-soft mb-6">Untuk pesanan 10 buah ke atas, hubungi kami langsung di WhatsApp untuk mendapatkan harga spesial dan pengiriman prioritas.</p>
          <a 
            href={waLink + "Borongan"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:underline"
          >
            Tanya Harga Borongan <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const stats = [
    { value: "500+", label: "Bolu yang sudah terjual", icon: <ShoppingBag /> },
    { value: "4.9/5", label: "Rating Rata-Rata Pelanggan", icon: <Star /> },
    { value: "200+", label: "Pelanggan Setia di Limapuluh Kota", icon: <Home /> }
  ];

  const testimonials = [
    {
      quote: "Saya udah langganan tiap minggu! Bolu Pisangnya tuh enak banget, lembutnya nggak ketulungan. Anak-anak juga suka!",
      name: "I** D***, Payakumbuh",
      tag: "Pelanggan Tetap"
    },
    {
      quote: "Beli buat oleh-oleh ke Padang. Semua pada nanyain belinya di mana. Langsung viral di keluarga besar haha!",
      name: "P** R****, Lima Puluh Kota",
      tag: "Pembeli Online"
    },
    {
      quote: "Harganya murce, rasanya premium. Bolu Pisangnya harum banget pas dibuka. Besok pasti beli lagi!",
      name: "S***, Bukittinggi",
      tag: "Pelanggan Baru"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Kata Pelanggan Kami</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl font-display font-bold text-primary mb-2">{s.value}</div>
              <div className="text-text-soft font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 overflow-x-auto pb-4 scrollbar-hide">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-bg-warm p-8 rounded-2xl border-t-4 border-primary shadow-sm min-w-[300px]"
            >
              <div className="flex text-accent mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-lg italic font-accent text-text-main mb-6 leading-relaxed">
                "{t.quote}"
              </p>
              <div>
                <div className="font-bold text-text-main">{t.name}</div>
                <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded mt-1">
                  {t.tag}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowToOrder = () => {
  const steps = [
    {
      icon: <MessageCircle size={32} />,
      title: "Hubungi Kami",
      body: "Klik tombol WhatsApp di bawah. Langsung terhubung ke kami — no ribet, no antrian online."
    },
    {
      icon: <ShoppingBag size={32} />,
      title: "Pilih Varian",
      body: "Bilang mau bolu apa: Pisang, Original, Pandan, atau Keju. Bisa juga minta kombinasi campuran!"
    },
    {
      icon: <Zap size={32} />,
      title: "Terima & Nikmati",
      body: "Ambil langsung di toko atau kami antar ke lokasi kamu (area Lima Puluh Kota & sekitarnya)."
    }
  ];

  const waLink = "https://wa.me/6285169175438?text=Halo%2C%20saya%20mau%20pesan%20Kue%20Bolu";

  return (
    <section id="cara-pesan" className="py-24 bg-bg-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent">Cara Pesan — Mudah Banget!</h2>
          <p className="text-gray-400">Hanya 3 langkah simple untuk menikmati bolu viral kami.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dashed border-accent/30 z-0"></div>
          
          {steps.map((s, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 bg-accent text-secondary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(245,200,66,0.3)]">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold text-white">{s.title}</h3>
              <p className="text-gray-300 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-4">Siap Memesan Sekarang?</h3>
          <p className="text-gray-300 mb-8">Stok terbatas setiap harinya. Jangan sampai kehabisan!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-green-700 transition-all"
            >
              <MessageCircle size={24} />
              Pesan via WhatsApp
            </a>
            <a 
              href="tel:+6285169175438"
              className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
            >
              <Phone size={24} />
              Telepon Kami
            </a>
          </div>
          <div className="mt-6 text-accent font-bold flex items-center justify-center gap-2">
            <Clock size={18} />
            ⏰ Pemesanan hari ini untuk pengiriman besok pagi
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <section id="lokasi" className="py-24 bg-bg-warm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Temukan Kami</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary"><MapPin /></div>
                <div>
                  <div className="font-bold text-lg">Alamat</div>
                  <p className="text-text-soft mb-2">Toko Kue Bolu 15000, Disamping mushalla ar-rahmah, Kopua jorong tiakar guguk kenagarian guguak , lapan koto dekat, tikungan kopuah, Kec. Guguak, Kabupaten Lima Puluh Kota, Sumatera Barat 26253</p>
                  <a 
                    href="https://www.google.com/maps/place/Kue+Bolu+Viral+15000/@-0.1600098,100.5625612,20.25z/data=!4m6!3m5!1s0x2fd54d85b87c3795:0x95b922021d55048!8m2!3d-0.1601686!4d100.5628139!16s%2Fg%2F11z2wqnzv9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-bold text-sm flex items-center gap-1 hover:underline"
                  >
                    <MapPin size={14} /> Lihat di Google Maps
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary"><Phone /></div>
                <div>
                  <div className="font-bold text-lg">Kontak</div>
                  <p className="text-text-soft">+62 851-6917-5438 (WhatsApp & Telepon)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary"><Clock /></div>
                <div>
                  <div className="font-bold text-lg">Jam Buka</div>
                  <p className="text-text-soft">Senin – Sabtu : 07.00 – 17.00 WIB</p>
                  <p className="text-text-soft">Minggu : 08.00 – 14.00 WIB</p>
                </div>
              </div>
            </div>

            <div>
              <div className="font-bold text-lg mb-4">Ikuti Kami</div>
              <div className="flex gap-4">
                <a href="#" className="bg-white p-3 rounded-full shadow-md hover:text-primary transition-all"><Instagram /></a>
                <a href="#" className="bg-white p-3 rounded-full shadow-md hover:text-primary transition-all"><Facebook /></a>
                <a href="#" className="bg-white p-3 rounded-full shadow-md hover:text-primary transition-all text-2xl flex items-center justify-center">🎵</a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] border-4 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3989.7601!2d100.5628139!3d-0.1601686!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd54d85b87c3795%3A0x95b922021d55048!2sKue%20Bolu%20Viral%2015000!5e0!3m2!1sid!2sid!4v1711512345678!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-text-soft text-sm">
          <p>© 2024 Kue Bolu Viral 15000. Dibuat dengan ❤️ di Lima Puluh Kota.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Kebijakan Privasi</a>
            <a href="#" className="hover:text-primary">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-secondary">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <ProductShowcase />
        <SocialProof />
        <HowToOrder />
        <Footer />
      </main>
      
      {/* Floating WA Button for Mobile */}
      <a 
        href="https://wa.me/6285169175438" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:hidden bg-green-600 text-white p-4 rounded-full shadow-2xl z-40 animate-bounce"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
