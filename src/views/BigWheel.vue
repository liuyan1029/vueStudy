<template>
  <div>转盘</div>
  <BigWheel
    :plate="pic"
    :prizeData="prizeData"
    :pointer="pointer"
    :size="{ width: 400, height: 400, }"
  ></BigWheel>
</template>
<script lang="ts" setup>
import { computed, defineProps, watch } from 'vue';
import pic from '@/assets/plate.png';
import pointer from '@/assets/pointer.png';
import prizeData from '@/date/prizeData.json';

const props = defineProps({
  drawIndex: Number,
});
const drawIndex = computed(() => props.drawIndex);

console.log('before', drawIndex.value);

watch(drawIndex, () => {
  console.log('watch', drawIndex.value);
});
</script>

<style scoped lang="less"></style>
