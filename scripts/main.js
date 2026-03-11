import { DockList } from "./docks.js"
import { HaulerList } from "./haulers.js"
import { shippingShipsList } from "./shippingShips.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Shipping Ship Tracker</h1>
<article class="details">
    <section>
        <h2>Shipping Ships</h2>
        ${shippingShipsList()}
    </section>
    <section>
        <h2>Hauler Ships</h2>
        ${HaulerList()}
    </section>
    <section>
        <h2>Docks</h2>
        ${DockList()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML

