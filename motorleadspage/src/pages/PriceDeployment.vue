<template>
  <div>
    <h2 class="text-center">Cotización</h2>
    <q-splitter
      v-model="splitterModel"
      style="height: 200px">

      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          class="text-grey-8">
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
  </div>
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
