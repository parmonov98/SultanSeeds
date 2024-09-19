document.addEventListener('DOMContentLoaded', () => {
  // Select the content container
  var content = document.querySelector('body')

  // Use imagesLoaded to wait for all images within 'content' to load
  imagesLoaded(content, function() {
    console.log('All images have loaded.');
      document.body.classList.remove("no-scroll");
      setTimeout(() => {
        document.querySelector(".page-loader")?.classList.add('hide')
      }, 0)
    // Proceed to check other assets
  });
})
