<template>
  <div class="loading">
    <font-awesome-icon class="LoadingTimeIcon " icon="history" />
  </div>
</template>

<style lang="scss">
.LoadingTimeIcon {
  font-size: 3rem;
  color: #ca0c0c;
  display: inline-block;
  animation: rotate 1s linear infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
