<template>
  <div v-if="prize.prizeType === 1" class="prize shiwu">
    <p>{{ prize.prizeName }}</p>
    <img :src="prize.prizePic" />
  </div>
  <div v-if="prize.prizeType === 2" class="prize youhuiqun">
    <p class="name">{{ prize.prizeName }}</p>
    <p class="desc">{{ prize.prizeDesc }}</p>
  </div>
  <div v-if="prize.prizeType === 3" class="prize jingdou" >
    <p class="name">{{ prize.prizeName }}</p>
    <p class="desc">{{ prize.prizeDesc }}</p>
  </div>
  <div v-if="prize.prizeType === 4" class="prize agin">
    <p>{{ prize.prizeName }}</p>
  </div>
  <div v-if="prize.prizeType === -1" class="prize xiexie">
    <p>{{ prize.prizeName }}</p>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  prize: {
    type: Object,
    default: () => ({}),
  },
});

</script>
<style scoped lang="scss">
.prize {
  padding-top: 40px;
  p {
    margin: 0;
  }
}

.shiwu {
  p {
    margin-bottom: 10px;
    font-size: 16px;
  }
  img {
    width: 50px;
    border-radius: 100%;
  }
}

.youhuiqun {
  .name {
    margin-bottom: 10px;
    font-size: 16px;
  }
  .desc {
    font-size: 32px;
  }
}

.jingdou {
  .name {
    margin-bottom: 10px;
    font-size: 16px;
  }
  .desc {
    font-size: 32px;
  }
}

.agin {
  p {
    font-size: 24px;
    width: 64px;
    margin: auto;
    padding-top: 10px;
  }
}

.xiexie {
  p {
    font-size: 24px;
    width: 64px;
    margin: auto;
    padding-top: 10px;
  }
}
</style>
