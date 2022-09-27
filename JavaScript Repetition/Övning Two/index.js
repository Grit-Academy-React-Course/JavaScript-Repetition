function addToWishList(event) {
    var item = document.getElementById("wish-item");
    if (item.value !== "") {
        createListItem(item.value);
        if (localStorage.getItem("wishlist")) {
            localStorage.setItem("wishlist", localStorage.getItem("wishlist") + "," + item.value);
        } else {
            localStorage.setItem("wishlist", item.value);
        }
        item.value = "";
    }
    event.preventDefault();
}
window.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem("wishlist")) {
        var allItems = localStorage.getItem("wishlist").split(",");
        allItems.forEach(function (value) {
            createListItem(value);
        })
    }
})
function createListItem(value) {
    var li = document.createElement("li");
    var removeKnapp = document.createElement("div");
    removeKnapp.appendChild(document.createTextNode("X"));

    li.appendChild(document.createTextNode(value));
    removeKnapp.classList.add("remove-item");
    removeKnapp.addEventListener("click", function () {
        if (confirm("Are you sure you want to delete this item")) {
            removeKnapp.parentNode.remove();
            var newItems = localStorage.getItem("wishlist").split(",").filter(function (x) {
                return x != value;
            })
            localStorage.setItem("wishlist", newItems)
        }
    })
    li.appendChild(removeKnapp);
    li.classList.add("wishlist-item");
    document.getElementById("wishlist").appendChild(li);
}