<template>
  <q-page class="app-page-container prices-page">
    <div class="row q-col-gutter-md">
      <div class="col-12">
        <q-card class="q-pa-md">
          <q-card-section>
            <div class="page-title q-mb-md">Pricing</div>
            <p class="page-text">View our pricing plans and packages.</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
// Prices page component
</script>

<style scoped lang="scss">
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