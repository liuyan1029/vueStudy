<template>
  <div
    class="big-wheel-widget"
    :style="{
      width: `${size.width}px`,
      height: `${size.height}px`,
    }"
  >
    <div class="plate" :style="{
      backgroundImage: `url(${plate})`,
    }">
      <div
        class="prizes"
        v-for="item,index in prizeData"
        :key="index"
        :style="{
          transform: `rotate(${index / prizeData.length}turn)`,
        }"
      >
        <prize-vue :prize="Object(item)"></prize-vue>
      </div>
    </div>
    <div class="pointer" :style="{
      backgroundImage: `url(${pointer})`,
    }"></div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import defaultPlate from '@/assets/plate.png';
import defaultPointer from '@/assets/pointer.png';
import prizeVue from './prize.vue';

// const size = reactive({
//   width: 300,
//   height: 300,
// });
const props = defineProps({
  plate: {
    type: String,
    default: defaultPlate,
  },
  pointer: {
    type: String,
    default: defaultPointer,
  },
  size: {
    type: Object,
    default: () => ({
      width: 300,
      height: 300,
    }),
  },
  prizeData: {
    type: Array,
    default: () => [],
  },
});

const pointerSize = computed(() => {
  const angle = 360 / 8 / 2;
  const pointerWidth = Math.sin(angle * 0.017453293) * props.size.width;
  return pointerWidth;
});

</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

img {
  display: block;
}

.big-wheel-widget {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: auto;
}

.plate {
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}

.prizes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  transform-origin: 50% 100%;
}

.prizes:nth-child(2n+1) {
  color: #fff;
}

.prizes:nth-child(2n) {
  color: #ec1341;
}

.pointer {
  position: absolute;
  top: 0;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}
</style>
