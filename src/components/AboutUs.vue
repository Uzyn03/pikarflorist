<script setup>
// WhatsApp
const phoneNumber = "6283160641549";
const message = "Halo Pikar Florist, saya ingin memesan bunga";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

// Features data
const features = [
  {
    icon: "✓",
    title: "100% Terpercaya",
    description: "Dipercaya ribuan pelanggan"
  },
  {
    icon: "✓",
    title: "Kualitas Premium",
    description: "Bunga segar berkualitas terbaik"
  },
  {
    icon: "✓",
    title: "Harga Terjangkau",
    description: "Harga bersaing dengan kualitas terbaik"
  },
  {
    icon: "✓",
    title: "Pengiriman Cepat",
    description: "Same day delivery tersedia"
  },
  {
    icon: "✓",
    title: "Gratis Ongkir",
    description: "Untuk area tertentu di Bandung"
  }
];
</script>

<template>
  <section id="aboutUs" class="bg-white py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- CTA Banner with Background -->
      <div class="relative mb-16 lg:mb-24 rounded-3xl overflow-hidden shadow-2xl">
        <!-- Background Image -->
        <div class="absolute inset-0">
          <img
            src="/pink-flowers-outside-florist.jpg"
            alt="Florist Background"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-darkBeige/90 via-darkBeige/80 to-darkBeige/70"></div>
        </div>

        <!-- Content -->
        <div class="relative z-10 py-16 lg:py-24 px-8 lg:px-16">
          <div class="max-w-2xl">
            <div class="inline-block mb-4">
              <span class="text-sm tracking-[0.3em] uppercase text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                Pesan Sekarang
              </span>
            </div>
            <h2 class="font-cormorant text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Wujudkan Momen<br />
              Spesial Anda
            </h2>
            <p class="text-white/90 text-lg mb-8 leading-relaxed">
              Pesan bunga pilihan Anda sekarang dan buat setiap momen menjadi tak terlupakan
            </p>
            <a
              :href="whatsappUrl"
              target="_blank"
              class="inline-flex items-center gap-2 px-8 py-4 bg-white text-darkBeige rounded-full hover:bg-golden hover:text-white transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Pesan via WhatsApp
            </a>
          </div>
        </div>
      </div>

      <!-- About Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <!-- Left: Text Content -->
        <div class="space-y-6">
          <!-- Header -->
          <div class="space-y-4">
            <div class="inline-block">
              <span class="text-sm tracking-[0.3em] uppercase text-lightBeige border-b border-lightBeige pb-1">
                Tentang Kami
              </span>
            </div>
            <h2 class="font-cormorant text-4xl lg:text-5xl font-bold text-darkBeige leading-tight">
              Toko Bunga Terpercaya<br />
              <span class="text-golden">di Bandung</span>
            </h2>
          </div>

          <!-- Description -->
          <div class="space-y-4 text-lg text-lightBeige leading-relaxed">
            <p>
              <span class="font-semibold text-darkBeige">Pikar Florist</span> hadir untuk menghadirkan keindahan dan kehangatan 
              melalui rangkaian bunga berkualitas premium. Setiap buket yang kami ciptakan 
              adalah karya seni yang dirancang khusus untuk momen spesial Anda.
            </p>
            <p>
              Dengan pengalaman melayani ribuan pelanggan, kami memahami bahwa bunga bukan 
              sekadar hadiah, tapi juga ungkapan perasaan yang tulus. Kepercayaan Anda adalah 
              kebanggaan kami.
            </p>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 pt-6">
            <div class="text-center">
              <div class="text-4xl font-bold font-cormorant text-golden mb-2">5+</div>
              <div class="text-sm text-lightBeige">Tahun Berpengalaman</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold font-cormorant text-golden mb-2">10K+</div>
              <div class="text-sm text-lightBeige">Pelanggan Puas</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold font-cormorant text-golden mb-2">100%</div>
              <div class="text-sm text-lightBeige">Bunga Fresh</div>
            </div>
          </div>
        </div>

        <!-- Right: Features List -->
        <div class="bg-cream rounded-3xl p-8 lg:p-10">
          <h3 class="font-cormorant text-3xl font-bold text-darkBeige mb-8">
            Mengapa Memilih Kami?
          </h3>
          
          <div class="space-y-6">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="flex items-start gap-4 group"
            >
              <!-- Icon -->
              <div class="flex-shrink-0 w-12 h-12 bg-golden/20 rounded-full flex items-center justify-center text-golden font-bold text-xl group-hover:bg-golden group-hover:text-white transition-all duration-300">
                {{ feature.icon }}
              </div>
              
              <!-- Content -->
              <div class="flex-1">
                <h4 class="font-semibold text-darkBeige text-lg mb-1">
                  {{ feature.title }}
                </h4>
                <p class="text-lightBeige text-sm">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- Bottom Note -->
          <div class="mt-8 pt-8 border-t border-darkBeige/10">
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 text-golden flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <p class="text-lightBeige">
                <span class="font-semibold text-darkBeige">Jaminan Kepuasan:</span> Kami berkomitmen memberikan 
                pelayanan terbaik dan memastikan setiap pesanan tiba dengan sempurna.
              </p>
            </div>
          </div>
        </div>

      </div>

      <!-- Bottom Trust Badges -->
      <div class="mt-16 lg:mt-20">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center p-6 bg-cream rounded-2xl hover:shadow-lg transition-shadow">
            <div class="text-4xl mb-3">🌸</div>
            <div class="font-semibold text-darkBeige mb-1">Fresh Flowers</div>
            <div class="text-sm text-lightBeige">Bunga segar setiap hari</div>
          </div>
          <div class="text-center p-6 bg-cream rounded-2xl hover:shadow-lg transition-shadow">
            <div class="text-4xl mb-3">🚚</div>
            <div class="font-semibold text-darkBeige mb-1">Fast Delivery</div>
            <div class="text-sm text-lightBeige">Same day delivery</div>
          </div>
          <div class="text-center p-6 bg-cream rounded-2xl hover:shadow-lg transition-shadow">
            <div class="text-4xl mb-3">💯</div>
            <div class="font-semibold text-darkBeige mb-1">Quality Guaranteed</div>
            <div class="text-sm text-lightBeige">Kualitas terjamin</div>
          </div>
          <div class="text-center p-6 bg-cream rounded-2xl hover:shadow-lg transition-shadow">
            <div class="text-4xl mb-3">⭐</div>
            <div class="font-semibold text-darkBeige mb-1">5 Star Service</div>
            <div class="text-sm text-lightBeige">Pelayanan terbaik</div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Additional styles handled by Tailwind */
</style>