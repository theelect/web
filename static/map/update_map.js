

var dividers  = [];
var levels, legend_html;
function create_variables(){
  
 levels = [
    {condition: "x < "+dividers[0], color: "#a2c6f0"},
    {condition: "x >= "+dividers[0]+" && x < "+dividers[1], color: "#76abe9"},
    {condition: "x >= "+dividers[1]+" && x < "+dividers[2], color: "#4a90e2"},
    {condition: "x >= "+dividers[2]+" && x < "+dividers[3], color: "#2275d7"},
    {condition: "x >= "+dividers[3], color: "#1b5dab"},
  ];    
  
  legend_html = "<div class=\"legend\">\n    <ul class=\"legend_label\">\n      <li>" + dividers[0] + "</li><li>" + dividers[1] + "</li><li>" + dividers[2] + "</li><li>" + dividers[3] + "</li>\n    </ul>\n    <ul class=\"legend_color\">\n      <li style=\"background-color: #a2c6f0\"></li><li style=\"background-color: #76abe9\"></li><li style=\"background-color: #4a90e2\"></li><li style=\"background-color: #2275d7\"></li><li style=\"background-color: #1b5dab\"></li>\n    </ul>\n  </div>";
 
}  

function get_color(x){

  var result;
  var x = parseFloat(x);
  jQuery.each(levels, function(index, row){
    var in_range = eval(row['condition']);
    if (in_range){
      result = row['color'];
      return false
    }
  })
  
  return result
  
}




  
  jQuery(document).ready(function(){
    jQuery.ajax({
      dataType: "json",
      headers: {
        'apiKey': 'i871KgLg8Xm6FRKHGWCdBpaDHGEGjDJD'
      },
      url: 'https://theelect.herokuapp.com/api/v1/lga/map',
      beforeSend: function() {
        jQuery('#loadingDiv').show();
      },
      success: function(lga){
        //create dividers
        var max;
        var min;
        jQuery.each(lga, function(index, row){
          var value = parseFloat(row[1]);
          if (!max || value > max){max = value}
          if (!min || value < min){min = value}
        })
        var inc = (max-min)/5.0;      
        dividers[0] = Math.round(min+inc);
        dividers[1] = Math.round(min+2*inc);
        dividers[2] = Math.round(min+3*inc);
        dividers[3] = Math.round(min+4*inc);
        create_variables();


        jQuery.each(lga, function(index, row){
          var id = row[0];
          var value = row[1];
          simplemaps_custommap_mapdata.state_specific[id]['color'] = get_color(value);
          simplemaps_custommap_mapdata.state_specific[id]['description'] = 'Population is '+value;
          
        })
        
        //console.log(lga)
        var legend_target = $("#simplemaps_legend");
        legend_target.html(legend_html); 

      },
      error: function(XMLHttpRequest, textStatus, errorThrown){  
        console.log(errorThrown);
      },
      complete: function() {
        //setTimeout(function(){
          jQuery('#loadingDiv').hide();
          simplemaps_custommap.load();
        //}, 1200); 
      }
      
    });
    
  })