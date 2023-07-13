<script setup></script>

<template>
  <div class="min-h-screen">
    <section>
      <div class="flex justify-center items-center">
        <div class="w-1/2 flex justify-end items-center">
          <img src="../../assets/images/error.png" alt="" class="w-[75%]">
        </div>
        <div class="w-1/2 grid justify-start px-[100px] items-center">
          <div class="py-8 px-4 mx-auto grid justify-center items-center max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center my-[100%]">
              <h1
                class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-red-600"
              >
                404
              </h1>
              <p
                class="mb-4 text-3xl tracking-tight font-bold md:text-4xl "
              >
              Sorry
              </p>
              <p class="mb-4 text-xl font-blod text-gray-900">
                we can't find that page.
              </p>
              <router-link
                to="/admin-dashboard"
                class="inline-flex text-black  border-black bg-white hover:bg-[#2A2A2A] hover:text-white border-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
                >Back to Homepage</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
