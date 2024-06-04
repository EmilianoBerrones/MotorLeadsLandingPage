<template>
  <q-page padding>
    <div class="row justify-center items-center">
      <div class="col-8" style="padding-left: 3vh">
        <h2 :style="{
          fontFamily: '\'GothamPro-Black\', serif',
          backgroundColor:'#f36c2a',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'}">
          Vehículo
        </h2>
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
                <div class="text-h3 q-mb-md">Precio</div>
                <p>${{ Math.fround(carPrice).toFixed(2) }} USD</p>
              </q-tab-panel>
              <q-tab-panel name="vehículo">
                <div class="text-h3 q-mb-md">Vehículo</div>
                <div style="display: flex; flex-direction: column; height: fit-content">
                  <p style="font-weight: bold; margin-bottom: 0">{{ carManu }}</p>
                  <p style="margin: 0">{{ carModel }}</p>
                  <p style="margin: 0">Año {{ carYear }}</p>
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </template>
        </q-splitter>
        <div>
          <canvas id="precioHistorico" width="auto" height="120vh"></canvas>
        </div>
        <q-btn color="blue-8" size="lg" label="Cotizar nuevo vehículo" @click="redirectToPage"></q-btn>
      </div>
      <div class="col-2" style="padding-top: 10vh; padding-right: 2vh">
        <img v-if="baseurl" :src="baseurl" alt="Vehicle Image">
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';
import { useRouter } from 'vue-router';

export default {
  name: "PriceDeployment",
  setup() {
    const tab = ref('precio');
    const splitterModel = ref(20);
    const router = useRouter();
    const carPrice = ref(localStorage.getItem("carPrice"));
    const carManu = ref(localStorage.getItem("carManu"));
    const carModel = ref(localStorage.getItem("carModel"));
    const carYear = ref(localStorage.getItem("carYear"));
    const carModelID = ref(localStorage.getItem('carModelID'));
    const carYearID = ref(localStorage.getItem('carYearID'));
    const version = ref(null);
    const baseurl = ref(null);
    const token = localStorage.getItem('authToken');

    onMounted(async () => {
      await ObtenerIDVersion();
      await ObtenerImagen();
      createChart();
    });

    const ObtenerIDVersion = async () => {
      try {
        const options = {
          headers: {
            'Authorization': token
          }
        };
        const response = await fetch(`https://motorleads-api-d3e1b9991ce6.herokuapp.com/api/v1/models/${carModelID.value}/years/${carYearID.value}/vehicles`, options);
        const data = await response.json();
        version.value = data[0].id;
      } catch (error) {
        console.error('Error al cargar las versiones:', error);
      }
    };

    const ObtenerImagen = async () => {
      try {
        const options = {
          headers: {
            'Authorization': token
          }
        };
        const response = await fetch(`https://motorleads-api-d3e1b9991ce6.herokuapp.com/api/v1/vehicles/${version.value}/pricing`, options);
        const data = await response.json();
        const imgurl = data.make_logo_url;
        baseurl.value = 'https://drive.google.com/thumbnail?id=' + imgurl.substring(32);
      } catch (error) {
        console.error('Error al cargar las imágenes:', error);
      }
    };

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

    const createChart = () => {
      const ctx = document.getElementById('precioHistorico').getContext('2d');
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

    const redirectToPage = () => {
      router.push('/options');
    };

    return {
      tab,
      splitterModel,
      redirectToPage,
      carPrice,
      carModel,
      carManu,
      carYear,
      baseurl
    };
  }
};
</script>
