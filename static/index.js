function searchPlugins() {
    const filter = document.querySelector("#search-input").value.toLowerCase()
    for (const plugin of document.querySelectorAll(".plugin")) {
        const name = plugin.querySelector(".title").textContent.toLowerCase()
        const description = plugin.querySelector(".description").textContent.toLowerCase()

        if (name.includes(filter) || description.includes(filter)) {
            plugin.style.display = ""
        } else {
            plugin.style.display = "none"
        }
    }
}

window.searchPlugins = searchPlugins
