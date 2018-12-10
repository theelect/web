

function get_color(x){
  
    var levels = [
      {condition: "x < 20", color: "#a2c6f0"},
      {condition: "x > 20 && x < 40", color: "#76abe9"},
      {condition: "x > 40 && x < 60", color: "#4a90e2"},
      {condition: "x > 60 && x < 100", color: "#2275d7"},
      {condition: "x > 80", color: "#1b5dab"},
    ];  
    
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
        jQuery.each(lga, function(index, row){
          var id = row[0];
          var value = row[1];
          simplemaps_custommap_mapdata.state_specific[id]['color'] = get_color(value);
          simplemaps_custommap_mapdata.state_specific[id]['description'] = 'Population is '+value;
          
        })
        simplemaps_custommap.load();
        //console.log(lga)
      },
      error: function(XMLHttpRequest, textStatus, errorThrown){  
        console.log(errorThrown);
      },
      complete: function() {
        //setTimeout(function(){
          jQuery('#loadingDiv').hide();
        //}, 1200); 
      }
      
    });
    
  })