function chooseLanguage(){
    /*alert('hi from js file');*/
    var e = document.getElementById("ddl");
    var language = e.options[e.selectedIndex].value;
   /* alert(language);*/
    if (language=='fr'){
        document.location.href="indexFR.html";
       /* document.location.href="aboutFR.html";
        document.location.href="blogFR.html";*/

    }
    else{
        document.location.href="index.html";
       /* document.location.href="about.html";
        document.location.href="blog.html";*/
    }


    
  /* document.location.href="indexFR.html";*/
}

