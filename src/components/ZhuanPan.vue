<template>
  <div>转盘</div>
  <div>{{ props.drawIndex }}</div>
</template>
<script lang="ts" setup>
import { computed, defineProps, watch } from 'vue';

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
