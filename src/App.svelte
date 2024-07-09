<script>
  import { register } from 'swiper/element/bundle'

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

<header class="container">
  <nav>
    <div class="logo">Logo</div>

    <div class="links">
      <ul>
        <li><a href="shop">Link 1</a></li>
        <li><a href="shop">Link 2</a></li>
        <li><a href="shop">Link 3</a></li>
        <li><a href="shop">Link 4</a></li>
      </ul>
    </div>

    <div class="buttons">
      <button>Button 1</button>
      <button>Button 1</button>
      <button>Button 1</button>
      <button>Button 1</button>
    </div>
  </nav>

  <div class="hero">
    <h1 class="text-red">Hero</h1>

    <swiper-container
      slides-per-view={3}
      space-between={spaceBetween}
      centered-slides={true}
      pagination={{
        hideOnClick: true,
      }}
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
      }}
      on:swiperprogress={onProgress}
      on:swiperslidechange={onSlideChange}
    >
      <swiper-slide>
        <img src="https://placehold.co/600x400" alt="" />
      </swiper-slide>

      <swiper-slide>
        <img src="https://placehold.co/600x300" alt="" />
      </swiper-slide>

      <swiper-slide>
        <img src="https://placehold.co/600x400" alt="" />
      </swiper-slide>

      <swiper-slide>
        <img src="https://placehold.co/600x300" alt="" />
      </swiper-slide>
    </swiper-container>
  </div>
</header>
