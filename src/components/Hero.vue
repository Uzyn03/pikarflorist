<script setup>
import CommonButton from "./elements/button/CommonButton.vue";
import { RouterLink } from "vue-router";
import { ref, onMounted } from "vue";

const phoneNumber = "6283160641549";
const message = "Hallo pikar florist Mau Pesan Bunga Buat Hari Ini";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

// Animation states
const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});
</script>

<template>
  <section class="relative bg-cream overflow-hidden">
    <!-- Desktop Layout -->
    <div class="hidden lg:block">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-8 min-h-[85vh] items-center py-12">
          <!-- Left Content -->
          <div 
            class="space-y-8 transition-all duration-1000 transform"
            :class="isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'"
          >
            <!-- Small Title -->
            <div class="inline-block">
              <span class="text-sm tracking-[0.3em] uppercase text-lightBeige border-b border-lightBeige pb-1">
                Fresh & Beautiful
              </span>
            </div>

            <!-- Main Heading -->
            <h1 class="font-cormorant text-4xl xl:text-5xl font-bold text-darkBeige leading-tight">
              Rangkaian bunga pilihan
              <br />
              <span class="text-golden">untuk momen istimewa</span>
            </h1>

            <!-- Description -->
            <p class="text-lg text-lightBeige leading-relaxed max-w-lg">
              Hadirkan keindahan dan kesegaran bunga pilihan untuk setiap momen spesial Anda. 
              Kami menyediakan rangkaian bunga premium dengan 
              <span class="font-semibold text-darkBeige">layanan pengiriman cepat</span> 
              dan 
              <span class="font-semibold text-darkBeige">terpercaya</span>.
            </p>

            <!-- Stats Row -->
            <div class="flex items-center gap-8 pt-4">
              <div class="text-center">
                <div class="text-4xl font-bold font-cormorant text-darkBeige">100+</div>
                <div class="text-sm text-lightBeige mt-1">Jenis Bunga</div>
              </div>
              <div class="h-12 w-px bg-lightBeige/30"></div>
              <div class="text-center">
                <div class="text-4xl font-bold font-cormorant text-darkBeige">250+</div>
                <div class="text-sm text-lightBeige mt-1">Gaya Unik</div>
              </div>
              <div class="h-12 w-px bg-lightBeige/30"></div>
              <div class="text-center">
                <div class="text-4xl font-bold font-cormorant text-darkBeige">1M+</div>
                <div class="text-sm text-lightBeige mt-1">Pelanggan Puas</div>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex items-center gap-4 pt-4">
              <RouterLink to="/AllProduct">
                <button class="px-8 py-3.5 bg-darkBeige text-white rounded-full hover:bg-golden transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Lihat Koleksi
                </button>
              </RouterLink>
              <a 
                :href="whatsappUrl" 
                target="_blank"
                class="px-8 py-3.5 border-2 border-darkBeige text-darkBeige rounded-full hover:bg-darkBeige hover:text-white transition-all duration-300 font-medium"
              >
                Hubungi Kami
              </a>
            </div>

            <!-- Trust Badges -->
            <div class="flex items-center gap-6 pt-6 text-sm text-lightBeige">
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-golden" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>100% Fresh</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-golden" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
                </svg>
                <span>Pengiriman Cepat</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-golden" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span>Kualitas Terjamin</span>
              </div>
            </div>
          </div>

          <!-- Right Image Section -->
          <div 
            class="relative h-[600px] transition-all duration-1000 transform"
            :class="isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'"
          >
            <!-- Main Image with Arch Effect -->
            <div class="relative w-full h-full">
              <!-- Decorative Circle Background -->
              <div class="absolute -top-8 -right-8 w-96 h-96 bg-golden/10 rounded-full blur-3xl"></div>
              
              <!-- Main Image Container -->
              <div class="relative z-10 h-full rounded-tl-[200px] rounded-br-[200px] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&auto=format&fit=crop"
                  alt="Beautiful Flower Arrangement"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                
                <!-- Overlay Badge -->
                <div class="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg">
                  <div class="flex items-center gap-3">
                    <div class="text-3xl">🌸</div>
                    <div>
                      <div class="text-sm text-lightBeige">Bunga Terlaris</div>
                      <div class="font-semibold text-darkBeige">Hari Ini</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Floating Cards -->
              <div class="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl z-20">
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 bg-golden/20 rounded-full flex items-center justify-center">
                    <span class="text-2xl">⭐</span>
                  </div>
                  <div>
                    <div class="text-xs text-lightBeige">Rating</div>
                    <div class="font-bold text-darkBeige">4.9/5.0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile & Tablet Layout -->
    <div class="lg:hidden relative min-h-screen">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&auto=format&fit=crop"
          alt="Hero Background"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-darkBeige/80 via-darkBeige/70 to-darkBeige/90"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div class="flex flex-col justify-between min-h-[calc(100vh-8rem)]">
          <!-- Top Content -->
          <div class="space-y-6">
            <!-- Small Badge -->
            <div class="inline-block">
              <span class="text-xs tracking-[0.3em] uppercase text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                Premium Florist
              </span>
            </div>

            <!-- Main Heading -->
            <h1 class="font-cormorant text-3xl sm:text-6xl font-bold text-white leading-tight">
              Rangkaian bunga pilihan <br />
              untuk momen istimewa
            </h1>

            <!-- Description -->
            <p class="text-white/90 text-lg leading-relaxed max-w-md">
              Hadirkan keindahan dan kesegaran bunga pilihan untuk setiap momen spesial Anda dengan 
              <span class="font-semibold text-white">layanan terpercaya</span>.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-3 pt-4">
              <RouterLink to="/AllProduct" class="w-full sm:w-auto">
                <button class="w-full sm:w-auto px-8 py-3.5 bg-white text-darkBeige rounded-full hover:bg-golden hover:text-white transition-all duration-300 font-medium shadow-lg">
                  Lihat Koleksi
                </button>
              </RouterLink>
              <a 
                :href="whatsappUrl" 
                target="_blank"
                class="w-full sm:w-auto px-8 py-3.5 border-2 border-white text-white rounded-full hover:bg-white hover:text-darkBeige transition-all duration-300 font-medium text-center"
              >
                Hubungi Kami
              </a>
            </div>
          </div>

          <!-- Bottom Stats -->
          <div class="grid grid-cols-3 gap-4 mt-12">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div class="text-3xl mb-2">🌸</div>
              <div class="text-2xl font-bold font-cormorant text-white">100+</div>
              <div class="text-xs text-white/80 mt-1">Jenis Bunga</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div class="text-3xl mb-2">✨</div>
              <div class="text-2xl font-bold font-cormorant text-white">250+</div>
              <div class="text-xs text-white/80 mt-1">Gaya Unik</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
              <div class="text-3xl mb-2">⭐</div>
              <div class="text-2xl font-bold font-cormorant text-white">1M+</div>
              <div class="text-xs text-white/80 mt-1">Pelanggan</div>
            </div>
          </div>

          <!-- Trust Badges Mobile -->
          <div class="flex flex-wrap justify-center gap-4 mt-8 text-sm text-white/90">
            <div class="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>100% Fresh</span>
            </div>
            <div class="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
              </svg>
              <span>Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="hidden lg:block absolute top-20 left-10 w-20 h-20 border-2 border-golden/20 rounded-full"></div>
    <div class="hidden lg:block absolute bottom-20 right-10 w-16 h-16 border-2 border-golden/20 rounded-full"></div>
  </section>
</template>

<style scoped>
/* Optional: Add any additional custom styles */
</style>