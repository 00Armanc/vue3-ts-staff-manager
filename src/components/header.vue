<template>
    <div class="header">
        <div class="hd-res">
            <div class="header-left">
                <router-link to="/"><h1>STAFF MANAGER</h1></router-link>
                <div class="tabs">
                    <router-link to="/"><p class="tabs-tg">Home</p></router-link>
                    <router-link to="/about"><p class="tabs-tg">About us</p></router-link>
                </div>
            </div>
            <div class="header-right">
                <router-link to="/add">
                    <button class="add-staff-btn">
                        Add Staff
                    </button>
                </router-link>    
            </div>
        </div>    
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "Header"
})
</script>
 
<style>
.header {
    border-bottom: 1px solid rgb(172, 161, 161);
    padding: 15px;
    width: 100%;
}
.hd-res {
    margin: 0 auto;
    max-width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.header-left {
    width: fit-content;
    display: flex;
}
.tabs {
    margin-left: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 200px;
}
.add-staff-btn {
    padding: 5px 10px 5px 10px;
    background: #fff;
    border: 1px solid rgb(172, 161, 161);
    font-size: 1.1em;
}
.add-staff-btn:hover {
    background: rgb(241, 241, 241);
}
.tabs-tg {
    font-weight: bold;
}
</style>