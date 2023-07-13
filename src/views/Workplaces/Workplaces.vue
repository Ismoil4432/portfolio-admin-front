<template>
    <div class="p-3">
        <div class="flex justify-between items-center">
            <h2 class="uppercase dark:text-white text-gray-900 text-2xl font-bold">Workplace</h2>
            <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <button @click="toggleModal" type="button" class="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-2">ADD</button>
            </div>
        </div>
        <!--======================================= Main modal================================================== -->
        <div tabindex="-1" aria-hidden="true" class="overflow-y-auto flex bg-[rgba(0,0,0,0.4)] overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full" :class="modal ? '' : 'hidden'">    
            <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                <!-- Modal content -->
                <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    <!-- Modal header -->
                    <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            <span v-if="!isUpdate">Add workplace</span>
                            <span v-else>Update workplace</span>
                        </h3>
                        <button @click='toggleModal' type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <form >
                        <div class="grid gap-4 mb-4 sm:grid-cols-1">
                            <div>
                                <label for="icon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                                <input v-model="contactInfo.company" type="text" name="icon"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
                            </div>
                            <div>
                                <label for="icon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Position</label>
                                <input v-model="contactInfo.position" type="text" name="icon"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
                            </div>
                            <div>
                                <label for="start" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Working time</label>
                                <input v-model="contactInfo.start_date" type="date" name="link" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-[25%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
                            </div>
                        </div>
                        <div class="flex justify-end items-center">
                            <button v-if="!isUpdate" @click="addContact($event)" type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                Create
                            </button>
                            <button v-else @click="modifyContact($event)" type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                Update
                            </button>
                        </div>
    
                    </form>
                </div>
            </div>
        </div>
        <!-- -------------------------end of modal------------------------------------- -->
        <section class=" p-0 sm:p-5 md:p-0 md:py-4 mt-10">
        <!-- ------------------------table-------------------------------------------- -->
        <div class="w-full px-0 lg:p-0">
            <!-- Start coding here -->
            <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                <div class="overflow-x-auto">
                    <table class="w-full text-sm table-auto">
                        <thead class="text-white font-bold text-md uppercase bg-gray-500 ">
                            <tr class="text-left">
                                <th scope="col" class="px-4 py-3">Company</th>
                                <th scope="col" class="px-4 py-3">Positions</th>
                                <th scope="col" class="px-4 py-3">Working times</th>
                                <th scope="col" class="px-10 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="">
                            <tr v-for="el in computedList" :key="el.id" class="border-b dark:border-gray-700">
                                <td class="px-4 py-3">{{ el.company }}</td>
                                <td class="px-4 py-3">{{el.position}}</td>
                                <td class="px-4 py-3">{{el.start_date}}</td>
                                <td class="px-4 py-3 text-[20px]">
                                    <div  class="bg-white flex justify-end items-center">
                                        <button @click="showModal(el.id)" >
                                            <div class="w-6 h-6 py-1 rounded-md bg-red-500 mr-4 cursor-pointer">
                                                <i class="bx bx-trash text-white text-[16px] flex items-center justify-center"></i>
                                            </div>
                                        </button>
                                        <button @click="updateContact(el.id)">
                                            <div class="w-6 h-6 py-1 rounded-md bg-blue-500 mr-4 cursor-pointer">
                                                <i class="bx bx-task text-white text-[16px] flex items-center justify-center"></i>
                                            </div>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                         </tbody>
                    </table>
                </div>
                
            </div>
        </div>
        <!-- ==================================================================================================================== -->
            <Modal v-if="isShowModal" @close="closeModal" >
                <template #header>
                    <div class="  flex items-center text-lg text-red-600 font-extrabold ">Warning!</div>
                </template>
                <template #body>
                    <p class="text-base leading-relaxed">Do you want to delete?</p>
                </template>
                <template #footer>
                    <div class="flex justify-end gap-6">
                        <button @click="removeContact" type="button" class="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Yes</button>
                        <button @click="closeModal" type="button" class="text-white bg-blue-600 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-white focus:z-10 ">No</button>
                    </div>
                </template>                       
            </Modal>
        </section>
      </div>
</template>

<script setup>
    import { ref, reactive, computed, onMounted }  from 'vue'
    import { workplaceStore } from '../../stores/workplaceStore';
    import { toast } from 'vue3-toastify';
    import { useWorkplace } from '../../service/workplace';
    import { useRouter } from 'vue-router'
    import { Modal } from 'flowbite-vue'

    const isShowModal = ref(false)
    function closeModal() {
    isShowModal.value = false
    localStorage.removeItem('delete_id')
    }

    function showModal(delete_id) {
        localStorage.setItem('delete_id', delete_id)
        isShowModal.value = true
    }

    const router = useRouter();
    const store = workplaceStore();
    const modal = ref(false);
    const isUpdate = ref(false);
    let computedList = ref([])

    const contactInfo = reactive({
        company: '',
        position: '',
        start_date: ''
    })


    const toggleModal = () => {
        if(modal.value){
            isUpdate.value = false
            contactInfo.company = ''
            contactInfo.position = ''
            contactInfo.start_date = ''
        }
        modal.value = !modal.value
    }

    const updateList = () => {
        useWorkplace.list().then((res)=>{
            store.state.list = res.data    
        }).catch((error)=>{
            if(error.message == 'Request failed with status code 401' || error.message == 'token expired' || error.message == 'token not found'){
                router.push({name: 'login'})
            }
            else{
                // toast.error('error');
            console.log(error);

            }
            console.log(error.message);
        })
    }

    const addContact=(evet)=>{
        evet.preventDefault();
        const contact = {
            company: contactInfo.company,
            position: contactInfo.position,
            start_date: contactInfo.start_date
        }

        useWorkplace.create(contact).then((res) =>{
            if(res.status == 201){
                toast.success('successfully added contact !', {autoClose: 1500, theme: 'dark', pauseOnHover: false})
                contactInfo.company = ''
                contactInfo.position = ''
                contactInfo.start_date = ''
                toggleModal()
                updateList();
            }
        }).catch((error)=>{
            if(error.message == 'Request failed with status code 401' || error.message == 'token expired' || error.message == 'token not found'){
                router.push({name: 'login'})
            }
            toast.error(error.message)
        })
    }

    const modifyContact=(event)=>{
        event.preventDefault();
        const id  = localStorage.getItem('id')
        const contact = {
            company: contactInfo.company,
            position: contactInfo.position,
            start_date: contactInfo.start_date
        }


        useWorkplace.update(id, contact).then((res) => {
            if(res.status == 200){
                toast.success('successfully updated contact !', {autoClose: 1000, theme: 'dark', pauseOnHover: false})
                contactInfo.company = ''
                contactInfo.position = ''
                contactInfo.start_date = ''
                isUpdate.value = false;
                updateList();
                toggleModal()
            }
        }).catch((error)=>{
            if(error.message == 'Request failed with status code 401' || error.message == 'token expired' || error.message == 'token not found'){
                router.push({name: 'login'})
            }
            toast.error(error.message)
        })
    }

    const removeContact=()=>{
        const id = localStorage.getItem('delete_id')
        console.log(id);
        useWorkplace.remove(id).then((res) =>{
            if(res.status == 200){
                toast.success('deleted',{autoClose: 1000})
                updateList();
                closeModal()
            }
        }).catch((error)=>{
            console.log(error);
        })
    }

    const updateContact = (id)=>{
        localStorage.setItem('id', id)
        isUpdate.value = true;
        const foundContact = store.findOne(id)
        contactInfo.company = foundContact[0].company
        contactInfo.position = foundContact[0].position
        contactInfo.start_date = foundContact[0].start_date
        toggleModal();
    }

    computedList = computed(()=> {
        return store.state.list;
    })

    onMounted(()=>{
        updateList()
    })
</script>

<style lang="scss" scoped>

</style>