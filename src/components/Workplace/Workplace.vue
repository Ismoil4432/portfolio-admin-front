<template>
    <div class="container mx-auto">
        <div class="flex justify-center items-center mt-10">
            <div class="relative rounded-lg w-[75%] bg-gray-300">
                <div
                  class="flex justify-between items-center p-4 pl-10 sm:mb-5 bg-gray-500 rounded-t-lg"
                >
                  <h3 class="text-3xl font-bold text-white">Workplace</h3>
                </div>
                <form class="w-full p-5">
                  <div class="w-full flex flex-col items-center gap-8 mb-20">
                    <div
                      class="w-full flex flex-col justify-between items-center gap-8 lg:flex lg:flex-row"
                    >
                    <div class="w-full lg:w-[50%]">
                      <label for="link" class="block mb-2 text-[18px] text-black font-bold"
                        >Company</label
                      >
                      <input
                        type="text"
                        name="link"
                        id="link"
                        class="w-full h-14 bg-white border outline-none border-white border-dashed text-black rounded-lg block p-3"
                        placeholder="Company name"
                        required=""
                      />
                    </div>                      
                         <div class="w-full lg:w-[50%]">
                          <label for="link" class="block mb-2 text-[18px] text-black font-bold"
                            >Position</label
                          >
                          <input
                            type="text"
                            name="link"
                            id="link"
                            class="w-full h-14 bg-white border outline-none border-white border-dashed text-black rounded-lg block p-3"
                            placeholder="Please enter position"
                            required=""
                          />
                        </div>
                    </div>
          
                    <div
                      class="w-full flex flex-col justify-between gap-8 lg:flex lg:flex-row"
                    >
                      <div class="w-full lg:w-[50%]">
                        <label for="link-code" class="block mb-2 text-[18px] font-bold text-black"
                          >Start date</label
                        >
                        <input type="date" name="brand" id="brand" class="bg-[#FFFFFF] border mt-2 outline-none border-gray-500 text-black  text-sm rounded-[5px] block w-[220px] h-[40px] p-2.5"  placeholder="1995.02.25" required="">

                      </div>

                    </div>
                  </div>
          
                  <div
                    class="w-full flex flex-col gap-5 md:flex md:flex-row items-center justify-end"
                  >
                    <button
                      class="bg-blue-700 px-4 py-1 rounded-lg text-white font-bold border-2 border-green-500 hover:bg-[#414141] hover:text-green-500"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
        </div>
      </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>