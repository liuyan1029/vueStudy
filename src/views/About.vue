<template>
  <div class="about">
    <h1 @click="change">This is an about page</h1>
  </div>
  <zhuan-pan-vue :drawIndex="drawIndex"></zhuan-pan-vue>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ZhuanPanVue from '@/components/ZhuanPan.vue';

const drawIndex = ref(-1);
const change = () => {
  drawIndex.value = 5;
};
</script>
