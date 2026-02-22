<script setup>
import CommonButton from './elements/button/CommonButton.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <section id="ourProduct" class="bg-white py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
        <!-- Left: Title -->
        <div class="space-y-4">
          <div class="inline-block">
            <span
              class="text-sm tracking-[0.3em] uppercase text-lightBeige border-b border-lightBeige pb-1"
            >
              Koleksi Kami
            </span>
          </div>
          <h2
            class="font-cormorant text-4xl lg:text-5xl xl:text-6xl font-bold text-darkBeige leading-tight"
          >
            Temukan Bunga<br />
            <span class="text-golden">Sempurna Anda</span>
          </h2>
        </div>

        <!-- Right: Description -->
        <div class="flex flex-col justify-center space-y-6">
          <p class="text-lg text-lightBeige leading-relaxed">
            Jelajahi koleksi bunga pilihan kami untuk setiap momen spesial. Dari
            bouquet romantis hingga standing flower elegant, kami hadirkan yang
            terbaik untuk Anda.
          </p>
          <div>
            <RouterLink to="/AllProduct">
              <button
                class="inline-flex items-center gap-2 px-8 py-3.5 bg-darkBeige text-white rounded-full hover:bg-golden transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Lihat Semua Produk
                <svg
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- Product Categories Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        <!-- Category 1: Bouquet -->
        <RouterLink to="/Bouquet" class="group">
          <div
            class="relative overflow-hidden rounded-3xl bg-cream shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            <!-- Image Container -->
            <div class="relative h-80 lg:h-96 overflow-hidden">
              <img
                src="https://res.cloudinary.com/dchvw0l0h/image/upload/v1771785963/bouquet-home_x43zgw.jpg"
                alt="Hand Bouquet"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <!-- Gradient Overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-darkBeige/80 via-darkBeige/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"
              ></div>

              <!-- Floating Badge -->
              <div
                class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
              >
                <span
                  class="text-xs font-semibold text-darkBeige tracking-wider"
                  >POPULAR</span
                >
              </div>
            </div>

            <!-- Content -->
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3
                class="font-cormorant text-3xl font-bold mb-2 transform transition-transform duration-300 group-hover:translate-x-2"
              >
                Hand Bouquet
              </h3>
              <p
                class="text-white/90 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
              >
                Rangkaian bunga tangan untuk momen spesial
              </p>
              <div
                class="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75"
              >
                <span>Lihat Koleksi</span>
                <svg
                  class="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </RouterLink>

        <!-- Category 2: Karangan Bunga -->
        <RouterLink to="/KaranganBunga" class="group">
          <div
            class="relative overflow-hidden rounded-3xl bg-cream shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            <!-- Image Container -->
            <div class="relative h-80 lg:h-96 overflow-hidden">
              <img
                src="https://res.cloudinary.com/dchvw0l0h/image/upload/v1771785964/karangbunga-home_louoq3.jpg"
                alt="Karangan Bunga"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <!-- Gradient Overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-darkBeige/80 via-darkBeige/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"
              ></div>

              <!-- Floating Badge -->
              <div
                class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
              >
                <span
                  class="text-xs font-semibold text-darkBeige tracking-wider"
                  >PREMIUM</span
                >
              </div>
            </div>

            <!-- Content -->
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3
                class="font-cormorant text-3xl font-bold mb-2 transform transition-transform duration-300 group-hover:translate-x-2"
              >
                Karangan Bunga
              </h3>
              <p
                class="text-white/90 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
              >
                Karangan bunga untuk berbagai acara
              </p>
              <div
                class="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75"
              >
                <span>Lihat Koleksi</span>
                <svg
                  class="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </RouterLink>

        <!-- Category 3: Standing Flower -->
        <RouterLink to="/StandingFlower" class="group">
          <div
            class="relative overflow-hidden rounded-3xl bg-cream shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            <!-- Image Container -->
            <div class="relative h-96 lg:h-96 overflow-hidden">
              <img
                src="https://res.cloudinary.com/dchvw0l0h/image/upload/v1771785964/standing-flower-home_ij1ywd.jpg"
                alt="Standing Flower"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <!-- Gradient Overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-darkBeige/80 via-darkBeige/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"
              ></div>

              <!-- Floating Badge -->
              <div
                class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
              >
                <span
                  class="text-xs font-semibold text-darkBeige tracking-wider"
                  >ELEGANT</span
                >
              </div>
            </div>

            <!-- Content -->
            <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3
                class="font-cormorant text-3xl font-bold mb-2 transform transition-transform duration-300 group-hover:translate-x-2"
              >
                Standing Flower
              </h3>
              <p
                class="text-white/90 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
              >
                Standing flower untuk acara formal
              </p>
              <div
                class="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75"
              >
                <span>Lihat Koleksi</span>
                <svg
                  class="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>

      <!-- Bottom CTA Section -->
      <div class="mt-16 lg:mt-20 text-center">
        <div class="bg-cream rounded-3xl p-8 lg:p-12">
          <h3
            class="font-cormorant text-3xl lg:text-4xl font-bold text-darkBeige mb-4"
          >
            Tidak Menemukan Yang Anda Cari?
          </h3>
          <p class="text-lightBeige text-lg mb-6 max-w-2xl mx-auto">
            Hubungi kami untuk konsultasi gratis dan dapatkan rekomendasi bunga
            yang sempurna untuk acara Anda
          </p>
          <a
            href="https://wa.me/6283160641549?text=Halo%20pikar%20florist%2C%20saya%20ingin%20konsultasi"
            target="_blank"
            class="inline-flex items-center gap-2 px-8 py-3.5 bg-darkBeige text-white rounded-full hover:bg-golden transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              />
            </svg>
            Hubungi via WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Additional hover effects are handled via Tailwind classes */
</style>
