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
          <q-input outlined v-model="email" :rules="[emailRule]"></q-input>
          <h6 style="margin-bottom: 5px">Contraseña</h6>
          <q-input v-model="password" :type="isPwd ? 'password' : 'text'">
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <div class="row">
            <div class="col">
              <h6>
                <q-checkbox v-model="val" label="Recordarme"></q-checkbox>
              </h6>
            </div>
            <div class="col">
              <h6 style="padding-top: 5px"><a href="#" @click.prevent="showResetPasswordDialog = true"> Olvidé mi contraseña </a></h6>
            </div>
          </div>
          <q-btn @click="loginFirebase" class="full-width" style="background: #BABABA; color: darkblue" label="Iniciar sesión"></q-btn>
          <br>
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
    <ResetPasswordPopup v-model:showDialog="showResetPasswordDialog" />
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import ResetPasswordPopup from 'pages/ResetPasswordPopup.vue'; // Asegúrate de que esta ruta sea correcta

const email = ref("");
const password = ref("");
const val = ref(false);
const router = useRouter();
let isPwd = ref(true);
const showResetPasswordDialog = ref(false);

// Chequeo de email
const emailRule = val => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(val) || 'Por favor ingresa un email válido';
};

const loginAPI = async () => {
  try {
    const response = await fetch('https://motorleads-api-d3e1b9991ce6.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: email.value,
          password: 'Password!'
        }
      })
    });

    if (!response.ok) {
      throw new Error('Error en la respuesta de la API');
    }

    const headers = response.headers;
    const authToken = headers.get('Authorization');
    localStorage.setItem('authToken',authToken);

    console.log('Headers:', headers);
    console.log('Authorization Token:', authToken);

    const data = await response.json();
    console.log('Inicio de sesión exitoso', data);

  } catch (error) {
    console.error('Error al iniciar sesión:', error.message);
  }
};

const loginFirebase = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    console.log("Inicio de sesion exitoso");
    await loginAPI();
    router.push('/options');
  } catch (error) {
    console.error('Error al iniciar sesion: ', error.message);
    alert('El usuario o contraseña son incorrectos');
  }
};
</script>
