<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-1">
    <ResponsiveNavbar />

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-grey-4">
      <q-toolbar>
        <q-toolbar-title class="text-center text-body2">
          by oliver for Furor Progress
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import ResponsiveNavbar from 'components/ResponsiveNavbar.vue';
</script>
