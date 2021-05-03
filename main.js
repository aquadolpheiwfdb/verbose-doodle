menu_list_array= ["Greek Pizza","Hawaiian Pizza","Sicilian Pizza","New York Pizza","Neapolitan Pizza"];

function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for (var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>'+menu_list_array[i]+"</li>";
    }
    console.log("getmenu");
htmlata=htmldata+"</ol>";
document.getElementById("display_menu").innerHTML=htmldata;
}

function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>";
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+"<div class='card'>"+"<img src='images/pizzaImmg.png'>" +menu_list_array[i]+"</div>";
    }
    console.log("add_item");
    htmldata=htmldata+"</section";
    document.getElementById("display_added_menu").innerHTML=htmldata;
}


