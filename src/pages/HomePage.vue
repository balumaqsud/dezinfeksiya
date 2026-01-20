<template>
  <q-page class="app-page-container home-page">
    <div class="row q-col-gutter-md">
      <div class="col-12">
        <q-card class="q-pa-md home-card">
          <q-card-section>
            <div class="page-title q-mb-md">Welcome Home</div>
            <p class="page-text">This is the home page of your application.</p>
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

.page-title {
  font-size: 32px;
  font-weight: 800;
  color: #1a1a1a;
  letter-spacing: 0.5px;

  @media (max-width: 600px) {
    font-size: 26px;
  }
}

.page-text {
  font-size: 17px;
  font-weight: 500;
  color: #444;
  line-height: 1.7;
}
</style>