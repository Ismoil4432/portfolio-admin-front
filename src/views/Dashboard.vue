<script setup>
import Sidebar from '../components/Sidebar/Sidebar.vue'
</script>

<template>
  <main class="min-h-screen">
    <Sidebar />
    <section id="main" class="w-full">
      <div class="p-4 sm:ml-80">
        <div class="p-5">
          <router-view></router-view>
        </div>
      </div>
    </section>
  </main>
</template>
