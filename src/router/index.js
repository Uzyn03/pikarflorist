import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: {
        title: 'Toko Bunga Terbaik di Bandung Buka 24 jam | Pikar Florist',
        name: 'description',
        content:
          'Pikar Florist - Toko Bunga Terbaik di Bandung. Butuh bunga untuk acara spesialmu? Kami menyediakan berbagai macam bunga segar berkualitas dengan layanan pengiriman gratis dan cepat.',
      },
    },
    {
      path: '/home',
      redirect: '/',
    },

    {
      path: '/AllProduct',
      name: 'AllProduct',
      component: () => import('../views/AllProduct.vue'),
      meta: {
        title: 'Toko Bunga terbaik di Bandung | Pikar Florist',
        name: 'description',
        content:
          'Pesan pilihan berbagai macam bunga terbaik di Bandung hanya di Toko Bunga Pikar Florist.',
      },
    },

    {
      path: '/KaranganBunga',
      name: 'AllKaranganBunga',
      component: () => import('../views/AllKaranganBunga.vue'),
      meta: {
        title: 'Toko Bunga Karangan Bunga Bandung  | Pikar Florist',
        name: 'description',
        content:
          'Pesan pilihan Karangan Bunga terbaik di Bandung hanya di Toko Bunga Pikar Florist.',
      },
    },
    {
      path: '/Bouquet',
      name: 'AllBouquet',
      component: () => import('../views/AllBouquet.vue'),
      meta: {
        title: 'Toko Bunga Bouquet Bandung | Pikar Florist',
        name: 'description',
        content:
          'Pesan pilihan Bouquet terbaik di Bandung hanya di Toko Bunga Pikar Florist.',
      },
    },
    {
      path: '/StandingFlower',
      name: 'StandingFlower',
      component: () => import('../views/AllStandingFlower.vue'),
      meta: {
        title: 'Toko Bunga Standing Flower Bandung | Pikar Florist',
        name: 'description',
        content:
          'Pesan pilihan Standing Flower terbaik di Bandung hanya di Toko Bunga Pikar Florist.',
      },
    },
    {
      path: '/TableBouquet',
      name: 'TableBouquet',
      component: () => import('../views/TableBouquet.vue'),
      meta: {
        title: 'Toko Bunga Standing Flower Bandung | Pikar Florist',
        name: 'description',
        content:
          'Pesan pilihan Table Bouquet terbaik di Bandung hanya di Toko Bunga Pikar Florist.',
      },
    },

    {
      path: '/:catchall(.*)*',
      name: '404',
      component: () => import('../views/errors/404.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
