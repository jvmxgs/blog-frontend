<script setup>
  import Breadcrumb from '@/components/Breadcrumb.vue';
</script>
<template>
  <header class="lg:w-[1024px] w-full m-auto">
    <slot name="navbar"></slot>
    <section class="bg-white shadow-sm drop-shadow-sm mt-2 px-4 py-2 rounded-md">
      <breadcrumb></breadcrumb>
    </section>
  </header>
  <main class="lg:w-[1024px] w-full m-auto flex bg-white shadow-sm drop-shadow-sm mt-2 p-4 text-sm rounded-md">
    <section class="text-justify lg:m-20 md:m-8 overflow-auto w-full">
      <router-view/>
    </section>
<!--     <section class="w-2/12">
      <a href='https://ko-fi.com/L3L7KMF2D' target='_blank'>
        <img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi2.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' />
      </a>
    </section> -->
  </main>
  <!-- <footer class="mt-4 h-40 bg-east-bay">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="text-center md:text-left">
          <h4 class="text-lg font-semibold">Column 1</h4>
          <p class="mt-2">Content for column 1 goes here.</p>
        </div>
        <div class="text-center md:text-left">
          <h4 class="text-lg font-semibold">Column 2</h4>
          <p class="mt-2">Content for column 2 goes here.</p>
        </div>
        <div class="text-center md:text-left">
          <h4 class="text-lg font-semibold">Column 3</h4>
          <p class="mt-2">Content for column 3 goes here.</p>
        </div>
      </div>
    </div>
  </footer> -->
  <footer class="bg-east-bay text-link-water py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-between">
        <div class="w-full md:w-1/2 flex flex-col items-center mb-4">
          <h3 class="text-xl font-semibold mb-2">Contact Me</h3>
          <span>Victor Gomez</span>
          <a href="mailto:jvmxgs@gmail.com">[ jvmxgs@gmail.com ]</a>
        </div>
        <div class="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col items-center">
          <h3 class="text-xl font-semibold mb-2">Support Me</h3>
          <section class="w-full flex justify-center">
            <a href='https://ko-fi.com/L3L7KMF2D' target='_blank' class="inline-block">
              <img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi2.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' />
            </a>
          </section>
        </div>
      </div>

      <hr class="my-6 border-link-water">

      <div class="text-center">
        <p class="text-sm">© 2023 Victor Gomez.</p>
      </div>
    </div>
  </footer>
</template>
