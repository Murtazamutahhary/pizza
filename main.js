var name_country=[];
function submit(){
    var country_1=document.getElementById("country_1").value;
    var country_2=document.getElementById("country_2").value;
    var country_3=document.getElementById("country_3").value;
    var country_4=document.getElementById("country_4").value;
    var country_5=document.getElementById("country_5").value;
    var country_6=document.getElementById("country_6").value;
    var country_7=document.getElementById("country_7").value;
    var country_8=document.getElementById("country_8").value;
    var country_9=document.getElementById("country_9").value;
    var country_10=document.getElementById("country_10").value;

    name_country.push(country_1);
    name_country.push(country_2);
    name_country.push(country_3);
    name_country.push(country_4);
    name_country.push(country_5);
    name_country.push(country_6);
    name_country.push(country_7);
    name_country.push(country_8);
    name_country.push(country_9);
    name_country.push(country_10);
    document.getElementById("display_name").innerHTML=name_country;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
    
}
function sorting(){
    name_country.sort();
    document.getElementById("display_name").innerHTML=name_country;


}