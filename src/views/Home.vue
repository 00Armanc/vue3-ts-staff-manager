<template>
  <div class="home">
    <div class="staffs">
      <table class="table table-striped">
        <thead>
          <tr>
            <th></th>
            <th>Full Name</th>
            <th>E-mail</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(staff, index) in this.$store.state.staffs" :key="index">
            <td>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
              </svg>
            </td>
            <td class="staff-fullName-icon">
              {{ staff.firstName }} - {{ staff.lastName }}
            </td>
            <td>{{ staff.email }}</td>
            <td>{{ staff.phoneNumber }}</td>
            <td>
              <button class="viewBtn">
                <router-link tag="button" :to="`/staff/${staff.id}`">
                  View
                </router-link>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Home',
  setup() {
    const store = useStore()
    const router = useRouter()

    const removeStaff = (index: number) => {
      store.dispatch('removeData', index)
      store.commit('saveData')
    }
    const editStaff = (data: number) => {
      console.log(data)
      router.push('/add')
    }

    return {
      removeStaff,
      editStaff,
    }
  }
});
</script>

<style>
.staffs {
  width: 90%;
  margin: 80px auto 0 auto;
}
table {
  border: 5px solid rgb(255, 0, 0);
  
}
tbody, td, tfoot, th, thead, tr {
  border-style: none;
}
/* .staff-fullName-icon {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
} */
svg {
  display: flex;
  align-items: center;
  justify-content: center;
}
/* button {
  margin-top: 7px
} */
.viewBtn {
  padding: 3px 7px;
  /* background: rgb(226, 223, 223); */
  color: #000;
  border: 1px solid rgb(226, 223, 223);
}
.viewBtn a {
  color: #000;
}

</style>
