<template>
  <q-page padding>
    <div class="row justify-center items-center">
      <div class="col" style="padding-left: 3vh">
        <h2 :style="{
          fontFamily: '\'GothamPro-Black\', serif',
          backgroundColor:'#f36c2a',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'}">
          Vehículo </h2>
        <q-splitter
          v-model="splitterModel"
          style="height: auto">

          <template v-slot:before>
            <q-tabs
              v-model="tab"
              vertical
              class="text-grey-7">
              <q-tab name="vehículo" icon="directions_car" label="Vehículo"/>
              <q-tab name="precio" icon="attach_money" label="Precio"/>
            </q-tabs>
          </template>

          <template v-slot:after>
            <q-tab-panels
              v-model="tab"
              animated
              swipeable
              vertical
              transition-prev="jump-up"
              transition-next="jump-up">
              <q-tab-panel name="precio">
                <div class="text-h4 q-mb-md">Precio</div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure
                  quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam.
                  In, libero.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure
                  quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam.
                  In, libero.</p>
              </q-tab-panel>

              <q-tab-panel name="vehículo">
                <div class="text-h4 q-mb-md">Vehículo</div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure
                  quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam.
                  In, libero.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure
                  quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam.
                  In, libero.</p>
              </q-tab-panel>
            </q-tab-panels>
          </template>

        </q-splitter>
        <div>
          <canvas id="myChart" width="auto" height="120vh"></canvas> <!-- Añadimos el lienzo de la gráfica -->
        </div>
        <q-btn color="blue-8" size="lg" label="Cotizar nuevo vehículo" @click="redirectToPage"></q-btn>
      </div>
      <div class="col" style="padding-top: 10vh; padding-right: 2vh">
        <q-img :style="{borderRadius:'40px'}" src="https://www.diariomotor.com/imagenes/2015/03/tesla-model-x-9.jpg" :ratio="16/9"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';
import { useRouter } from 'vue-router'; // Importa la utilidad de enrutamiento de Quasar

export default {
  name: "PriceDeployment",
  setup() {
    const tab = ref('precio');
    const splitterModel = ref(20);
    const router = useRouter(); // Obtiene el enrutador de Quasar

    // Datos de ejemplo para la gráfica
    const chartData = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
      datasets: [{
        label: 'Ventas mensuales',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    };

    // Función para crear la gráfica
    const createChart = () => {
      const ctx = document.getElementById('myChart').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    };

    // Función para redireccionar a la página específica
    const redirectToPage = () => {
      router.push('/options');
    };

    onMounted(createChart); // Llamar a la función createChart cuando el componente está montado

    return {
      tab,
      splitterModel,
      redirectToPage
    };
  }
};
</script>
