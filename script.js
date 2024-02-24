function openTab(tabName) {
    var i;
    var tabs = document.getElementsByTagName("section");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}
