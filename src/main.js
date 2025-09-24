import './style.css'
import { createIcons, icons } from 'lucide'
import AOS from 'aos'
import 'aos/dist/aos.css'

document.querySelector('#app').innerHTML = `
  <!-- Hero -->
  <section class="relative min-h-screen flex flex-col items-center justify-center px-6 bg-[#1C1C1C]">
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-tr from-[#E4572E]/20 via-transparent to-black"></div>
    
    <!-- Hero Background SVG -->
    <div class="absolute inset-0 flex items-center justify-center opacity-10">
      <img src="/python-silhouette.svg" alt="Python silhouette" 
           class="max-w-2xl filter drop-shadow-[0_0_25px_rgba(228,87,46,0.7)]" />
    </div>

    <div class="relative z-10 text-center" data-aos="fade-up" data-aos-duration="800">
      <h1 class="text-5xl md:text-7xl font-bold tracking-tight text-[#E4572E] drop-shadow-forge">
        herp<span class="text-white drop-shadow-forgeWhite">Forge</span>
      </h1>
      <!-- Divider line -->
      <div class="mt-4 mb-6 h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#E4572E] to-transparent rounded-full animate-pulse"></div>
      <p class="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto">
        Track your animals. Visualize genetics. Showcase your collection — anywhere.
      </p>
      <!-- Tagline -->
      <p class="mt-4 text-base md:text-lg text-gray-400 italic">
        Built for breeders. Backed by data.
      </p>
      <!-- Scroll Nudge -->
      <div class="mt-10 animate-bounce">
        <i data-lucide="chevron-down" class="w-8 h-8 text-[#E4572E] mx-auto"></i>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section class="bg-[#111111] text-gray-300 py-16 px-6">
    <h2 class="text-3xl md:text-4xl font-bold text-center text-white" data-aos="fade-up">Core Features</h2>
    <div class="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-center">
      <div class="transition transform hover:scale-105 duration-500" data-aos="fade-up" data-aos-delay="100">
        <div class="flex justify-center mb-4">
          <i data-lucide="rows" class="w-12 h-12"></i>
        </div>
        <h3 class="text-xl font-semibold text-white">Collection Management</h3>
        <p class="mt-2 text-gray-400">Keep every detail organized — feedings, sheds, weights, and notes, all in one place.</p>
      </div>
      <div class="transition transform hover:scale-105 duration-500" data-aos="fade-up" data-aos-delay="200">
        <div class="flex justify-center mb-4">
          <i data-lucide="dna" class="w-12 h-12"></i>
        </div>
        <h3 class="text-xl font-semibold text-white">Genetics Insights</h3>
        <p class="mt-2 text-gray-400">Pair smarter. Forecast odds, outcomes, and ROI with breeder-grade precision.</p>
      </div>
      <div class="transition transform hover:scale-105 duration-500" data-aos="fade-up" data-aos-delay="300">
        <div class="flex justify-center mb-4">
          <i data-lucide="infinity" class="w-12 h-12"></i>
        </div>
        <h3 class="text-xl font-semibold text-white">Showcase Profiles</h3>
        <p class="mt-2 text-gray-400">Share polished, mobile-ready animal pages — with direct links to your storefront or sales platform.</p>
      </div>
      <div class="transition transform hover:scale-105 duration-500" data-aos="fade-up" data-aos-delay="400">
        <div class="flex justify-center mb-4">
          <i data-lucide="smartphone" class="w-12 h-12"></i>
        </div>
        <h3 class="text-xl font-semibold text-white">Anywhere Access</h3>
        <p class="mt-2 text-gray-400">Manage your collection at the rack, at a show, or on the road — from any device.</p>
      </div>
    </div>
  </section>

  <!-- Why herpForge Section -->
  <section class="bg-[#1C1C1C] text-gray-300 py-16 px-6">
    <h2 class="text-3xl md:text-4xl font-bold text-center text-white" data-aos="fade-up">Why herpForge?</h2>
    <div class="mt-10 grid gap-10 md:grid-cols-3 text-center">
      <div data-aos="fade-up" data-aos-delay="100">
        <div class="flex justify-center mb-4">
          <i data-lucide="target" class="w-12 h-12"></i>
        </div>
        <h3 class="text-xl font-semibold text-white">Purpose-Built</h3>
        <p class="mt-2 text-gray-400">Designed specifically for reptile keepers and breeders.</p>
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <div class="flex justify-center mb-4">
          <i data-lucide="bar-chart-3" class="w-12 h-12"></i>
        </div>
        <h3 class="text-xl font-semibold text-white">Data You Can Use</h3>
        <p class="mt-2 text-gray-400">Turn logs into insights that guide your pairings and planning.</p>
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        <div class="flex justify-center mb-4">
          <i data-lucide="globe" class="w-12 h-12"></i>
        </div>
        <h3 class="text-xl font-semibold text-white">Accessible Anywhere</h3>
        <p class="mt-2 text-gray-400">Manage your collection from rack-side, shows, or the field.</p>
      </div>
    </div>
  </section>

  <!-- Roadmap Section -->
  <section class="bg-[#111111] text-gray-300 py-16 px-6">
    <h2 class="text-3xl md:text-4xl font-bold text-center text-white" data-aos="fade-up">On the Horizon</h2>
    <ul class="mt-8 max-w-2xl mx-auto space-y-8 text-center">
      <li class="flex flex-col items-center space-y-2" data-aos="fade-up" data-aos-delay="100">
        <i data-lucide="shopping-cart" class="w-8 h-8 text-[#E4572E] transition-transform transform hover:scale-110 hover:drop-shadow-forge"></i>
        <span>Marketplace integrations (MorphMarket, Shopify, and more)</span>
      </li>
      <li class="flex flex-col items-center space-y-2" data-aos="fade-up" data-aos-delay="200">
        <i data-lucide="users" class="w-8 h-8 text-[#E4572E] transition-transform transform hover:scale-110 hover:drop-shadow-forge"></i>
        <span>Multi-collection & team support</span>
      </li>
      <li class="flex flex-col items-center space-y-2" data-aos="fade-up" data-aos-delay="300">
        <i data-lucide="file-text" class="w-8 h-8 text-[#E4572E] transition-transform transform hover:scale-110 hover:drop-shadow-forge"></i>
        <span>Export to professional printable records</span>
      </li>
    </ul>
  </section>

  <!-- Footer -->
  <footer class="bg-[#1C1C1C] text-gray-500 py-6 text-center text-sm flex flex-col items-center space-y-2">
    <p>© 2025 herpForge. Built for breeders, by breeders.</p>
    <p class="text-xs text-gray-600">v1.6.2</p>
  </footer>
`

// Run Lucide after DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  createIcons({
    icons: {
      Rows: icons.Rows,
      Dna: icons.Dna,
      Infinity: icons.Infinity,
      Smartphone: icons.Smartphone,
      Target: icons.Target,
      BarChart3: icons.BarChart3,
      Globe: icons.Globe,
      ChevronDown: icons.ChevronDown,
      ShoppingCart: icons.ShoppingCart,
      Users: icons.Users,
      FileText: icons.FileText
    },
    attrs: {
      color: '#E4572E',
      width: 48,
      height: 48
    }
  })

  // Initialize AOS
  AOS.init()
})
