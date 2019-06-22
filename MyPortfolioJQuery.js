$(document).ready(function() {
        
//Click functions to make the different sections appear
    $("#nav1").click
    
        (function(){
        
        $("#collapse1").toggle("display");
        
        $("#collapse2").hide("fast");
        $("#collapse3").hide("fast");
        
    });
    
    $("#nav2").click
    
        (function(){
        
        $("#collapse2").toggle("display");
        
        $("#collapse1").hide("fast");
        $("#collapse3").hide("fast");
        
    });
    
    $("#nav3").click
    
        (function(){
        
        $("#collapse3").toggle("display");
        
        $("#collapse1").hide("fast");
        $("#collapse2").hide("fast");
        
    });  
    
//Hover functions to make the different buttons change color
    $(".navBars").hover
    
        (function(){
        $(this).css("background-color", "white");
        $(this).css("color", "#004466");
        },
         
         function(){
        $(this).css("background-color", "#004466");
        $(this).css("color", "white");

    });
  
    $(".links").hover
    
        (function(){
        $(this).css("text-decoration", "underline");
        },
         
         function(){
        $(this).css("text-decoration", "none");

    });
    
//Hover functions to enlarge images
    
    
});