<template>
  <div class="top-bar">
    <ul>
      <li class="top-bar-item">Member</li>
      <li class="top-bar-item">Intro</li>
      <li class="top-bar-item">Contact</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.top-bar {
  width: 15%;
  height: 85vh;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
  padding-top: 80px;
  padding-bottom: 40px;
  padding-left: 15px;
  padding-right: 15px;
  transition-property: width, background-color;
  transition-duration: 1s;
  ul {
    li {
      list-style: none;
    }
  }
}
.top-bar:hover {
  width: 18%;
  background-color: rgba(73, 0, 0, 0.692);
}
.top-bar-item {
  margin-bottom: 80px;
  letter-spacing: 2.5px;
}</style
>>
