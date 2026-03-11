import { getDocks, getHaulers } from "./database.js"


export const DockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `<li
        data-type="dock" 
        data-id="${dock.id}"
        data-volume="${dock.volume}"
        data-location="${dock.location}"
        >${dock.location}
        </li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // Was a dock list item clicked?
        if (itemClicked.dataset.type === "dock") {
            // Get the dockId of the dock clicked?
            const dockId = itemClicked.dataset.id
            //check if hauler dockId matches dock id?
            const haulers = getHaulers()
            let haulersName = []
            for (const hauler of haulers) {
                if (parseInt(dockId) === hauler.dockId) {
                    haulersName.push(hauler.name)
                }
            }
            const haulerList = haulersName.join(", ")

            const docks = getDocks()
            let dock = { location: "unknown" }
            for (const dock of docks) {
                if (parseInt(dockId) === dock.id) {
                    break
                }
            }
            // If hauler is at dock, window.alert the dock the hauler is currently unloading at. If empty show "nothing", if multiples show with ", "
            if (haulersName.length === 0) {
                window.alert(`${itemClicked.dataset.location} dock is currently unloading nothing`)
            } else {
                window.alert(`${itemClicked.dataset.location} dock is currently unloading ${haulerList}`)
            }

        }
    }
)