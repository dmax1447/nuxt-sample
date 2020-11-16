<template>
  <div>
    <h1>Restricted page</h1>
    <h3>only for logged user with token</h3>
    <h4>Features:</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid aspernatur, deserunt dolorum earum et illum iusto magni natus obcaecati omnis ratione tempora! Aliquid deleniti dolor maiores numquam quae tempora!</p>
  </div>
</template>

<script>
export default {
  middleware: ['auth']
};
</script>
