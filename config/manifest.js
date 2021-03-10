'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://zonkyio.github.io/ember-web-app for a list of
  // supported properties

  return {
    name: "simulator",
    short_name: "simulator",
    description: "Demo para tutorial de voto electronico PY",
    background_color: "#FFF",
    theme_color: "#1abc9c",
    start_url: "./?utm_source=web_app_manifest",
    orientation: "landscape",
    scope: ".",
    display: "standalone",
    lang: "es",
    icons: [{
        src: "/assets/images/icon-1024.png",
        sizes: "1024x1024",
        type: "image/png"
      },
      {
        src: "/assets/images/icon-512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/assets/images/icon-384.png",
        sizes: "384x384",
        type: "image/png"
      },
      {
        src: "/assets/images/icon-256.png",
        sizes: "256x256",
        type: "image/png"
      },
      {
        src: "/assets/images/icon-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/assets/images/icon-128.png",
        sizes: "128x128",
        type: "image/png"
      },
      {
        src: "/assets/images/icon-96.png",
        sizes: "96x96",
        type: "image/png"
      },
      {
        src: "/assets/images/icon-64.png",
        sizes: "64x64",
        type: "image/png"
      },
      {
        src: "/assets/images/icon-32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        src: "/assets/images/icon-16.png",
        sizes: "16x16",
        type: "image/png"
      }
    ],
    ms: {
      tileColor: '#fff'
    }
  };
}
