<script>
  import 'swiper/css';
  import 'swiper/css/pagination';
  import { register } from 'swiper/element/bundle';
  import './app.css';

  register();

  const spaceBetween = 10;
  const onProgress = e => {
    const [swiper, progress] = e.detail;
    console.log(progress);
  };
  const onSlideChange = e => {
    console.log('slide changed');
  };

  // Menu
  let isOpen = false;
</script>

<!-- Nav -->
<nav class="flex justify-between items-center h-32 bg-black p-4">
  <!-- Logo -->
  <div>
    <img src="/logo-focal.avif" width="95" height="19" alt="logo" class="ml-10" />
  </div>

  <!-- Menu -->
  <div class="links">
    <button class="block lg:hidden" on:click={() => (isOpen = !isOpen)}>
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
      </svg>
    </button>

    <ul
      class={`${
        isOpen ? 'center-links' : 'hidden'
      } lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 gap-10`}
    >
      <li>
        <a href="shop" class="group transition duration-300">
          Shop by Category
          <span
            class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white mt-3"
          ></span>
        </a>
      </li>
      <li>
        <a href="shop" class="group transition duration-300">
          Shop by Device
          <span
            class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white mt-3"
          ></span>
        </a>
      </li>
      <li>
        <a href="shop" class="group transition duration-300">
          Collections
          <span
            class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white mt-3"
          ></span>
        </a>
      </li>
      <li>
        <a href="shop" class="group transition duration-300">
          Blog
          <span
            class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white mt-3"
          ></span>
        </a>
      </li>
    </ul>
  </div>

  <!-- buttons -->
  <div class="flex gap-10 mr-10">
    <img src="/buttons/empty-email.png" alt="email" class="w-8 h-7 cursor-pointer" />
    <img src="/buttons/search-interface-symbol.png" alt="email" class="w-8 h-7 cursor-pointer" />
    <img src="/buttons/user-profile.png" alt="email" class="w-8 h-7 cursor-pointer" />
    <img src="/buttons/shopping-bag.png" alt="email" class="w-8 h-7 cursor-pointer" />
  </div>
</nav>

<!-- Slider -->
<div class="h-screen">
  <swiper-container
    space-between={spaceBetween}
    centered-slides={true}
    loop={true}
    pagination={{ hideOnClick: false }}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    breakpoints={{
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    }}
    style="height: 80%"
    on:swiperprogress={onProgress}
    on:swiperslidechange={onSlideChange}
    class="h-full w-full"
  >
  <swiper-slide class="relative">
    <img src="/slider/heritage-lp-3.webp" alt="" class="w-full h-full object-cover" />
    <div class="absolute inset-0 flex items-center justify-start p-8">
      <div class="flex flex-col items-start">
        <span class="text-white text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 uppercase">Premium Collection</span>
        <span class="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl uppercase">The Heritage</span>
        <span class="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl mb-4 uppercase">Collection</span>
        <div class="flex gap-4">
          <button class="bg-yellow-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black px-4 py-4 mt-6 uppercase">Learn More</button>
          <button class="bg-yellow-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black px-4 py-4 mt-6 uppercase">Shop</button>
        </div>
      </div>
    </div>
  </swiper-slide>

    

  <swiper-slide class="relative">
    <img src="/slider/sage1-desktop.webp" class="w-full h-full object-cover" alt="" />
    <img src="/slider/sage2-desktop.webp" class="w-full h-full object-cover" alt="" />
    <div class="absolute inset-0 flex items-center justify-center p-8">
      <div class="flex flex-col items-center uppercase">
        <span class="text-white text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 uppercase">meet the</span>
        <span class="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl uppercase">sage Collection</span>
        <button class="bg-yellow-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black px-4 py-4 mt-6 uppercase">Learn More</button>
      </div>
    </div>
  </swiper-slide>

  <swiper-slide class="relative">
    <img src="/slider/tom-dixon-lp-tile-1.webp" alt="" class="w-full h-full object-cover" />
    <div class="absolute inset-0 flex items-center justify-start p-8">
      <div class="flex flex-col items-start">
        <span class="text-white text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 uppercase">charge anywhere, anytime</span>
        <span class="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl uppercase">new jump+</span>
        <span class="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl mb-4 uppercase">powerbank</span>
        <div class="flex gap-4">
          <button class="bg-yellow-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black px-4 py-4 mt-6 uppercase">Learn More</button>
          <button class="bg-yellow-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black px-4 py-4 mt-6 uppercase">Shop</button>
        </div>
      </div>
    </div>
  </swiper-slide>

  <swiper-slide class="relative">
    <img src="/slider/mk-lp-tile-1.webp" alt="" class="w-full h-full object-cover" />
    <div class="absolute inset-0 flex items-center justify-start p-8 ">
      <div class="flex flex-col items-start text-black">
        <span class="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 uppercase">charge anywhere, anytime</span>
        <span class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl uppercase">new jump+</span>
        <span class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl mb-4 uppercase">powerbank</span>
        <div class="flex gap-4">
          <button class="bg-yellow-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black px-4 py-4 mt-6 uppercase">Learn More</button>
          <button class="bg-yellow-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black px-4 py-4 mt-6 uppercase">Shop</button>
        </div>
      </div>
    </div>
  </swiper-slide>
  
</div>

<style>
  .center-links {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, -50%);
    background-color: #111;
    z-index: 9999;
    font: bold 3rem 'Roboto', sans-serif;
  }
</style>
