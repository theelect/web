<template>
<section>
  <div class="constraint">
    <div id="simplemaps_legend"></div> 

    <v-layout row wrap align-center justify-center fill-height>
      <v-flex offset-xs2>
        <div id="loadingDiv" class="title pa-5">
          Loading...
        </div>
      </v-flex>
    </v-layout>

    <div id="map"></div>
  </div>
  
  <span v-if="loadscripts">
    <script src="map/mapdata.js" defer></script>
    <script src="map/custommap.js" defer></script>
    <script src="map/update_map.js" defer></script>
  </span>

</section>
</template>

<script>
export default {
  layout: 'map',
  data() {
    return {
      loadscripts: false
    }
  },
  async mounted () {
    this.loadscripts = true
  }
}
</script>

<style>

</style>
