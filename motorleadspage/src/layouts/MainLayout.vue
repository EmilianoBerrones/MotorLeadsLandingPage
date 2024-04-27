<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-dark text-white" height-hint="98" style="font-family: 'GothamPro-Black', serif">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="/motorleadspage/src/assets/motor-leads-logo.png">
          </q-avatar>
          MotorLeads
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Login"/>
        <q-route-tab to="/options" label="Escoger opciones"/>
        <q-route-tab to="/price" label="Precio"/>
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>


<script setup>
import {ref} from 'vue'

defineOptions({
  name: 'MainLayout'
})

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
