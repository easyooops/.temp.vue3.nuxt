<template>
    <div class="reviews-1-wrapper">
        <Swiper
            :modules="[SwiperAutoplay, SwiperEffectCreative]"
            :slides-per-view="1"
            :loop="true"
            :autoplay="{
                delay: 8000,
                disableOnInteraction: true
            }"
            :breakpoints="{
                600:{ slidesPerView:2 },
                920:{ slidesPerView:3 },
            }"
        >
            <SwiperSlide>
                <div class="review-1 bg--white-100 block-shadow r-08">
                    <!-- Quote Icon -->
                    <div class="review-ico ico-65"><span class="flaticon-quote"></span></div>
                    <!-- Text -->
                    <div class="review-txt">
                        <!-- Text -->
                        <p>Etiam sapien sagittis congue augue a massa varius egestas ultrice varius magna a tempus aliquet undo cursus suscipit</p>
                        <!-- Author -->
                        <div class="author-data clearfix">
                            <!-- Avatar -->
                            <div class="review-avatar">
                                <img src="/assets/images/review-author-1.jpg" alt="review-avatar" />
                            </div>
                            <!-- Data -->
                            <div class="review-author">
                                <h6 class="s-18 w-700">Scott Boxer</h6>
                                <p class="p-sm">@scott_boxer</p>
                            </div>
                        </div>
                        <!-- End Author -->
                    </div>
                    <!-- End Text -->
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="review-1 bg--white-100 block-shadow r-08">
                    <!-- Quote Icon -->
                    <div class="review-ico ico-65"><span class="flaticon-quote"></span></div>
                    <!-- Text -->
                    <div class="review-txt">
                        <!-- Text -->
                        <p>At sagittis congue augue diam egestas magna an ipsum vitae purus ipsum primis and cubilia laoreet augue egestas a luctus donec ltrice ligula porta augue magna suscipit lectus gestas</p>
                        <!-- Author -->
                        <div class="author-data clearfix">
                            <!-- Avatar -->
                            <div class="review-avatar">
                                <img src="/assets/images/review-author-2.jpg" alt="review-avatar" />
                            </div>
                            <!-- Data -->
                            <div class="review-author">
                                <h6 class="s-18 w-700">Joel Peterson</h6>
                                <p class="p-sm">Internet Surfer</p>
                            </div>
                        </div>
                        <!-- End Author -->
                    </div>
                    <!-- End Text -->
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="review-1 bg--white-100 block-shadow r-08">
                    <!-- Quote Icon -->
                    <div class="review-ico ico-65"><span class="flaticon-quote"></span></div>
                    <!-- Text -->
                    <div class="review-txt">
                        <!-- Text -->
                        <p>Mauris gestas magnis a sapien etiam sapien congue an augue egestas and ultrice vitae purus diam an integer congue magna ligula egestas magna suscipit</p>
                        <!-- Author -->
                        <div class="author-data clearfix">
                            <!-- Avatar -->
                            <div class="review-avatar">
                                <img src="/assets/images/review-author-3.jpg" alt="review-avatar" />
                            </div>
                            <!-- Data -->
                            <div class="review-author">
                                <h6 class="s-18 w-700">Marisol19</h6>
                                <p class="p-sm">@marisol19</p>
                            </div>
                        </div>
                        <!-- End Author -->
                    </div>
                    <!-- End Text -->
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="review-1 bg--white-100 block-shadow r-08">
                    <!-- Quote Icon -->
                    <div class="review-ico ico-65"><span class="flaticon-quote"></span></div>
                    <!-- Text -->
                    <div class="review-txt">
                        <!-- Text -->
                        <p>Mauris donec a magnis sapien etiam pretium a congue augue volutpat lectus aenean magna and undo mauris lectus laoreet tempor egestas rutrum</p>
                        <!-- Author -->
                        <div class="author-data clearfix">
                            <!-- Avatar -->
                            <div class="review-avatar">
                                <img src="/assets/images/review-author-4.jpg" alt="review-avatar" />
                            </div>
                            <!-- Data -->
                            <div class="review-author">
                                <h6 class="s-18 w-700">Leslie D.</h6>
                                <p class="p-sm">Web Developer</p>
                            </div>
                        </div>
                        <!-- End Author -->
                    </div>
                    <!-- End Text -->
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="review-1 bg--white-100 block-shadow r-08">
                    <!-- Quote Icon -->
                    <div class="review-ico ico-65"><span class="flaticon-quote"></span></div>
                    <!-- Text -->
                    <div class="review-txt">
                        <!-- Text -->
                        <p>An augue cubilia undo laoreet magna suscipit egestas ipsum lectus purus ipsum and primis augue an ultrice ligula egestas suscipit a lectus gestas auctor tempus feugiat impedit</p>
                        <!-- Author -->
                        <div class="author-data clearfix">
                            <!-- Avatar -->
                            <div class="review-avatar">
                                <img src="/assets/images/review-author-5.jpg" alt="review-avatar" />
                            </div>
                            <!-- Data -->
                            <div class="review-author">
                                <h6 class="s-18 w-700">Jennifer Harper</h6>
                                <p class="p-sm">App Developer</p>
                            </div>
                        </div>
                        <!-- End Author -->
                    </div>
                    <!-- End Text -->
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="review-1 bg--white-100 block-shadow r-08">
                    <!-- Quote Icon -->
                    <div class="review-ico ico-65"><span class="flaticon-quote"></span></div>
                    <!-- Text -->
                    <div class="review-txt">
                        <!-- Text -->
                        <p>An augue cubilia laoreet undo magna ipsum semper suscipit egestas magna ipsum ligula a vitae purus and ipsum primis cubilia magna suscipit</p>
                        <!-- Author -->
                        <div class="author-data clearfix">
                            <!-- Avatar -->
                            <div class="review-avatar">
                                <img src="/assets/images/review-author-6.jpg" alt="review-avatar" />
                            </div>
                            <!-- Data -->
                            <div class="review-author">
                                <h6 class="s-18 w-700">Jonathan Barnes</h6>
                                <p class="p-sm">jQuery Programmer</p>
                            </div>
                        </div>
                        <!-- End Author -->
                    </div>
                    <!-- End Text -->
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="review-1 bg--white-100 block-shadow r-08">
                    <!-- Quote Icon -->
                    <div class="review-ico ico-65"><span class="flaticon-quote"></span></div>
                    <!-- Text -->
                    <div class="review-txt">
                        <!-- Text -->
                        <p>Augue egestas porta tempus volutpat egestas augue cubilia laoreet a magna suscipit luctus dolor blandit vitae purus neque tempus an aliquet porta gestas rutrum blandit vitae</p>
                        <!-- Author -->
                        <div class="author-data clearfix">
                            <!-- Avatar -->
                            <div class="review-avatar">
                                <img src="/assets/images/review-author-7.jpg" alt="review-avatar" />
                            </div>
                            <!-- Data -->
                            <div class="review-author">
                                <h6 class="s-18 w-700">Mike Harris</h6>
                                <p class="p-sm">Graphic Designer</p>
                            </div>
                        </div>
                        <!-- End Author -->
                    </div>
                    <!-- End Text -->
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="review-1 bg--white-100 block-shadow r-08">
                    <!-- Quote Icon -->
                    <div class="review-ico ico-65"><span class="flaticon-quote"></span></div>
                    <!-- Text -->
                    <div class="review-txt">
                        <!-- Text -->
                        <p>Augue at vitae purus tempus egestas volutpat augue undo cubilia laoreet magna suscipit luctus dolor blandit at purus tempus feugiat impedit</p>
                        <!-- Author -->
                        <div class="author-data clearfix">
                            <!-- Avatar -->
                            <div class="review-avatar">
                                <img src="/assets/images/review-author-8.jpg" alt="review-avatar" />
                            </div>
                            <!-- Data -->
                            <div class="review-author">
                                <h6 class="s-18 w-700">Evelyn Martinez</h6>
                                <p class="p-sm">WordPress Consultant</p>
                            </div>
                        </div>
                        <!-- End Author -->
                    </div>
                    <!-- End Text -->
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>


<script setup>

</script>