function openTab(tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByTagName("section");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}
