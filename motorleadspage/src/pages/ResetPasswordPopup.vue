<template>
  <q-dialog :model-value="showDialog" @update:model-value="updateShowDialog">
    <q-card>
      <q-card-section>
        <div class="text-h6">Resetear Contraseña</div>
      </q-card-section>

      <q-card-section>
        <q-input
          v-model="email"
          label="Correo Electrónico"
          type="email"
          :rules="[email => !!email || 'El correo es obligatorio']"
          lazy-rules
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancelar" color="negative" v-close-popup @click="closeDialog" />
        <q-btn label="Enviar" color="primary" @click="handleResetPassword" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from 'vue';
import { auth } from '../firebaseConfig';
import { sendPasswordResetEmail } from 'firebase/auth';

export default {
  name: 'ResetPasswordPopup',
  props: {
    showDialog: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:showDialog'],
  setup(props, { emit }) {
    const email = ref('');

    const resetPassword = (email) => {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          console.log('Correo de reset enviado');
        })
        .catch(error => {
          console.error('Error al enviar el correo de reset:', error);
        });
    };

    const handleResetPassword = () => {
      if (email.value) {
        resetPassword(email.value);
        closeDialog();
      }
    };

    const closeDialog = () => {
      emit('update:showDialog', false);
    };

    const updateShowDialog = (value) => {
      emit('update:showDialog', value);
    };

    return {
      email,
      handleResetPassword,
      closeDialog,
      updateShowDialog
    };
  },
};
</script>
