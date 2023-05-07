let saveIcons = document.getElementsByClassName("save-custom");

for (icon of saveIcons) {
    icon.addEventListener("mouseover" , (event) => {
        event.target.name ="bookmark";
    })
    
}

for (icon of saveIcons) {
    icon.addEventListener("mouseleave" , (event) => {
        event.target.name = "bookmark-outline";
    })
    
}