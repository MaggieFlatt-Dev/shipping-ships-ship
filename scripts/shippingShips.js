import { getShippingShips, getHaulers } from "./database.js"


export const shippingShipsList = () => {
    const shippingShips = getShippingShips()

    let shippingShipsHTML = "<ul>"

    for (const shippingShip of shippingShips) {
        shippingShipsHTML += `<li 
        data-type="shippingShip" 
        data-id="${shippingShip.id}"
        data-foreignKey="${shippingShip.haulerId}"
        data-name="${shippingShip.name}"
        >${shippingShip.name}
        </li>`
    }

    shippingShipsHTML += "</ul>"

    return shippingShipsHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a shipping ship list item clicked?
        if (itemClicked.dataset.type === "shippingShip") {
            // Get the haulerId value of the shipping ship clicked
            const haulerId = itemClicked.dataset.foreignkey
            // Define a default object for the found hauler
            let haulingShip = { name: "Incorrect" }

            // Iterate the array of hauler objects
            const haulerShips = getHaulers()
            for (const hauler of haulerShips) {
                // Does the haulerId foreign key match the id of the current hauler?
                if (parseInt(haulerId) === hauler.id) {
                    // Reassign the value of `haulingShip` to the current hauler
                    haulingShip = { name: hauler.name }
                }
            }
            // Show an alert to the user with this format...
            window.alert(`${itemClicked.dataset.name} is being hauled by ${haulingShip.name}`)
            // Palais Royal is being hauled by Seawise Giant
        }
    }
)