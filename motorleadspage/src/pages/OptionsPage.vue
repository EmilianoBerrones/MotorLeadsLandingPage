<template>
  <q-page padding>
    <form id="SearchForm">
      <div class="gradient-personalizado" :style="{ position: 'absolute', zIndex: -1 }">
        <div class="contenedor-gradients" style="z-index: -1">
          <div class="g1"></div>
          <div class="g2"></div>
          <div class="g3"></div>
          <div class="g4"></div>
          <div class="g5"></div>
        </div>
      </div>
      <div class="row items-center justify-center q-mx-auto" :style="{ height: '214vh', maxWidth: '70%', backgroundColor: 'white', borderRadius: '16px', zIndex: 1 }">
        <div class="col-xl-6 col-md-8">
          <div v-if="$q.screen.xl || $q.screen.gt.lg" class="text-h5" style="padding-top: 25px; padding-bottom: 25px">Agrega el Levy</div>
          <div v-else class="text-h6" style="padding-top: 5px; padding-bottom: 5px">Agrega el Levy</div>
          <q-input v-model="formData.Levy"></q-input>
          <div v-if="$q.screen.xl || $q.screen.gt.lg" class="text-h5" style="padding-top: 25px; padding-bottom: 25px">Selecciona una marca</div>
          <div v-else class="text-h6" style="padding-top: 5px; padding-bottom: 5px">Selecciona una marca</div>
          <q-btn-dropdown class="full-width" :label="marcaSeleccionadaTexto">
            <q-list>
              <q-item v-for="marca in marcas" :key="marca.id" clickable @click="seleccionarMarca(marca)">
                <q-item-section>
                  <q-item-label>{{ marca.name }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <div v-if="$q.screen.xl || $q.screen.gt.lg" class="text-h5" style="padding-top: 25px; padding-bottom: 25px">Selecciona un modelo</div>
          <div v-else class="text-h6" style="padding-top: 5px; padding-bottom: 5px">Selecciona un modelo</div>
          <q-btn-dropdown class="full-width" :label="modeloSeleccionadoTexto" :disable="modelos.length === 0">
            <q-list>
              <q-item v-for="modelo in modelos" :key="modelo.id" clickable @click="seleccionarModelo(modelo)">
                <q-item-section>
                  <q-item-label>{{ modelo.name }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <div v-if="$q.screen.xl || $q.screen.gt.lg" class="text-h5" style="padding-top: 25px; padding-bottom: 25px">Selecciona un año</div>
          <div v-else class="text-h6" style="padding-top: 5px; padding-bottom: 5px">Selecciona un año</div>
          <q-btn-dropdown class="full-width" :label="anioSeleccionadoTexto" :disable="anios.length === 0">
            <q-list>
              <q-item v-for="anio in anios" :key="anio.id" clickable @click="seleccionarAnio(anio)">
                <q-item-section>
                  <q-item-label>{{ anio.name }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <div v-if="$q.screen.xl || $q.screen.gt.lg" class="text-h5" style="padding-top: 25px; padding-bottom: 25px">Agrega un kilometraje</div>
          <div v-else class="text-h6" style="padding-top: 5px; padding-bottom: 5px">Agrega un kilometraje</div>
          <q-input
            v-model="formData.Mileage"
            type="number"
            @input="validateKilometraje"
            :rules="[val => val >= 0 || 'Debe ser un número positivo']">
          </q-input>
          <div v-if="$q.screen.xl || $q.screen.gt.lg" class="text-h5" style="padding-top: 25px; padding-bottom: 25px">Agrega la categoria</div>
          <div v-else class="text-h6" style="padding-top: 5px;">Agrega la categoria</div>
          <q-input v-model="formData.Category"></q-input>
          <div v-if="$q.screen.xl || $q.screen.gt.lg" class="text-h5" style="padding-top: 25px; padding-bottom: 25px">Interior de Cuero</div>
          <div v-else class="text-h6" style="padding-top: 5px; padding-bottom: 5px">Interior de Cuero</div>
          <q-btn-dropdown class="full-width" :label="cueroSeleccionadoTexto">
            <q-list>
              <q-item clickable @click="seleccionarCuero('Yes')">
                <q-item-section>
                  <q-item-label>Yes</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable @click="seleccionarCuero('No')">
                <q-item-section>
                  <q-item-label>No</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <div v-if="$q.screen.xl || $q.screen.gt.lg" class="text-h5" style="padding-top: 25px; padding-bottom: 25px">Agrega el tipo de combustible</div>
          <div v-else class="text-h6" style="padding-top: 5px;">Agrega el tipo de combustible</div>
          <q-input v-model="formData['Fuel type']"></q-input>
          <div v-if="$q.screen.xl || $q.screen.gt.lg" class="text-h5" style="padding-top: 25px; padding-bottom: 25px">Agrega el volumen del motor</div>
          <div v-else class="text-h6" style="padding-top: 5px;">Agrega el volumen del motor</div>
          <q-input v-model="formData['Engine volume']"></q-input>
          <div v-if="$q.screen.xl || $q.screen.gt.lg" class="text-h5" style="padding-top: 25px; padding-bottom: 25px">Agrega el numero de cilindros</div>
          <div v-else class="text-h6" style="padding-top: 5px;">Agrega el numero de cilindros</div>
          <q-input v-model="formData.Cylinders"></q-input>
          <div v-if="$q.screen.xl || $q.screen.gt.lg" class="text-h5" style="padding-top: 25px; padding-bottom: 25px">Agrega el tipo de caja de cambios</div>
          <div v-else class="text-h6" style="padding-top: 5px;">Agrega el tipo de caja de cambios</div>
          <q-input v-model="formData['Gear box type']"></q-input>
          <div v-if="$q.screen.xl || $q.screen.gt.lg" class="text-h5" style="padding-top: 25px; padding-bottom: 25px">Agrega el tipo de traccion</div>
          <div v-else class="text-h6" style="padding-top: 5px;">Agrega el tipo de traccion</div>
          <q-input v-model="formData['Drive wheels']"></q-input>
          <div v-if="$q.screen.xl || $q.screen.gt.lg" class="text-h5" style="padding-top: 25px; padding-bottom: 25px">Agrega las puertas</div>
          <div v-else class="text-h6" style="padding-top: 5px;">Agrega las puertas</div>
          <q-input v-model="formData.Doors"></q-input>
          <div v-if="$q.screen.xl || $q.screen.gt.lg" class="text-h5" style="padding-top: 25px; padding-bottom: 25px">Agrega la posicion del volante</div>
          <div v-else class="text-h6" style="padding-top: 5px;">Agrega la posicion del volante</div>
          <q-input v-model="formData.Wheel"></q-input>
          <div v-if="$q.screen.xl || $q.screen.gt.lg" class="text-h5" style="padding-top: 25px; padding-bottom: 25px">Agrega el color</div>
          <div v-else class="text-h6" style="padding-top: 5px;">Agrega el color</div>
          <q-input v-model="formData.Color"></q-input>
          <div v-if="$q.screen.xl || $q.screen.gt.lg" class="text-h5" style="padding-top: 25px; padding-bottom: 25px">Agrega el numero de bolsas de aire</div>
          <div v-else class="text-h6" style="padding-top: 5px;">Agrega el numero de bolsas de aire</div>
          <q-input v-model="formData.Airbags"></q-input>
          <div v-if="$q.screen.xl || $q.screen.gt.lg" class="text-h5" style="padding-top: 25px; padding-bottom: 25px">Agrega el turbo</div>
          <div v-else class="text-h6" style="padding-top: 5px;">Agrega el turbo</div>
          <q-input v-model="formData.Turbo"></q-input>
          <h6>
            <q-btn glossy color="primary" class="full-width" size="lg" label="Buscar" @click="handleSearch"></q-btn>
          </h6>
        </div>
      </div>
    </form>
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();
    const marcaSeleccionadaTexto = ref('');
    const modeloSeleccionadoTexto = ref('');
    const anioSeleccionadoTexto = ref('');
    const cueroSeleccionadoTexto = ref('');
    const marcas = ref([]);
    const modelos = ref([]);
    const anios = ref([]);

    onMounted(async () => {
      await cargarMarcas();
    });


    const seleccionarCuero = (valor) => {
      formData.value["Leather interior"] = valor;
      cueroSeleccionadoTexto.value = valor;
    };

    const cargarMarcas = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const options = {
          headers: {
            'Authorization': token // Agregar el token al header
          }
        };
        const response = await fetch('https://motorleads-api-d3e1b9991ce6.herokuapp.com/api/v1/makes', options);
        const data = await response.json();
        marcas.value = data.map(marca => ({ id: marca.id, name: marca.name }));
      } catch (error) {
        console.error('Error al cargar las marcas:', error);
      }
    };

    const seleccionarMarca = async (marca) => {
      marcaSeleccionadaTexto.value = marca.name;
      formData.value.Manufacturer = marca.name.toUpperCase(); // Guardar el id de la marca en formData
      await cargarModelos(marca.id);
    };

    const cargarModelos = async (marcaId) => {
      try {
        const token = localStorage.getItem('authToken'); // Token de acceso
        const options = {
          headers: {
            'Authorization': token
          }
        };
        const response = await fetch(`https://motorleads-api-d3e1b9991ce6.herokuapp.com/api/v1/makes/${marcaId}/models`, options);
        const data = await response.json();
        modelos.value = data.map(modelo => ({ id: modelo.id, name: modelo.name }));
        modeloSeleccionadoTexto.value = ''; // Reiniciar texto seleccionado del modelo
      } catch (error) {
        console.error('Error al cargar los modelos:', error);
      }
    };

    const seleccionarModelo = async (modelo) => {
      modeloSeleccionadoTexto.value = modelo.name;
      formData.value.Model = modelo.name.toUpperCase();
      await cargarAnios(modelo.id);
    };

    const cargarAnios = async (modeloId) => {
      try {
        const token = localStorage.getItem('authToken'); // Token de acceso
        const options = {
          headers: {
            'Authorization': token
          }
        };
        const response = await fetch(`https://motorleads-api-d3e1b9991ce6.herokuapp.com/api/v1/models/${modeloId}/years`, options);
        const data = await response.json();
        anios.value = data.map(anio => ({ id: anio.id, name: anio.name }));
        anioSeleccionadoTexto.value = ''; // Reiniciar texto seleccionado del modelo
      } catch (error) {
        console.error('Error al cargar los anios:', error);
      }
    };

    const seleccionarAnio = (anio) => {
      anioSeleccionadoTexto.value = anio.name;
      formData.value["Prod. year"] = parseInt(anio.name);
    }


    const formData = ref({
      Levy: 0,
      Manufacturer: '',
      Model: '',
      "Prod. year": 0,
      Category: '',
      "Leather interior": '',
      "Fuel type": '',
      "Engine volume": 0,
      Mileage: 0,
      Cylinders: 0,
      "Gear box type": '',
      "Drive wheels": '',
      Doors: '',
      Wheel: '',
      Color: '',
      Airbags: 0,
      Turbo : 0
    });


    const handleSearch = async () => {
      formData.value.Levy = parseInt(formData.value.Levy)
      formData.value.Mileage = parseInt(formData.value.Mileage)
      formData.value["Engine volume"] = parseInt(formData.value["Engine volume"])
      formData.value.Cylinders = parseInt(formData.value.Cylinders)
      formData.value.Airbags = parseInt(formData.value.Airbags)
      formData.value.Turbo = parseInt(formData.value.Turbo)
      console.log(JSON.stringify(formData.value))
      try {
        const response = await fetch('https://zn42ekkvhi.execute-api.us-east-2.amazonaws.com/default/motorleads', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData.value),
        });
        console.log(response)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        localStorage.setItem('carPrice',result.Price);
        router.push('/price');
      } catch (error) {
        console.error('Error:', error);
      }
    };

    return {
      marcaSeleccionadaTexto,
      modeloSeleccionadoTexto,
      anioSeleccionadoTexto,
      cueroSeleccionadoTexto,
      marcas,
      modelos,
      anios,
      formData,
      seleccionarMarca,
      seleccionarModelo,
      seleccionarAnio,
      handleSearch,
      seleccionarCuero
    };
  },
  methods : {
    validateKilometraje() {
      // Elimina cualquier carácter no numérico
      if (this.formData.kilometraje && isNaN(Number(this.formData.kilometraje))) {
        this.formData.kilometraje = this.formData.kilometraje.replace(/\D/g, '');
      }
    }
  }
};
</script>

<style scoped>
/* tus estilos aquí */
</style>
