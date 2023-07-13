<template>
    <section class="">
      <div
        class="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
      >
        <div
          class="w-full bg-gray-600 rounded-lg md:mt-0 sm:max-w-md xl:p-0"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white"
            >
              Registration
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div class="flex justify-between items-center">
                <div>
                  <label
                    for="full_name"
                    class="block mb-2 text-sm font-medium text-white"
                    >Full name</label
                  >
                  <input
                    v-model="input.full_name"
                    type="text"
                    name="full_name"
                    id="full_name"
                    class="border sm:text-sm rounded-lg outline-none block w-full p-2.5 border-white placeholder-gray-400"
                    placeholder="Please enter full name"
                    required=""
                  />
                </div>
                <div>                
                  <label
                    for="username"
                    class="block mb-2 text-sm font-medium text-white"
                    >Username</label
                  >
                  <input
                    v-model="input.username"
                    type="text"
                    name="username"
                    id="username"
                    class="border sm:text-sm rounded-lg outline-none block w-full p-2.5 border-white placeholder-gray-400"
                    placeholder="Please enter full name"
                    required=""
                  />
                </div>
              </div>
              <div class="flex justify-between items-center">
                <div>                
                  <label
                    for="phone_number"
                    class="block mb-2 text-sm font-medium text-white"
                    >Phone number</label
                  >
                  <input
                    v-model="input.phone_number"
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    class="border sm:text-sm rounded-lg outline-none block w-full p-2.5 border-white placeholder-gray-400"
                    placeholder="Please enter you phone number"
                    required=""
                  />
                </div>
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
                    placeholder="user@mail.com"
                    required=""
                  />
                </div>
              </div>
              <div class="flex justify-between items-center">
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
                    class="border outline-none sm:text-sm rounded-lg block w-full p-2.5 border-white placeholder-gray-400 "
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="role"
                    class="block mb-2 text-sm font-medium text-white"
                    >Role</label
                  >
                  <input
                    v-model="input.role"
                    type="text"
                    name="role"
                    id="role"
                    class="border sm:text-sm rounded-lg outline-none block w-full p-2.5 border-white placeholder-gray-400"
                    placeholder="Please enter role"
                    required=""
                  />
                </div>
               
              </div>
              
              <div class="flex items-center justify-end">
                <a
                  href="/login"
                  class="text-sm font-bold text-[#FF8C00] mr-5 hover:underline"
                  >Login</a
                >
              </div>
              <button  @click="addContact($event)"
                type="submit"
                class="w-full bg-white border border-white hover:bg-blue-600 hover:text-white font-bold rounded-lg text-sm px-5 py-2.5 text-center"
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
    import { useRegistration } from '../../service/registration';
    import {useRouter} from 'vue-router';

    const router = useRouter();

    const input = reactive({
      full_name: "",
      username: "",
      phone_number: "",
      email: "",
      password: "",
      role: ""
    })

      const addContact=(evet)=>{
        evet.preventDefault();
        const contact = {
          full_name: input.full_name,
          username: input.username,
          phone_number: input.phone_number,
          email: input.email,
          password: input.password,
          role: input.role
        }

        useRegistration.create(contact).then((res)=>{
          console.log(res);  
          if(res.status == 201){
              input.full_name = ''
              input.username = ''
              input.phone_number = ''
              input.email = ''
              input.password = ''
              input.role = ''
            }
            router.push({name: 'login'})
        }).catch((error)=>{
            if(error.message == 'Request failed with status code 401' || error.message == 'token expired' || error.message == 'token not found'){
                router.push({name: 'registration'})
            }
            toast.error(error.message)
        })
    }
  </script>
  
  <style lang="scss" scoped></style>
  