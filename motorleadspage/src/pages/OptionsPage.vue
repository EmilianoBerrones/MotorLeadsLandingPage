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
      <div class="col-xl-6 col-md-8">
        <div v-if="$q.screen.xl || $q.screen.gt.lg" class="text-h5" style="padding-top: 25px; padding-bottom: 25px">Selecciona una marca</div>
        <div v-else class="text-h6" style="padding-top: 5px; padding-bottom: 5px">Selecciona una marca</div>
        <q-btn-dropdown class="full-width"></q-btn-dropdown>
        <div v-if="$q.screen.xl || $q.screen.gt.lg" class="text-h5" style="padding-top: 25px; padding-bottom: 25px">Selecciona un modelo</div>
        <div v-else class="text-h6" style="padding-top: 5px; padding-bottom: 5px">Selecciona un modelo</div>
        <q-btn-dropdown class="full-width"></q-btn-dropdown>
        <div v-if="$q.screen.xl || $q.screen.gt.lg" class="text-h5" style="padding-top: 25px; padding-bottom: 25px">Selecciona un año</div>
        <div v-else class="text-h6" style="padding-top: 5px; padding-bottom: 5px">Selecciona un año</div>
        <q-btn-dropdown class="full-width"></q-btn-dropdown>
        <div v-if="$q.screen.xl || $q.screen.gt.lg" class="text-h5" style="padding-top: 25px; padding-bottom: 25px">Selecciona una version</div>
        <div v-else class="text-h6" style="padding-top: 5px; padding-bottom: 5px">Selecciona una version</div>
        <q-btn-dropdown class="full-width"></q-btn-dropdown>
        <div v-if="$q.screen.xl || $q.screen.gt.lg" class="text-h5" style="padding-top: 25px; padding-bottom: 25px">Agrega un kilometraje</div>
        <div v-else class="text-h6" style="padding-top: 5px; padding-bottom: 5px">Agrega un kilometraje</div>
        <q-input></q-input>
        <div v-if="$q.screen.xl || $q.screen.gt.lg" class="text-h5" style="padding-top: 25px; padding-bottom: 25px">Selecciona un color</div>
        <div v-else class="text-h6" style="padding-top: 5px; padding-bottom: 5px">Selecciona un color</div>
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
