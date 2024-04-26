<template>
  <q-page padding>
    <div class="row items-center justify-evenly" style="height: 80vh">
      <div class="col-xl-3 col-md-5">
        <h2>Precios reales para transacciones reales</h2>
        <h6> Email </h6>
        <q-input outlined v-model="text"> </q-input>
        <h6> Contraseña </h6>
        <q-input outlined v-model="text"> </q-input>

        <div class="row">
          <div class="col">
            <h6>
              <q-checkbox v-model="val" label="Recordarme"></q-checkbox>
            </h6>
          </div>
          <div class="col">
            <h6 style="padding-top: 5px"> <a href="/"> Olvide mi contraseña </a> </h6>
          </div>
        </div>
        <q-btn class="glossy full-width" color="primary" label="Iniciar sesión"></q-btn>
        <h6>¿Aún no tienes cuenta? <a href="/">Registrate para empezar</a></h6>
      </div>
      <div class="col-xl-3 col-md-4">
        <h1>Imagen</h1>
      </div>
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'IndexPage'
});
</script>
