<template>
  <div @click="goHome" class="go-back">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
    </svg>
  </div>
  <div class="staff">
    <ul class="list-group">
      <li class="list-group-item">
        <div class="staff-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
        </div>
        <div v-if="!isEdit" class="staff-text">
          {{ obj.fullName }}
        </div>
        <div v-if="isEdit" class="staff-text">
          <input type="text" v-model="obj.fullName">
        </div>
      </li>
    </ul>
    <br>
    <ul class="list-group">
      <li class="list-group-item">
        <div class="staff-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
          </svg>
        </div>
        <div v-if="!isEdit" class="staff-text">
          {{ staffName($route.params.id).phoneNumber }}
        </div>
        <div v-if="isEdit" class="staff-text">
          <input type="text" v-model="staffName(id).phoneNumber">
        </div>
      </li>
      <li class="list-group-item">
        <div class="staff-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
          </svg>
        </div>
        <div v-if="!isEdit" class="staff-text">
          {{ staffName($route.params.id).email }}
        </div>
        <div v-if="isEdit" class="staff-text">
          <input type="text" v-model="staffName($route.params.id).email">
        </div>
      </li>
    </ul>
    <br>
    <ul class="list-group">
      <li class="list-group-item">
        <div class="staff-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
          </svg>
        </div>
        <div v-if="!isEdit" class="staff-text">
          {{ staffName(id).adress }}
        </div>
        <div v-if="isEdit" class="staff-text">
          <input type="text" v-model="staffName(id).adress">
        </div>
      </li>
      <li class="list-group-item">
        <div class="staff-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
            <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
          </svg>
        </div>
        <div v-if="!isEdit" class="staff-text">
          {{ staffName(id).city }}
        </div>
        <div v-if="isEdit" class="staff-text">
          <input type="text" v-model="staffName(id).city">
        </div>
      </li>
      <li class="list-group-item">
        <div class="staff-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-signpost-fill" viewBox="0 0 16 16">
            <path d="M7.293.707A1 1 0 0 0 7 1.414V4H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5v6h2v-6h3.532a1 1 0 0 0 .768-.36l1.933-2.32a.5.5 0 0 0 0-.64L13.3 4.36a1 1 0 0 0-.768-.36H9V1.414A1 1 0 0 0 7.293.707z"/>
          </svg>
        </div>
        <div v-if="!isEdit" @dblclick="edit" class="staff-text">
          {{ staffName(id).state }}
        </div>
        <div v-if="isEdit" class="staff-text">
          <input type="text" v-model="staffName(id).state">
        </div>
      </li>
    </ul>
    <div class="buttons">
      <button @click="editControl()">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
        </svg>
      </button>
      <button @click="removeStaff(staff)">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'Staff',
  setup() {   
    const store = useStore()
    const router = useRouter()
    const route = useRoute()

    const id = Number(route.params.id )

    const obj = {
      fullName: `${store.state.staffs[id-1].firstName} ${store.state.staffs[id-1].lastName}`
    }

    const isEdit = computed(() => {
      return store.state.isEdit
    })

    const staffName = (num: number) => {
      return store.state.staffs[num-1]
    }

    const goHome = () => {
      return router.push('/')
    }
    
    const removeStaff = (index: number) => {
      router.push('/')
      setTimeout(() => {
        store.dispatch('removeData', index)
        store.commit('saveData')
      }, 500)
      console.log(index)
    }
    
    const editControl = () => {
      store.state.isEdit = !store.state.isEdit
      console.log(store.state.isEdit)
      store.commit('saveData')
    }
    
    return {
      staffName,
      goHome,
      removeStaff,
      editControl,
      isEdit,
      id,
      obj
    }
  }
});
</script>

<style>
.staff {
  text-align: center;
  width: 80%;
  margin: 0 auto;
  margin-top: 0px;
  height: auto;
}
.list-group {
  width: 500px;
  margin: 0 auto;
}
.list-group-item {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid rgba(0,0,0,.125);
}
.staff-icon {
  width: fit-content;
  flex: 1;
}
.staff-text {
  flex: 10;
  text-align: left;
}
.go-back {
  margin: 25px 0 0 25px;
  width: 50px;
  height: 50px;
  display: inline-block;
  cursor: pointer;
}
.back-icon:hover {
  background: #000;
  color: #fff;
}
.buttons {
  width: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
}
.buttons button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  /* background: none; */
  border-radius: 50%;
}
.buttons button:hover {
  background: #d1cfcf;
}
</style>

