<template>
<section>
  <div class="constraint">
    <div style="padding-left:10px" class="legend">
      <ul class="legend_label">
        <li>20</li>
        <li>40</li>
        <li>60</li>
        <li>80</li>
      </ul>
      <ul class="legend_color">
        <li style="background-color: #a2c6f0"></li>
        <li style="background-color: #76abe9"></li>
        <li style="background-color: #4a90e2"></li>
        <li style="background-color: #2275d7"></li>
        <li style="background-color: #1b5dab"></li>
      </ul>
    </div>

    <v-layout row wrap align-center justify-center fill-height>
      <v-flex offset-xs2>
        <div id="loadingDiv" class="title pa-5">
          Loading...
        </div>
      </v-flex>
    </v-layout>

    <div id="map"></div>
  </div>
  
  <script src="map/mapdata.js"></script>
  <script src="map/custommap.js"></script>
  <script src="map/update_map.js"></script>
</section>
</template>

<script>
export default {
  layout: 'map'
}
</script>

<style>

</style>
