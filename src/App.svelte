<script>
  import 'swiper/css'
  import 'swiper/css/pagination'
  import { register } from 'swiper/element/bundle'
  import './app.css'

  register()

  const spaceBetween = 10
  const onProgress = e => {
    const [swiper, progress] = e.detail
    console.log(progress)
  }
  const onSlideChange = e => {
    console.log('slide changed')
  }


</script>

<header>
  <nav class="flex justify-between items-center h-32 bg-black p-4">
    <div>
      <img
        src="/logo-focal.avif"
        width="95"
        height="19"
        alt="logo"
        class=" ml-10"
      />
    </div>

    <div class="links">
      <ul class="flex space-x-4 gap-10">
        <a href="shop" class="group transition duration-300">
          Shop by Category
          <span
            class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white mt-3 h-1"
          ></span>
        </a>
        <a href="shop" class="group transition duration-300">
          Shop by Device
          <span
            class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white mt-3 h-1"
          ></span>
        </a>
        <a href="shop" class="group transition duration-300">
          Collections
          <span
            class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white mt-3 h-1"
          ></span>
        </a>
        <a href="shop" class="group transition duration-300">
          Blog
          <span
            class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white mt-3 h-1"
          ></span>
        </a>
      </ul>
    </div>

    <div class="flex gap-10 mr-10">
      <img src="/buttons/empty-email.png" alt="email" class="w-8 h-7 cursor-pointer" />
      <img src="/buttons/search-interface-symbol.png" alt="email" class="w-8 h-7 cursor-pointer" />
      <img src="/buttons/user-profile.png" alt="email" class="w-8 h-7 cursor-pointer" />
      <img src="/buttons/shopping-bag.png" alt="email" class="w-8 h-7 cursor-pointer" />
    </div>
    
  </nav>

  <div class="">
    <swiper-container 
      slides-per-view={1}
      space-between={spaceBetween}
      centered-slides={true}
      loop={true}
      pagination={{
        hideOnClick: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        768: {
          slidesPerView: 1,
        },
      }}
      on:swiperprogress={onProgress}
      on:swiperslidechange={onSlideChange}
      style="height: 78vh;"
    >
    
    <swiper-slide class="relative">
      <img src="/slider/heritage-lp-3.webp" alt="" class="w-full" />
      <div class="absolute inset-0 flex items-center justify-start p-8">
        <div class="flex flex-col items-start">
          <span class="text-white text-4xl mb-4 uppercase">Premium Collection</span>
          <span class="text-white text-9xl uppercase">The Heritage</span>
          <span class="text-white text-9xl mb-4 uppercase">Collection</span>
          <div class="flex gap-4 ">
            <button class="bg-yellow-500 text-4xl text-black px-4 py-4 mt-6 uppercase">Learn More</button>
            <button class="bg-yellow-500  text-4xl text-black px-4 py-4 mt-6 uppercase">Shop</button>
           </div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide class="relative">
      <img src="/slider/sage1-desktop.webp" class="w-2/4" alt="" />
      <img src="/slider/sage2-desktop.webp" class="w-2/4" alt="" />
      <div class="absolute inset-0 flex items-center justify-center p-8">
        <div class="flex flex-col items-center uppercase">
          <span class="text-white text-4xl mb-4 uppercase">meet the</span>
          <span class="text-white text-9xl uppercase">sage Collection</span>
            <button class="bg-yellow-500 text-4xl text-black px-4 py-4 mt-6 uppercase">Learn More</button>
        </div>
      </div>
    </swiper-slide>
    
    <swiper-slide class="relative">
      <img src="/slider/tom-dixon-lp-tile-1.webp" alt="" class="w-full" />
      <div class="absolute inset-0 flex items-center justify-start p-8">
        <div class="flex flex-col items-start">
          <span class="text-white text-4xl mb-4 uppercase">charge anywhere, anytime</span>
          <span class="text-white text-9xl uppercase">new jump+</span>
          <span class="text-white text-9xl mb-4 uppercase">powerbank</span>
          <div class="flex gap-4 ">
            <button class="bg-yellow-500 text-4xl text-black px-4 py-4 mt-6 uppercase">Learn More</button>
            <button class="bg-yellow-500  text-4xl text-black px-4 py-4 mt-6 uppercase">Shop</button>
           </div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide class="relative">
      <img src="/slider/mk-lp-tile-1.webp" alt="" class="w-full" />
      <div class="absolute inset-0 flex items-center justify-start p-8">
        <div class="flex flex-col items-start">
          <span class="text-black text-4xl mb-4 uppercase">charge anywhere, anytime</span>
          <span class="text-black text-9xl uppercase">new jump+</span>
          <span class="text-black text-9xl mb-4 uppercase">powerbank</span>
          <div class="flex gap-4 ">
            <button class="bg-yellow-500 text-4xl text-black px-4 py-4 mt-6 uppercase">Learn More</button>
            <button class="bg-yellow-500  text-4xl text-black px-4 py-4 mt-6 uppercase">Shop</button>
           </div>
        </div>
      </div>
    </swiper-slide>

     
    </swiper-container>
  </div>
</header>


<style>
.swiper-container {
    cursor: grab;
}



</style>