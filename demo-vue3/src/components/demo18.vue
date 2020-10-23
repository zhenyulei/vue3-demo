<template>
<div>
  <div class="text">hello</div>
  <button @click="changeColor">改变颜色</button>
</div>
</template>

<style vars="{ currcolor }" scoped>
.text {
  color: var(--global:currcolor);
  font-size:20px;
}
</style>