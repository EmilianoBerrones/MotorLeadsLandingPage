<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-8">
        <h2 style="font-family: 'GothamPro-Black', serif">Vehículo</h2>
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
        <div style="padding: 20px">
          <q-img :style="{borderRadius:'40px'}" src="https://www.diariomotor.com/imagenes/2015/03/tesla-model-x-9.jpg" :ratio="16/9"/>
        </div>
        <q-btn color="blue-8" glossy size="lg" label="Cotizar nuevo vehículo"></q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
import {ref} from 'vue'

export default {
  name: "PriceDeployment",
  setup() {
    return {
      tab: ref('precio'),
      splitterModel: ref(20)
    }
  }
}
</script>
