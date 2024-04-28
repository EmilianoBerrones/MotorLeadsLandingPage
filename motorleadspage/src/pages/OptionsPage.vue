<template>
  <div
    class="items-center justify-center"
    :style="{
    backgroundColor:'lightblue',
    width:'700px',
    position:'relative',
    top:'15%',
    left:'33%'
  }">
    <div>
      <h5 class="row items-center justify-center"
          :style="{
          fontFamily: '\'GothamPro-Black\', serif'}">
        Selecciona una marca</h5>
      <div class="row items-center justify-center">
        <q-btn-dropdown color="primary" style="width: 500px">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>*Primer Item*</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </div>
    <div>
      <h5 class="row items-center justify-center"
          :style="{
          fontFamily: '\'GothamPro-Black\', serif'}">Selecciona un modelo</h5>
      <div class="row items-center justify-center">
        <q-btn-dropdown color="primary" style="width: 500px">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>*Primer Item*</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </div>
    <div>
      <h5 class="row items-center justify-center"
          :style="{
          fontFamily: '\'GothamPro-Black\', serif'}">Selecciona un año</h5>
      <div class="row items-center justify-center">
        <q-btn-dropdown color="primary" style="width: 500px">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>*Primer Item*</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </div>
    <div>
      <h5 class="row items-center justify-center"
          :style="{
          fontFamily: '\'GothamPro-Black\', serif'}">Selecciona una versión</h5>
      <div class="row items-center justify-center">
        <q-btn-dropdown color="primary" style="width: 500px">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>*Primer Item*</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </div>
    <div>
      <h5 class="row items-center justify-center"
          :style="{
          fontFamily: '\'GothamPro-Black\', serif'}">Agrega un kilometraje</h5>
      <div class="row items-center justify-center">
        <q-input style="width: 500px"></q-input>
      </div>
    </div>
    <div>
      <h5 class="row items-center justify-center"
          :style="{
          fontFamily: '\'GothamPro-Black\', serif'}">Selecciona un color</h5>
      <div class="row items-center justify-center">
        <q-btn-dropdown color="primary" style="width: 500px">
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>*Primer Item*</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </div>
    <h6>
      <q-btn style="width: 100px" color="primary" class="full-width" size="lg" label="Buscar"></q-btn>
    </h6>
  </div>
</template>

<script setup>
defineOptions({
  name: 'OptionsPage'
});
</script>
