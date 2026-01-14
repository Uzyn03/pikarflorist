<script setup>
// Import yang diperlukan
import "leaflet/dist/leaflet.css";
import { LMap, LMarker, LTileLayer } from "@vue-leaflet/vue-leaflet";
import { onMounted, ref } from "vue";

// Koordinat untuk kedua workshop
const markers = ref([
  {
    position: [-6.9469094, 107.6201593],
    tooltip: "Workshop 1 - Kp. Pengkolan Caringin",
  },
  {
    position: [-7.0177587, 107.6473841],
    tooltip: "Workshop 2 - Jl.Pasirluyu Selatan",
  },
]);

// Set center map di antara kedua lokasi
const center = ref([-6.982334, 107.6337717]);
const zoom = ref(12);
const mapOptions = ref({
  zoomControl: true,
});

// Konfigurasi icon
onMounted(() => {
  import("leaflet").then((L) => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconUrl: "/marker-icon.png",
      iconRetinaUrl: "/marker-icon-2x.png",
      shadowUrl: "/marker-shadow.png",
    });
  });
});

// WhatsApp
const phoneNumber = "6281904520743";
const message = "Halo Pikar Florist, saya ingin memesan bunga";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
</script>

<template>
  <!-- Contact Us Section -->
  <section id="contactUs" class="bg-cream py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header -->
      <div class="text-center mb-12 lg:mb-16 space-y-4">
        <div class="inline-block">
          <span class="text-sm tracking-[0.3em] uppercase text-lightBeige border-b border-lightBeige pb-1">
            Hubungi Kami
          </span>
        </div>
        <h2 class="font-cormorant text-4xl lg:text-5xl xl:text-6xl font-bold text-darkBeige">
          Kunjungi Toko Kami
        </h2>
        <p class="text-lightBeige text-lg max-w-2xl mx-auto">
          Temukan kami di dua lokasi workshop di Bandung untuk melayani kebutuhan bunga Anda
        </p>
      </div>

      <!-- Map -->
      <div class="mb-12 lg:mb-16 rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
        <l-map
          v-model:zoom="zoom"
          :center="center"
          :options="mapOptions"
          class="h-full w-full"
        >
          <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base"
            name="OpenStreetMap"
          ></l-tile-layer>
          <l-marker
            v-for="marker in markers"
            :key="marker.tooltip"
            :lat-lng="marker.position"
          >
          </l-marker>
        </l-map>
      </div>

      <!-- Contact Info Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- Workshop 1 -->
        <div class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-14 h-14 bg-golden/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-7 h-7 text-golden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 class="font-cormorant text-2xl font-bold text-darkBeige">
              Workshop 1
            </h3>
          </div>
          <p class="text-lightBeige leading-relaxed">
            Kp. Pengkolan Caringin, RT.06/RW.02<br />
            Wargamekar, Kec. Baleendah<br />
            Kabupaten Bandung, Jawa Barat<br />
            40381 Indonesia
          </p>
        </div>

        <!-- Workshop 2 -->
        <div class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-14 h-14 bg-golden/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-7 h-7 text-golden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 class="font-cormorant text-2xl font-bold text-darkBeige">
              Workshop 2
            </h3>
          </div>
          <p class="text-lightBeige leading-relaxed">
            Jl. Pasirluyu Selatan<br />
            Pasirluyu, Kec. Regol<br />
            Kota Bandung, Jawa Barat<br />
            40254 Indonesia
          </p>
        </div>

        <!-- Contact Info -->
        <div class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-14 h-14 bg-golden/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg class="w-7 h-7 text-golden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <h3 class="font-cormorant text-2xl font-bold text-darkBeige">
              Kontak Kami
            </h3>
          </div>
          <div class="space-y-4">
            <!-- Phone -->
            <a href="tel:+6281904520743" class="flex items-center gap-3 text-lightBeige hover:text-golden transition-colors group">
              <div class="w-10 h-10 bg-cream rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-golden/20 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <span class="font-medium">+62 819-0452-0743</span>
            </a>

            <!-- Email -->
            <a href="mailto:floristshelby@gmail.com" class="flex items-center gap-3 text-lightBeige hover:text-golden transition-colors group">
              <div class="w-10 h-10 bg-cream rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-golden/20 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <span class="font-medium">floristshelby@gmail.com</span>
            </a>

            <!-- WhatsApp -->
            <a :href="whatsappUrl" target="_blank" class="flex items-center gap-3 text-lightBeige hover:text-golden transition-colors group">
              <div class="w-10 h-10 bg-cream rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-golden/20 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <span class="font-medium">WhatsApp Kami</span>
            </a>

            <!-- Instagram -->
            <a href="https://www.instagram.com/shelby.florist/" target="_blank" class="flex items-center gap-3 text-lightBeige hover:text-golden transition-colors group">
              <div class="w-10 h-10 bg-cream rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-golden/20 transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <span class="font-medium">@shelby.florist</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>

  
</template>

<style scoped>
/* Leaflet styling */
:deep(.leaflet-control-container .leaflet-control) {
  z-index: 30;
}
</style>