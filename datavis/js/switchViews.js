document.getElementById("switchToList").addEventListener("click",switchToList);

function switchToList() {
document.getElementById("visualView").style.display = "none";
document.getElementById("listView").style.display = "block";
document.getElementById("canvas").style.display = "none";
generateListView();
}

document.getElementById("switchToView").addEventListener("click",switchToView);

function switchToView() {
document.getElementById("visualView").style.display = "block";
document.getElementById("listView").style.display = "none";
document.getElementById("canvas").style.display = "block";
}
