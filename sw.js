importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"92d802cef0178565d0e708e6559c5ae0","url":"feedback.html"},{"revision":"287d411089b69d87bd374023a815354d","url":"images/image1.png"},{"revision":"ac2224c341669e631bc0f259ec4fc1f1","url":"images/image10.png"},{"revision":"01acec7e82391c9609671fdc3dd28907","url":"images/image11.png"},{"revision":"316c48cc539753318f627d6b3c7daa85","url":"images/image12.png"},{"revision":"fd2230ffbdc7158054f084a4d60bf343","url":"images/image13.png"},{"revision":"bf01f220c9a3075da77012677aa4cf2e","url":"images/image14.png"},{"revision":"2575c0977ff3e31ce6dda71a164f52f8","url":"images/image2.png"},{"revision":"e05a4bbe7a884238779371ea2be03246","url":"images/image3.png"},{"revision":"e5523b792398493a5399d3bd7efba5ff","url":"images/image4.png"},{"revision":"cad884fb25d57b1eb0db8efe521248b4","url":"images/image5.png"},{"revision":"53f0aa629e86bef79332d7f30f4b167e","url":"images/image6.png"},{"revision":"7f78762e3030cbec2a99f10628034a54","url":"images/image7.png"},{"revision":"0f415b4685f2c276d7a2cdbcc5577cf4","url":"images/image8.png"},{"revision":"41c5fd8c16c39fe62309bfdf15212e17","url":"images/image9.png"},{"revision":"ed5ae4bd4fc367947cb737010accbe4f","url":"index.html"},{"revision":"81ee0efa464adf4953807cc7f69f4cfe","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"918ee29989f5644deb5001ffe5d8e1b0","url":"posttest.html"},{"revision":"633966427b2da5cbc0085d1f68fecaad","url":"posttest.json"},{"revision":"d1c54552c09970d39947607c69b22751","url":"pretest.html"},{"revision":"7b9f7b25b2f8992d441265caec51672c","url":"pretest.json"},{"revision":"0e85d843ded23d6017473814fa514269","url":"procedure.html"},{"revision":"d6518f33763364566f87ce4d3a8b3bab","url":"references.html"},{"revision":"f5c8f7c906d497a2e0b114ca418d95c1","url":"simulation.html"},{"revision":"446b5639fd565e4d2412ca45aae2be02","url":"simulation/css/index-B5-g-jJc.css"},{"revision":"446b5639fd565e4d2412ca45aae2be02","url":"simulation/css/index-Dh2su7TM.css"},{"revision":"5aa1ea5245e78b18a2968345eed9396c","url":"simulation/images/1-0we1JBAY.jpg"},{"revision":"782f8b30bd42ed10973477ecd96b0c2b","url":"simulation/images/2-Cu2Cu719.jpg"},{"revision":"3e69672fbf3e5d4f8d651be8b3aac8b0","url":"simulation/images/3-0idFj__f.jpg"},{"revision":"3f4d6095c5cf7947d4801dea0019090a","url":"simulation/images/window-B6alTuWr.jpg"},{"revision":"df8c173e224fcd5144a8f865b4e6d136","url":"simulation/index.html"},{"revision":"b4984d97c7a127693f8c249dd4dc878a","url":"simulation/js/index-B_P0IuYV.js"},{"revision":"7a056d4de854f541a93869552aaab137","url":"simulation/js/index-DstVZiYY.js"},{"revision":"6fc326039badf6b73aed17edd13bbf8c","url":"theory.html"},{"revision":"cd3aa19d687fae5895a795ceaa883b1e","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );