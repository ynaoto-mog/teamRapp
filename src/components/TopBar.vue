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
  width: 18%;
  height: 85vh;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
  padding-top: 80px;
  padding-bottom: 40px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 1rem;
  transition-property: width, background-color font-size;
  transition-duration: 1s;
  ul {
    li {
      list-style: none;
    }
  }
}
.top-bar:hover {
  width: 25%;
  background-color: rgba(73, 0, 0, 0.692);
  font-size: 1.3rem;
}
.top-bar-item {
  margin-bottom: 80px;
  letter-spacing: 2.5px;
}</style
>>
