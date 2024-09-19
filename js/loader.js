!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VideosLoaded=t():e.VideosLoaded=t()}(window,function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}();var i=function(){function e(t,o,r){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),"object"!=(void 0===o?"undefined":n(o))||r?this.callback=o:(r=o,this.callback=null),this.options=Object.assign({timeout:0,readyState:4},r),this.element="string"==typeof t?document.querySelectorAll(t):t,this.elements=this._nodeListToArray(this.element),this.videos=[],this.addVideos(),this.load()}return r(e,[{key:"_nodeListToArray",value:function(e){return Array.isArray(e)?e:e instanceof NodeList?Array.prototype.slice.call(e):[e]}},{key:"addVideos",value:function(){var e=this;this.elements.forEach(function(t){"VIDEO"==t.nodeName&&e.videos.push(t),t.querySelectorAll("video").forEach(function(t){e.videos.push(t)})})}},{key:"load",value:function(){var e=this,t=[],o=function(t){return t.readyState>=e.options.readyState};this.videos.forEach(function(e){t.push(new Promise(function(t){if(o(e))return t();e.addEventListener("loadeddata",function(){if(o(e))return t()},!1)}))});var n=Promise.all(t);if(this.options.timeout>0){var r=new Promise(function(t,o){var n=setTimeout(function(){clearTimeout(n),o("Load timed out ("+e.options.timeout+"ms)")},e.options.timeout)});n=Promise.race([n,r])}return n.then(function(){return"function"==typeof e.callback&&e.callback.call(null,e.videos),Promise.resolve(e.videos)})}}],[{key:"bindToJQuery",value:function(t){(t=t||window.jQuery)&&(t.fn.videosLoaded=function(t,o){return new e(this.get(),t,o)})}}]),e}();i.bindToJQuery(),e.exports=i}])});
/*!
 * imagesLoaded PACKAGED v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

/**
 * EvEmitter v2.1.1
 * Lil' event emitter
 * MIT License
 */

