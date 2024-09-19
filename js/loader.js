document.addEventListener('load', () => {
  // Select the content container
  var content = document.querySelector('body')

  let is_img = false;
  let is_video = false;
  // Use imagesLoaded to wait for all images within 'content' to load
  imagesLoaded(content, function() {
    console.log('All images have loaded.');
      is_img = true;
  });

  
  // Use imagesLoaded to wait for all images within 'content' to load
  new VideosLoaded(content, function() {
    console.log('All videos have loaded.');
      is_video = true;
  });

  
  setTimeout(() => {
    const loader_interval = setInterval(() => {
      if (is_img && is_video) {
        document.body.classList.remove("no-scroll");
        document.querySelector(".page-loader")?.classList.add('hide')      
        clearInterval(loader_interval);
      }
    }, 100)
  }, 1000)
})
