<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const phoneNumber = '6283160641549';
const message = 'Hallo pikar florist Mau Pesan Bunga Buat Hari Ini';
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<template>
  <section class="bg-cream border-b border-darkBeige/10">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20 lg:h-24">
        <!-- LEFT SECTION: Desktop Menu -->
        <div class="hidden lg:flex items-center gap-8 flex-1">
          <RouterLink
            to="/AllProduct"
            class="text-sm font-medium text-darkBeige hover:text-golden transition-colors"
          >
            Shop
          </RouterLink>
          <RouterLink
            :to="{ name: 'home', hash: '#aboutUs' }"
            class="text-sm font-medium text-darkBeige hover:text-golden transition-colors"
          >
            Tentang Kami
          </RouterLink>
          <RouterLink
            :to="{ name: 'home', hash: '#contactUs' }"
            class="text-sm font-medium text-darkBeige hover:text-golden transition-colors"
          >
            Kontak
          </RouterLink>
        </div>

        <!-- MOBILE MENU BUTTON -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden p-2 text-darkBeige"
          aria-label="Toggle menu"
        >
          <svg
            v-if="!isMobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- CENTER: Brand Logo -->
        <div class="flex-1 flex justify-center lg:justify-center">
          <RouterLink to="/" class="flex flex-col items-center group">
            <span
              class="font-cormorant text-3xl lg:text-4xl tracking-[0.25em] text-darkBeige font-semibold transition-colors group-hover:text-golden"
            >
              PIKAR
            </span>
            <span
              class="text-xs lg:text-base tracking-[0.4em] text-lightBeige mt-0.5"
            >
              FLORIST
            </span>
          </RouterLink>
        </div>

        <!-- RIGHT SECTION: CTA Buttons -->
        <div class="flex items-center justify-end gap-3 flex-1">
          <!-- Desktop WhatsApp Button -->
          <a
            :href="whatsappUrl"
            target="_blank"
            class="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-darkBeige text-white text-sm font-medium hover:bg-golden transition-all duration-300"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              />
            </svg>
            WhatsApp
          </a>

          <!-- Mobile Phone Button -->
          <a
            href="tel:+6283160641549"
            target="_blank"
            class="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-darkBeige text-white hover:bg-golden transition-all duration-300"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- Desktop Category Navigation -->
      <div
        class="hidden lg:flex items-center justify-center gap-8 pb-4 border-t border-darkBeige/10 pt-4"
      >
        <RouterLink
          to="/Bouquet"
          class="text-base tracking-wider uppercase text-darkBeige/70 hover:text-darkBeige transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-darkBeige hover:after:w-full after:transition-all after:duration-500"
        >
          Hand Bouquet
        </RouterLink>
        <RouterLink
          to="/KaranganBunga"
          class="text-base tracking-wider uppercase text-darkBeige/70 hover:text-darkBeige transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-darkBeige hover:after:w-full after:transition-all after:duration-500"
        >
          Karangan Bunga
        </RouterLink>
        <RouterLink
          to="/StandingFlower"
          class="text-base tracking-wider uppercase text-darkBeige/70 hover:text-darkBeige transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-darkBeige hover:after:w-full after:transition-all after:duration-500"
        >
          Standing Flower
        </RouterLink>
        <RouterLink
          :to="{ name: 'home', hash: '#bestseller' }"
          class="text-base tracking-wider uppercase text-darkBeige/70 hover:text-darkBeige transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-darkBeige hover:after:w-full after:transition-all after:duration-500"
        >
          Best Seller
        </RouterLink>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        @click="closeMobileMenu"
        class="fixed inset-0 bg-black/30 z-40 lg:hidden"
      ></div>
    </Transition>

    <!-- Mobile Menu Drawer -->
    <Transition
      enter-active-class="transition-transform duration-300"
      leave-active-class="transition-transform duration-300"
      enter-from-class="-translate-x-full"
      leave-to-class="-translate-x-full"
    >
      <div
        v-if="isMobileMenuOpen"
        class="fixed top-0 left-0 h-full w-80 bg-cream shadow-2xl z-50 lg:hidden overflow-y-auto"
      >
        <div class="p-6">
          <!-- Close Button -->
          <button
            @click="closeMobileMenu"
            class="absolute top-6 right-6 text-darkBeige"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <!-- Brand in Mobile Menu -->
          <div class="mb-8">
            <RouterLink to="/" @click="closeMobileMenu" class="flex flex-col">
              <span
                class="font-cormorant text-3xl tracking-[0.25em] text-darkBeige font-semibold"
              >
                PIKAR
              </span>
              <span class="text-xs tracking-[0.4em] text-lightBeige mt-1">
                FLORIST
              </span>
            </RouterLink>
          </div>

          <!-- Mobile Navigation Links -->
          <nav class="space-y-1">
            <RouterLink
              to="/"
              @click="closeMobileMenu"
              class="block py-3 px-4 text-darkBeige hover:bg-darkBeige/5 rounded-lg transition-colors"
            >
              Beranda
            </RouterLink>

            <div class="border-t border-darkBeige/10 my-2"></div>

            <div class="py-2">
              <p
                class="px-4 text-xs tracking-wider uppercase text-lightBeige mb-2"
              >
                Produk Kami
              </p>
              <RouterLink
                to="/AllProduct"
                @click="closeMobileMenu"
                class="block py-3 px-4 text-darkBeige hover:bg-darkBeige/5 rounded-lg transition-colors"
              >
                Semua Produk
              </RouterLink>
              <RouterLink
                to="/Bouquet"
                @click="closeMobileMenu"
                class="block py-3 px-4 text-darkBeige hover:bg-darkBeige/5 rounded-lg transition-colors"
              >
                Hand Bouquet
              </RouterLink>
              <RouterLink
                to="/TableBouquet"
                @click="closeMobileMenu"
                class="block py-3 px-4 text-darkBeige hover:bg-darkBeige/5 rounded-lg transition-colors"
              >
                Table Bouquet
              </RouterLink>
              <RouterLink
                to="/KaranganBunga"
                @click="closeMobileMenu"
                class="block py-3 px-4 text-darkBeige hover:bg-darkBeige/5 rounded-lg transition-colors"
              >
                Karangan Bunga
              </RouterLink>
              <RouterLink
                to="/StandingFlower"
                @click="closeMobileMenu"
                class="block py-3 px-4 text-darkBeige hover:bg-darkBeige/5 rounded-lg transition-colors"
              >
                Standing Flower
              </RouterLink>
            </div>

            <div class="border-t border-darkBeige/10 my-2"></div>

            <RouterLink
              :to="{ name: 'home', hash: '#bestseller' }"
              @click="closeMobileMenu"
              class="block py-3 px-4 text-darkBeige hover:bg-darkBeige/5 rounded-lg transition-colors"
            >
              Best Seller
            </RouterLink>
            <RouterLink
              :to="{ name: 'home', hash: '#aboutUs' }"
              @click="closeMobileMenu"
              class="block py-3 px-4 text-darkBeige hover:bg-darkBeige/5 rounded-lg transition-colors"
            >
              Tentang Kami
            </RouterLink>
            <RouterLink
              :to="{ name: 'home', hash: '#contactUs' }"
              @click="closeMobileMenu"
              class="block py-3 px-4 text-darkBeige hover:bg-darkBeige/5 rounded-lg transition-colors"
            >
              Kontak
            </RouterLink>
          </nav>

          <!-- Mobile WhatsApp CTA -->
          <div class="mt-8 pt-6 border-t border-darkBeige/10">
            <a
              :href="whatsappUrl"
              target="_blank"
              class="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-darkBeige text-white text-sm font-medium hover:bg-golden transition-all"
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
    </Transition>
  </section>
</template>

<style scoped>
/* Optional: Add custom styles if needed */
</style>