( function( global, factory ) {
    // universal module definition
    if ( typeof module == 'object' && module.exports ) {
      // CommonJS - Browserify, Webpack
      module.exports = factory();
    } else {
      // Browser globals
      global.EvEmitter = factory();
    }
  
  }( typeof window != 'undefined' ? window : this, function() {
  
  function EvEmitter() {}
  
  let proto = EvEmitter.prototype;
  
  proto.on = function( eventName, listener ) {
    if ( !eventName || !listener ) return this;
  
    // set events hash
    let events = this._events = this._events || {};
    // set listeners array
    let listeners = events[ eventName ] = events[ eventName ] || [];
    // only add once
    if ( !listeners.includes( listener ) ) {
      listeners.push( listener );
    }
  
    return this;
  };
  
  proto.once = function( eventName, listener ) {
    if ( !eventName || !listener ) return this;
  
    // add event
    this.on( eventName, listener );
    // set once flag
    // set onceEvents hash
    let onceEvents = this._onceEvents = this._onceEvents || {};
    // set onceListeners object
    let onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
    // set flag
    onceListeners[ listener ] = true;
  
    return this;
  };
  
  proto.off = function( eventName, listener ) {
    let listeners = this._events && this._events[ eventName ];
    if ( !listeners || !listeners.length ) return this;
  
    let index = listeners.indexOf( listener );
    if ( index != -1 ) {
      listeners.splice( index, 1 );
    }
  
    return this;
  };
  
  proto.emitEvent = function( eventName, args ) {
    let listeners = this._events && this._events[ eventName ];
    if ( !listeners || !listeners.length ) return this;
  
    // copy over to avoid interference if .off() in listener
    listeners = listeners.slice( 0 );
    args = args || [];
    // once stuff
    let onceListeners = this._onceEvents && this._onceEvents[ eventName ];
  
    for ( let listener of listeners ) {
      let isOnce = onceListeners && onceListeners[ listener ];
      if ( isOnce ) {
        // remove listener
        // remove before trigger to prevent recursion
        this.off( eventName, listener );
        // unset once flag
        delete onceListeners[ listener ];
      }
      // trigger listener
      listener.apply( this, args );
    }
  
    return this;
  };
  
  proto.allOff = function() {
    delete this._events;
    delete this._onceEvents;
    return this;
  };
  
  return EvEmitter;
  
  } ) );
  /*!
   * imagesLoaded v5.0.0
   * JavaScript is all like "You images are done yet or what?"
   * MIT License
   */
  
  ( function( window, factory ) {
    // universal module definition
    if ( typeof module == 'object' && module.exports ) {
      // CommonJS
      module.exports = factory( window, require('ev-emitter') );
    } else {
      // browser global
      window.imagesLoaded = factory( window, window.EvEmitter );
    }
  
  } )( typeof window !== 'undefined' ? window : this,
      function factory( window, EvEmitter ) {
  
  let $ = window.jQuery;
  let console = window.console;
  
  // -------------------------- helpers -------------------------- //
  
  // turn element or nodeList into an array
  function makeArray( obj ) {
    // use object if already an array
    if ( Array.isArray( obj ) ) return obj;
  
    let isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
    // convert nodeList to array
    if ( isArrayLike ) return [ ...obj ];
  
    // array of single index
    return [ obj ];
  }
  
  // -------------------------- imagesLoaded -------------------------- //
  
  /**
   * @param {[Array, Element, NodeList, String]} elem
   * @param {[Object, Function]} options - if function, use as callback
   * @param {Function} onAlways - callback function
   * @returns {ImagesLoaded}
   */
  function ImagesLoaded( elem, options, onAlways ) {
    // coerce ImagesLoaded() without new, to be new ImagesLoaded()
    if ( !( this instanceof ImagesLoaded ) ) {
      return new ImagesLoaded( elem, options, onAlways );
    }
    // use elem as selector string
    let queryElem = elem;
    if ( typeof elem == 'string' ) {
      queryElem = document.querySelectorAll( elem );
    }
    // bail if bad element
    if ( !queryElem ) {
      console.error(`Bad element for imagesLoaded ${queryElem || elem}`);
      return;
    }
  
    this.elements = makeArray( queryElem );
    this.options = {};
    // shift arguments if no options set
    if ( typeof options == 'function' ) {
      onAlways = options;
    } else {
      Object.assign( this.options, options );
    }
  
    if ( onAlways ) this.on( 'always', onAlways );
  
    this.getImages();
    // add jQuery Deferred object
    if ( $ ) this.jqDeferred = new $.Deferred();
  
    // HACK check async to allow time to bind listeners
    setTimeout( this.check.bind( this ) );
  }
  
  ImagesLoaded.prototype = Object.create( EvEmitter.prototype );
  
  ImagesLoaded.prototype.getImages = function() {
    this.images = [];
  
    // filter & find items if we have an item selector
    this.elements.forEach( this.addElementImages, this );
  };
  
  const elementNodeTypes = [ 1, 9, 11 ];
  
  /**
   * @param {Node} elem
   */
  ImagesLoaded.prototype.addElementImages = function( elem ) {
    // filter siblings
    if ( elem.nodeName === 'IMG' ) {
      this.addImage( elem );
    }
    // get background image on element
    if ( this.options.background === true ) {
      this.addElementBackgroundImages( elem );
    }
  
    // find children
    // no non-element nodes, #143
    let { nodeType } = elem;
    if ( !nodeType || !elementNodeTypes.includes( nodeType ) ) return;
  
    let childImgs = elem.querySelectorAll('img');
    // concat childElems to filterFound array
    for ( let img of childImgs ) {
      this.addImage( img );
    }
  
    // get child background images
    if ( typeof this.options.background == 'string' ) {
      let children = elem.querySelectorAll( this.options.background );
      for ( let child of children ) {
        this.addElementBackgroundImages( child );
      }
    }
  };
  
  const reURL = /url\((['"])?(.*?)\1\)/gi;
  
  ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
    let style = getComputedStyle( elem );
    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
    if ( !style ) return;
  
    // get url inside url("...")
    let matches = reURL.exec( style.backgroundImage );
    while ( matches !== null ) {
      let url = matches && matches[2];
      if ( url ) {
        this.addBackground( url, elem );
      }
      matches = reURL.exec( style.backgroundImage );
    }
  };
  
  /**
   * @param {Image} img
   */
  ImagesLoaded.prototype.addImage = function( img ) {
    let loadingImage = new LoadingImage( img );
    this.images.push( loadingImage );
  };
  
  ImagesLoaded.prototype.addBackground = function( url, elem ) {
    let background = new Background( url, elem );
    this.images.push( background );
  };
  
  ImagesLoaded.prototype.check = function() {
    this.progressedCount = 0;
    this.hasAnyBroken = false;
    // complete if no images
    if ( !this.images.length ) {
      this.complete();
      return;
    }
  
    /* eslint-disable-next-line func-style */
    let onProgress = ( image, elem, message ) => {
      // HACK - Chrome triggers event before object properties have changed. #83
      setTimeout( () => {
        this.progress( image, elem, message );
      } );
    };
  
    this.images.forEach( function( loadingImage ) {
      loadingImage.once( 'progress', onProgress );
      loadingImage.check();
    } );
  };
  
  ImagesLoaded.prototype.progress = function( image, elem, message ) {
    this.progressedCount++;
    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
    // progress event
    this.emitEvent( 'progress', [ this, image, elem ] );
    if ( this.jqDeferred && this.jqDeferred.notify ) {
      this.jqDeferred.notify( this, image );
    }
    // check if completed
    if ( this.progressedCount === this.images.length ) {
      this.complete();
    }
  
    if ( this.options.debug && console ) {
      console.log( `progress: ${message}`, image, elem );
    }
  };
  
  ImagesLoaded.prototype.complete = function() {
    let eventName = this.hasAnyBroken ? 'fail' : 'done';
    this.isComplete = true;
    this.emitEvent( eventName, [ this ] );
    this.emitEvent( 'always', [ this ] );
    if ( this.jqDeferred ) {
      let jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
      this.jqDeferred[ jqMethod ]( this );
    }
  };
  
  // --------------------------  -------------------------- //
  
  function LoadingImage( img ) {
    this.img = img;
  }
  
  LoadingImage.prototype = Object.create( EvEmitter.prototype );
  
  LoadingImage.prototype.check = function() {
    // If complete is true and browser supports natural sizes,
    // try to check for image status manually.
    let isComplete = this.getIsImageComplete();
    if ( isComplete ) {
      // report based on naturalWidth
      this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
      return;
    }
  
    // If none of the checks above matched, simulate loading on detached element.
    this.proxyImage = new Image();
    // add crossOrigin attribute. #204
    if ( this.img.crossOrigin ) {
      this.proxyImage.crossOrigin = this.img.crossOrigin;
    }
    this.proxyImage.addEventListener( 'load', this );
    this.proxyImage.addEventListener( 'error', this );
    // bind to image as well for Firefox. #191
    this.img.addEventListener( 'load', this );
    this.img.addEventListener( 'error', this );
    this.proxyImage.src = this.img.currentSrc || this.img.src;
  };
  
  LoadingImage.prototype.getIsImageComplete = function() {
    // check for non-zero, non-undefined naturalWidth
    // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
    return this.img.complete && this.img.naturalWidth;
  };
  
  LoadingImage.prototype.confirm = function( isLoaded, message ) {
    this.isLoaded = isLoaded;
    let { parentNode } = this.img;
    // emit progress with parent <picture> or self <img>
    let elem = parentNode.nodeName === 'PICTURE' ? parentNode : this.img;
    this.emitEvent( 'progress', [ this, elem, message ] );
  };
  
  // ----- events ----- //
  
  // trigger specified handler for event type
  LoadingImage.prototype.handleEvent = function( event ) {
    let method = 'on' + event.type;
    if ( this[ method ] ) {
      this[ method ]( event );
    }
  };
  
  LoadingImage.prototype.onload = function() {
    this.confirm( true, 'onload' );
    this.unbindEvents();
  };
  
  LoadingImage.prototype.onerror = function() {
    this.confirm( false, 'onerror' );
    this.unbindEvents();
  };
  
  LoadingImage.prototype.unbindEvents = function() {
    this.proxyImage.removeEventListener( 'load', this );
    this.proxyImage.removeEventListener( 'error', this );
    this.img.removeEventListener( 'load', this );
    this.img.removeEventListener( 'error', this );
  };
  
  // -------------------------- Background -------------------------- //
  
  function Background( url, element ) {
    this.url = url;
    this.element = element;
    this.img = new Image();
  }
  
  // inherit LoadingImage prototype
  Background.prototype = Object.create( LoadingImage.prototype );
  
  Background.prototype.check = function() {
    this.img.addEventListener( 'load', this );
    this.img.addEventListener( 'error', this );
    this.img.src = this.url;
    // check if image is already complete
    let isComplete = this.getIsImageComplete();
    if ( isComplete ) {
      this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
      this.unbindEvents();
    }
  };
  
  Background.prototype.unbindEvents = function() {
    this.img.removeEventListener( 'load', this );
    this.img.removeEventListener( 'error', this );
  };
  
  Background.prototype.confirm = function( isLoaded, message ) {
    this.isLoaded = isLoaded;
    this.emitEvent( 'progress', [ this, this.element, message ] );
  };
  
  // -------------------------- jQuery -------------------------- //
  
  ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
    jQuery = jQuery || window.jQuery;
    if ( !jQuery ) return;
  
    // set local variable
    $ = jQuery;
    // $().imagesLoaded()
    $.fn.imagesLoaded = function( options, onAlways ) {
      let instance = new ImagesLoaded( this, options, onAlways );
      return instance.jqDeferred.promise( $( this ) );
    };
  };
  // try making plugin
  ImagesLoaded.makeJQueryPlugin();
  
  // --------------------------  -------------------------- //
  
  return ImagesLoaded;
  
  } );

window.onload = () => {
  let lazyVideo = document.querySelector(".intro-back__video");

  if ("IntersectionObserver" in window) {
    let observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let videoElement = entry.target;
          let videoSource = videoElement.querySelector("source");
          videoSource.src = videoElement.dataset.src;
          videoElement.load(); // Load the video only when it comes into view
          observer.unobserve(videoElement); // Stop observing after loading
        }
      });
    });
    observer.observe(lazyVideo);
  }

  // Select the content container
  var content = document.querySelector('body')
  console.log(content);
  

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
        // document.body.classList.remove("no-scroll");
        document.querySelector(".page-loader")?.classList.add('hide')      
        document.querySelector(".wrapper")?.classList.remove('hide')      
        clearInterval(loader_interval);
      }
    }, 100)
  }, 1500)
  
}

document.addEventListener("DOMContentLoaded", function () {
  let hiddenSections = document.querySelectorAll(".hidden-section");

  let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing once it's visible
      }
    });
  });

  hiddenSections.forEach(function (section) {
    observer.observe(section);
  });
});
