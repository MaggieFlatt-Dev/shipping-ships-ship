import { getHaulers, getShippingShips } from "./database.js"


export const HaulerList = () => {
    const haulers = getHaulers()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        haulersHTML += `<li
        data-type="hauler" 
        data-id="${hauler.id}"
        >${hauler.name}
        </li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a hauler list item clicked?
        if (itemClicked.dataset.type === "hauler") {
            // Get the id of the hauler clicked
            const haulerId = itemClicked.dataset.id

            // Start a counter variable at 0
            let shipCounter = 0
            // Iterate all of the shipping ships
            const shippingShips = getShippingShips()
            for (const shippingShip of shippingShips) {
                // Does the haulerId foreign key match the id?
                if (parseInt(haulerId) === shippingShip.haulerId) {
                    // Increase the counter by 1
                    shipCounter++
                }
            }

            window.alert(`This hauler is carrying ${shipCounter} shipping ships`)

        }
    }
)