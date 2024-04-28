<template>
  <q-page padding>
    <div class="row items-center justify-center" style="height: 80vh">
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
