import './style.css'
import { createIcons, icons } from 'lucide'

document.querySelector('#app').innerHTML = `
  <!-- Hero -->
  <section class="relative min-h-screen flex flex-col items-center justify-center px-6 bg-[#1C1C1C]">
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-tr from-[#E4572E]/20 via-transparent to-black"></div>
    <div class="relative z-10 text-center">
      <h1 class="text-5xl md:text-7xl font-bold tracking-tight text-[#E4572E] drop-shadow-forge">
        herp<span class="text-white drop-shadow-forgeWhite">Forge</span>
      </h1>
      <p class="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto">
        Track your animals. Visualize genetics. Showcase your collection — anywhere.
      </p>
    </div>
  </section>

  <!-- Features Section -->
  <section class="bg-[#111111] text-gray-300 py-16 px-6">
    <h2 class="text-3xl md:text-4xl font-bold text-center text-white">Core Features</h2>
    <div class="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-center">
      <div class="transition transform hover:scale-105 duration-500">
        <div class="flex justify-center mb-4">
          <i data-lucide="rows" class="w-12 h-12"></i>
        </div>
        <h3 class="text-xl font-semibold text-white">Collection Management</h3>
        <p class="mt-2 text-gray-400">Keep every detail organized — feedings, sheds, weights, and notes, all in one place.</p>
      </div>
      <div class="transition transform hover:scale-105 duration-500">
        <div class="flex justify-center mb-4">
          <i data-lucide="dna" class="w-12 h-12"></i>
        </div>
        <h3 class="text-xl font-semibold text-white">Genetics Insights</h3>
        <p class="mt-2 text-gray-400">Pair smarter. Forecast odds, outcomes, and ROI with breeder-grade precision.</p>
      </div>
      <div class="transition transform hover:scale-105 duration-500">
        <div class="flex justify-center mb-4">
          <i data-lucide="infinity" class="w-12 h-12"></i>
        </div>
        <h3 class="text-xl font-semibold text-white">Showcase Profiles</h3>
        <p class="mt-2 text-gray-400">Share polished, mobile-ready animal pages — with direct links to your storefront or sales platform.</p>
      </div>
      <div class="transition transform hover:scale-105 duration-500">
        <div class="flex justify-center mb-4">
          <i data-lucide="smartphone" class="w-12 h-12"></i>
        </div>
        <h3 class="text-xl font-semibold text-white">Anywhere Access</h3>
        <p class="mt-2 text-gray-400">Manage your collection at the rack, at a show, or on the road — from any device.</p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-[#1C1C1C] text-gray-500 py-6 text-center text-sm flex flex-col items-center space-y-2">
    <p>© 2025 herpForge. Built for breeders, by breeders.</p>
    <p class="text-xs text-gray-600">v1.5.3</p>
  </footer>
`

// Run Lucide after DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  createIcons({
    icons: {
      Rows: icons.Rows,
      Dna: icons.Dna,
      Infinity: icons.Infinity,
      Smartphone: icons.Smartphone
    },
    attrs: {
      color: '#E4572E',
      width: 48,
      height: 48
    }
  })
})
