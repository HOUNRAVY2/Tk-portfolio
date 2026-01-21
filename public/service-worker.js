if (!self.define) {
  let e,
    s = {};
  const a = (a, i) => (
    (a = new URL(a + '.js', i).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, n) => {
    const c = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (s[c]) return;
    let r = {};
    const d = (e) => a(e, c),
      o = { module: { uri: c }, exports: r, require: d };
    s[c] = Promise.all(i.map((e) => o[e] || d(e))).then((e) => (n(...e), r));
  };
}
define(['./workbox-50de5c5d'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/_next/static/chunks/0c428ae2-3715bf17787d89fa.js', revision: '3715bf17787d89fa' },
        { url: '/_next/static/chunks/292-32dddd80fe667e47.js', revision: '32dddd80fe667e47' },
        { url: '/_next/static/chunks/435-354ad5669962f901.js', revision: '354ad5669962f901' },
        { url: '/_next/static/chunks/framework-66d32731bdd20e83.js', revision: '66d32731bdd20e83' },
        { url: '/_next/static/chunks/main-a001697d1f8b2913.js', revision: 'a001697d1f8b2913' },
        {
          url: '/_next/static/chunks/pages/_app-6f2ad2eeedb065c4.js',
          revision: '6f2ad2eeedb065c4',
        },
        {
          url: '/_next/static/chunks/pages/_error-ee5b5fb91d29d86f.js',
          revision: 'ee5b5fb91d29d86f',
        },
        {
          url: '/_next/static/chunks/pages/index-2ba402dd552df00d.js',
          revision: '2ba402dd552df00d',
        },
        {
          url: '/_next/static/chunks/pages/projects-bea12178ac1a1978.js',
          revision: 'bea12178ac1a1978',
        },
        {
          url: '/_next/static/chunks/pages/sitemap-main.xml-91969b0689785e9c.js',
          revision: '91969b0689785e9c',
        },
        {
          url: '/_next/static/chunks/pages/sitemap.xml-ad397369134305bf.js',
          revision: 'ad397369134305bf',
        },
        {
          url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0',
        },
        { url: '/_next/static/chunks/webpack-59c5c889f52620d6.js', revision: '59c5c889f52620d6' },
        { url: '/_next/static/css/5f60560ec5752154.css', revision: '5f60560ec5752154' },
        { url: '/_next/static/media/ajax-loader.0b80f665.gif', revision: '0b80f665' },
        { url: '/_next/static/media/slick.25572f22.eot', revision: '25572f22' },
        { url: '/_next/static/media/slick.653a4cbb.woff', revision: '653a4cbb' },
        { url: '/_next/static/media/slick.6aa1ee46.ttf', revision: '6aa1ee46' },
        { url: '/_next/static/media/slick.f895cfdf.svg', revision: 'f895cfdf' },
        {
          url: '/_next/static/v_cLo1bxYM8I0gg5bbwe2/_buildManifest.js',
          revision: '30d3ed34387398f7aa598b6a90483d10',
        },
        {
          url: '/_next/static/v_cLo1bxYM8I0gg5bbwe2/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        { url: '/assets/home/footer.png', revision: '060caadbb9c1686f8a192075e262ce75' },
        { url: '/assets/home/frame-01.png', revision: 'cb1427fe8af2bb484d8e30e1b333d0aa' },
        { url: '/assets/home/me.webp', revision: 'd0acf7bc239769931a22e6e5880cfe48' },
        { url: '/assets/home/person.png', revision: '90b30b9b9b688d62c0f7b37447b89304' },
        { url: '/assets/home/pop.png', revision: '8d4b402e9b28cb2483281841d1bd7fb1' },
        { url: '/assets/home/tk_CV.pdf', revision: 'f39ad9dcdfb8dfe853ce603cb386e590' },
        { url: '/assets/home/sec-1.png', revision: '10a356d09d2a220ae4a6b78b0b709667' },
        { url: '/assets/home/sec-2.png', revision: '7e968a688d1fcec7645d97b1d32ea30f' },
        { url: '/assets/home/sec-3.png', revision: 'd269385f617c7b9718d24bcedacdde39' },
        { url: '/assets/home/skill/bootstrap.svg', revision: '5fd4a41281107bb869327eab089db8f7' },
        { url: '/assets/home/skill/css.svg', revision: '31c4648ca691f547d92b3da337555ac0' },
        { url: '/assets/home/skill/framer.png', revision: '0213517020bd115a52851138f9239288' },
        { url: '/assets/home/skill/git.svg', revision: '7535a3d5146122d728ef293822f10136' },
        { url: '/assets/home/skill/html.svg', revision: '42d8715e3ab55d88a8b7daf0c3f62d75' },
        { url: '/assets/home/skill/js.svg', revision: '2b8c2a0dfa4efd36340ad9b3656f8019' },
        { url: '/assets/home/skill/larvel.png', revision: 'a3eb80df91ee824f4ed3d8377b1efcdb' },
        { url: '/assets/home/skill/mysql.png', revision: 'ad667a23d59f4541b399fe8acde80cb5' },
        { url: '/assets/home/skill/next.png', revision: '3b4d73a87650988a79cc08d2edb4bf8c' },
        { url: '/assets/home/skill/nuxt.png', revision: '71af254b8feac0bba870ea93f0a84981' },
        { url: '/assets/home/skill/php.png', revision: '9c230c9406b12b0cd79c5330d0f73a5c' },
        { url: '/assets/home/skill/react.svg', revision: 'a66d43c2761a6bd0ce17615b446620b6' },
        { url: '/assets/home/skill/tialwind.png', revision: 'f4ddd2cda1e970a3adfcdc8742a88c7d' },
        { url: '/assets/home/skill/vue.png', revision: 'b23b89fa2e1ccc914adbf725ad9d0ceb' },
        { url: '/assets/home/skill/wordpress.png', revision: 'd144af5d82a2d3919e9bc91b75640aaf' },
        { url: '/assets/home/web/img1.png', revision: '61054b919ebe69623a1686a07e3c118d' },
        { url: '/assets/home/web/img10.png', revision: '55d2aa8d1da95f3a1183f6afb438dac0' },
        { url: '/assets/home/web/img11.png', revision: 'fbbd0e938ddd4073662f09da3cb1d571' },
        { url: '/assets/home/web/img12.png', revision: '86b9bcd149a128c549d53dd32e8cea77' },
        { url: '/assets/home/web/img13.png', revision: '67455cf5d77956655ac999893bf7cf4b' },
        { url: '/assets/home/web/img14.png', revision: '8639832015dbdffbbf463acb5bc71e01' },
        { url: '/assets/home/web/img15.png', revision: '17c77ffe7e082a2515ef340da6634d8c' },
        { url: '/assets/home/web/img16.png', revision: 'c9dadc0904f61a61b57231f12f37eb78' },
        { url: '/assets/home/web/img17.png', revision: 'c796f4fc7afa49c8b604b1bd9cc533a3' },
        { url: '/assets/home/web/img18.png', revision: 'f0427bd49e7dd0efe94690953f4b6350' },
        { url: '/assets/home/web/img19.png', revision: 'c8b3d8ebbb27d3adacaea66638a9d321' },
        { url: '/assets/home/web/img2.png', revision: 'd9db1532b4e89b0f0454e61aad5be061' },
        { url: '/assets/home/web/img20.png', revision: '09232f79dfc2d4e8e2b1a9b150b8fc6e' },
        { url: '/assets/home/web/img21.png', revision: '640b7003c9d26d8bcfaf66931230c711' },
        { url: '/assets/home/web/img22.png', revision: 'e918d6dcc6632e9d38125a090e7d3a84' },
        { url: '/assets/home/web/img23.png', revision: '2252fa9854b6738e0b7692ed742a6bd9' },
        { url: '/assets/home/web/img24.png', revision: '8cf1a08be37d1b5e51a51d6212022acd' },
        { url: '/assets/home/web/img25.png', revision: 'a7a62b130407a8a87ed036f91360d800' },
        { url: '/assets/home/web/img26.png', revision: 'a0d228acfeb8ec73518a6a7dd596a48b' },
        { url: '/assets/home/web/img27.png', revision: '2f454e6c5ed2e49641ee67d865f6b974' },
        { url: '/assets/home/web/img28.png', revision: 'ad05f4a2695c1ec58a80013203a96436' },
        { url: '/assets/home/web/img3.png', revision: '9b227a5b234a84c62ece123fc8f59872' },
        { url: '/assets/home/web/img4.png', revision: '013d782861a6882ab19903e4053128ca' },
        { url: '/assets/home/web/img5.png', revision: 'b4ff5ee43056d53a4d8cde56ff69d372' },
        { url: '/assets/home/web/img6.png', revision: '1247a63ede91f2248fc13ad8a9748d38' },
        { url: '/assets/home/web/img7.png', revision: '7d4b09b2db506ada13ec880668c0454d' },
        { url: '/assets/home/web/img8.png', revision: '6c0537ea3419f7a0997bbccbc479b8c9' },
        { url: '/assets/home/web/img9.png', revision: '084fa3c2e8f65a0673f80dec723b3b12' },
        { url: '/assets/home/work/img-1.png', revision: 'f0b74fd5fa7a90c49a7a2f38da86ec3d' },
        { url: '/assets/home/work/img-2.png', revision: 'd10e2c2954b1089efaf23e0887bb19df' },
        { url: '/assets/home/work/img-3.png', revision: '59fc3a2873dfa61813ccdbb7df4d03bf' },
        { url: '/assets/home/work/img-4.png', revision: 'b4edfc27b985ffdc194f5f3ce3082113' },
        { url: '/assets/home/work/img-5.png', revision: '644f46409b8f0992dce10e63743d1186' },
        { url: '/assets/home/work/img-6.png', revision: '4582653dfc5c9ed4a1c2c6f389aceb63' },
        { url: '/browserconfig.xml', revision: '68c9044fa4a08749efb85bb2a4edaede' },
        { url: '/favicon.ico', revision: 'd887c7f61d94e22f6505fa49fe7c2e43' },
        {
          url: '/favicon/android-chrome-192x192.png',
          revision: '4af4824fcc3274de01cb0506d73821ed',
        },
        {
          url: '/favicon/android-chrome-512x512.png',
          revision: 'eef328fc70f71581b3d82e1bdf6425c7',
        },
        { url: '/favicon/apple-touch-icon.png', revision: '81d57ae33001a2f66960da61ef4d646c' },
        { url: '/favicon/favicon-16x16.png', revision: '0ce4ab11f24beb027e0cb3d654472bbe' },
        { url: '/favicon/favicon-32x32.png', revision: 'a5903973fefc1001f723b14ae9a723f6' },
        { url: '/favicon/mstile-150x150.png', revision: '13ac4697d752ba6469ba13e0b37f6a4d' },
        { url: '/manifest.json', revision: '66ec9e3bc342bfe4914b6d781c053ba8' },
        { url: '/next.svg', revision: '8e061864f388b47f33a1c3780831193e' },
        { url: '/robots.txt', revision: '7f660139ab70d38a57946d8ec68695b9' },
        { url: '/safari-pinned-tab.svg', revision: '6a9c082af5ee9b0af32ea643f1b25c6b' },
        { url: '/site.webmanifest', revision: '22a36b7df2717d75493d9174d28391be' },
        { url: '/vercel.svg', revision: '61c6b19abff40ea7acd577be818f3976' },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: s, event: a, state: i }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, { status: 200, statusText: 'OK', headers: s.headers })
                : s,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      'GET',
    );
});
