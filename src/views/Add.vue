<template>
    <div class="addNewStaff">
        <h1 class="addStaffTitle">Add Staff</h1>
        <form @submit.prevent="addNewStaff">
            <div class="block">
                <h3>Staff Information</h3>
                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-text" placeholder="First name" v-model="newStaff.firstName">
                </div>
                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-text" placeholder="Last name" v-model="newStaff.lastName">
                </div>
            </div>
            <div class="block">
                <h3>Staff Contact</h3>
                <div class="form-group">
                    <label>Phone Number</label>
                    <input type="number" class="form-text" placeholder="Phone Num" v-model="newStaff.phoneNumber">
                </div>
                <div class="form-group">
                    <label>Staff E-mail</label>
                    <input type="text" class="form-text" placeholder="E-mail" v-model="newStaff.email">
                </div>
            </div>
            <div class="block">
                <h3>Staff Location</h3>
                <div class="form-group">
                    <label>Adress</label>
                    <input type="text" class="form-text" placeholder="Adress" v-model="newStaff.adress">
                </div>
                <div class="form-group">
                    <label>City</label>
                    <input type="text" class="form-text" placeholder="City" v-model="newStaff.city">
                </div>
                <div class="form-group">
                    <label>State</label>
                    <input type="text" class="form-text" placeholder="State" v-model="newStaff.state">
                </div>
            </div>
            <button class="add-btn">Add Staff</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Add',
  setup() {
      const store = useStore()
      const router = useRouter()

      const newStaff = reactive({
        id: 1,
        firstName: '',
        lastName: '',
        phoneNumber: '',
        gmail: '',
        adress: '',
        city: '',
        state: '',
        fullName: () => {
            return newStaff.firstName + newStaff.lastName
        }
      })

      const addNewStaff = () => {
          if(newStaff.firstName === "" || newStaff.lastName === "" &&
            newStaff.phoneNumber === "" || newStaff.gmail === "" &&
            newStaff.adress === "" || newStaff.city === "" && newStaff.state === "")
            {   
                console.log('input is empty')
            } else {
                router.push('/')
                setTimeout(() => {
                    newStaff.id = store.state.staffs.length+1
                    store.dispatch('getData', newStaff)
                    store.commit('saveData')
                }, 300)
            }
      }

      return {
          newStaff,
          addNewStaff,
      }
  }
});
</script>

<style>
.addNewStaff {
    margin: 0 30px;
    text-align: center;
}
.addStaffTitle {
    text-align: left;
    padding-left: 40px;
    margin-top: 20px;   
}
.block {
    border: 1px solid rgb(228, 228, 228);
    background-color: rgb(241, 238, 238);
    border-radius: 5px;
    padding: 30px 10px;
    margin: 30px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
}
.block:first-child {
    margin-top: 20px;
}
.form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 95%;
    margin: 0 auto;
    padding: 5px 0;
}
.block > h3 {
    margin: 0 auto;
}
.form-text {
    width: 100%;
    height: 30px;
    padding: 10px;
    font-size: 18px;
    border: 1px solid rgb(230, 229, 229);
    color: #000;
}
.add-btn {
    padding: 7px 60px;
    font-size: 15px;
    margin-bottom: 50px;
}
</style>