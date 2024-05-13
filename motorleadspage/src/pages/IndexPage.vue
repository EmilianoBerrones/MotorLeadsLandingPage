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
        <div>
          <h6 style="margin-bottom: 5px">Email</h6>
          <q-input outlined v-model="email"></q-input>
          <h6 style="margin-bottom: 5px">Contraseña</h6>
          <q-input outlined v-model="password" type="password"></q-input>
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
          <q-btn @click="login" class="full-width" style="background: #BABABA; color: darkblue" label="Iniciar sesión"></q-btn>
          <h6>¿Aún no tienes cuenta? <a href="/">Registrate para empezar</a></h6>
        </div>
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

  import { auth } from '../firebaseConfig'
  import { ref } from 'vue'
  import { signInWithEmailAndPassword } from 'firebase/auth'

  const email = ref('')
  const password = ref('')
  const val = ref(false)

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value)
      // Si el inicio de sesión es exitoso, puedes redirigir a otra página o hacer otras operaciones aquí
      console.log('Inicio de sesión exitoso')
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message)
    }
  }
</script>
