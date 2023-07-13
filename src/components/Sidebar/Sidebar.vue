<script setup>
import { ref, onMounted } from "vue";
import { navLinks } from "../../constants/navLinks";
import { useRouter } from "vue-router";

const navlink = ref(navLinks);
const role = ref("");
const modal = ref(false);

const toggleModal = () => (modal.value = !modal.value);

const router = useRouter();

const logout = () => {
  localStorage.clear();
  router.push({ name: "login" });
};

onMounted(() => {
  console.log(localStorage.getItem("role"));
  role.value = localStorage.getItem("role");
});
</script>

<template>
  <div>
    <button
      @click="toggleModal"
      data-drawer-target="default-sidebar"
      data-drawer-toggle="default-sidebar"
      aria-controls="default-sidebar"
      type="button"
      class="inline-flex items-center p-2 mt-2 ml-3 text-sm rounded-lg sm:hidden hover:text-[#FF8C00] focus:outline-none focus:ring-2 focus:ring-gray-600"
    >
      <span class="sr-only"></span>
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
        ></path>
      </svg>
    </button>

    <aside
      id="default-sidebar"
      :class="
        !modal
          ? 'fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0'
          : 'hidden'
      "
      aria-label="Sidebar"
    >
      <div class="h-[100%] px-3 py-4 overflow-y-auto bg-gray-500">
        <h1 class="text-[50px] font-bold mt-5 mb-10 text-teal-200 text-center">Portfolio</h1>
        <ul class="space-y-2 font-medium">
          <li v-for="link in navlink" :key="link.id">
            <router-link
              :to="link.link"
              class="flex items-center p-2 rounded-lg text-[20px] text-white hover:text-black hover:bg-white"
            >
              <i :class="link.icon"></i>
              <span class="ml-5">{{ link.title }}</span>
            </router-link>
          </li>
        </ul>

        <button
          @click="logout"
          class="block px-3 py-2 rounded-xl focus:ring-4 text-white absolute bottom-3 text-[20px] hover:text-red-600 hover:font-bold"
        >
          Logout <i class="bx bx-log-out ml-5"></i>
        </button>
      </div>
    </aside>

    <aside
      id="default-sidebar"
      :class="
        modal
          ? 'fixed top-0 left-0 z-40 w-80 h-screen transition-transform translate-x-0'
          : 'hidden'
      "
      aria-label="Sidebar"
    >
      <div class="h-[100%] px-3 py-4 overflow-y-auto bg-slate-900 relative">
        <button @click="toggleModal" class="absolute right-3 top-3 p-1 text-white rounded-lg flex items-center justify-center hover:text-black focus:ring-2 hover:bg-white">
          <i class="bx bx-x text-[30px]"></i>
        </button>
        <h1 class="text-[30px] font-semibold ml-2 mt-10 mb-5 text-yellow-400">
          Port<span class="text-white font-semibold">folio</span>
        </h1>
        <ul class="space-y-2 font-medium">
          <li v-for="link in navlink" :key="link.id">
            <router-link
              :to="link.link"
              class="flex items-center p-2 rounded-lg text-[20px] text-white hover:bg-white hover:text-black"
            >
              <i :class="link.icon"></i>
              <span class="ml-3">{{ link.title }}</span>
            </router-link>
          </li>
        </ul>

        <button
          @click="logout"
          class="block px-3 py-2 mt-5 rounded-xl focus:ring-4 text-white absolute bottom-3 text-[30px] hover:bg-white hover:text-black"
        >
          <i class="bx bx-log-out"></i>
        </button>
      </div>
    </aside>
  </div>
</template>

<style lang="css" scoped>
.router-link-exact-active {
  background-color: white;
  border: 1px solid white;
  color: black;
}
.router-link-exact-active:hover {
  color: white;
}
</style>
