<template>
  <q-page padding>
    <div class="row items-center justify-evenly" style="height: 80vh">
      <div class="col-xl-3 col-md-5">
        <h2 :style="{
          fontFamily: '\'GothamPro-Black\', serif',
          backgroundColor:'#f36c2a',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'}">
          Precios reales para transacciones reales
        </h2>
        <h6 style="margin-bottom: 5px"> Email </h6>
        <q-input outlined v-model="text"></q-input>
        <h6 style="margin-bottom: 5px"> Contraseña </h6>
        <q-input outlined v-model="text"></q-input>

        <div class="row">
          <div class="col">
            <h6>
              <q-checkbox v-model="val" label="Recordarme"></q-checkbox>
            </h6>
          </div>
          <div class="col">
            <h6 style="padding-top: 5px"><a href="/"> Olvide mi contraseña </a></h6>
          </div>
        </div>
        <q-btn class="full-width" style="background: #BABABA; color: darkblue" label="Iniciar sesión"></q-btn>
        <h6>¿Aún no tienes cuenta? <a href="/">Registrate para empezar</a></h6>
      </div>
      <div class="col-xl-3 col-md-4" :style="{
        height:'60vh',
        width:'50vh',
        borderRadius:'26px',
        position:'relative'}">
        <div class="gradient-personalizado">
          <div class="contenedor-gradients">
            <div class="g1"></div>
            <div class="g2"></div>
            <div class="g3"></div>
            <div class="g4"></div>
            <div class="g5"></div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'IndexPage'
});
</script>
