<template>
  <q-page class="app-page-container home-page">
    <div class="row q-col-gutter-md">
      <div class="col-12">
        <q-card class="q-pa-md home-card">
          <q-card-section>
            <div class="text-h4 q-mb-md">Welcome Home</div>
            <p class="text-body1">This is the home page of your application.</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
// Home page component
</script>

<style scoped lang="scss">
.home-page {
  display: flex;
  flex-direction: column;
}

.home-card {
  min-height: 400px;

  @media (max-width: 600px) {
    min-height: 300px;
  }
}
</style>