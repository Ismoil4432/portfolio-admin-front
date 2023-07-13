<template>
  <section>
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >

      <div
        class="w-full bg-gray-600 rounded-lg md:mt-0 sm:max-w-md xl:p-0"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white"
          >
            Login to your account
          </h1>
          <form  @submit.prevent="loginUser" class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-white"
                >Your email</label
              >
              <input
                v-model="input.email"
                type="email"
                name="email"
                id="email"
                class="border sm:text-sm rounded-lg outline-none block w-full p-2.5 border-white placeholder-gray-400"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-white"
                >Password</label
              >
              <input
                v-model="input.password"
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="border outline-none sm:text-sm rounded-lg block w-full p-2.5 border-white placeholder-gray-400"
                required=""
              />
            </div>
            <div class="flex items-center justify-end">
              <a
                href="/registration"
                class="text-sm font-medium text-[#FF8C00] hover:underline"
                >Registration</a
              >
            </div>
            <button
              type="submit"
              class="w-full bg-white border border-white hover:bg-blue-600 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import {reactive} from 'vue'
  import { useAuth } from '../../service/auth';
  import {useRouter} from 'vue-router';
  // import { toast } from 'vue3-toastify';

  const router = useRouter();

  const input = reactive({
    email: "",
    password: ""
  })

  const loginUser = ()=> {
    const user = {
      email: input.email,
      password: input.password
    }
    useAuth(user).then((res)=>{
      console.log(res);
      localStorage.setItem('token', res?.data?.tokens?.access_token);
      router.push("/admin-dashboard");
      // toast.success("Welcome to the system", {autoClose: 500})
    }).catch((error)=>{
      // toast.error(error.message)
      console.log(error.message);
    })
  }
</script>

<style lang="scss" scoped></style>
