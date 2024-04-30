<template>
  <q-page padding>
    <div class="gradient-personalizado"
         :style="{
          position:'absolute',
          zIndex:-1
          }">
      <div class="contenedor-gradients" style="z-index: -1">
        <div class="g1"></div>
        <div class="g2"></div>
        <div class="g3"></div>
        <div class="g4"></div>
        <div class="g5"></div>
      </div>
    </div>
    <div class="row items-center justify-center q-mx-auto"
         :style="{height: '85vh',
         maxWidth: '70%',
         backgroundColor:'white',
         borderRadius:'16px',
         zIndex: 1}">
      <div class="col-4">
        <h5>Selecciona una marca</h5>
        <q-btn-dropdown class="full-width"></q-btn-dropdown>
        <h5>Selecciona un modelo</h5>
        <q-btn-dropdown class="full-width"></q-btn-dropdown>
        <h5>Selecciona un año</h5>
        <q-btn-dropdown class="full-width"></q-btn-dropdown>
        <h5>Selecciona una version</h5>
        <q-btn-dropdown class="full-width"></q-btn-dropdown>
        <h5>Agrega un kilometraje</h5>
        <q-input></q-input>
        <h5>Selecciona un color</h5>
        <q-btn-dropdown class="full-width"></q-btn-dropdown>
        <h6>
          <q-btn glossy color="primary" class="full-width" size="lg" label="Buscar"></q-btn>
        </h6>
      </div>
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'OptionsPage'
});
</script>
