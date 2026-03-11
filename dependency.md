``` mermaid 
---
Title: Shipping Ships
---
flowchart TD
main.js["main.js"]
CargoShips.js["CargoShips.js"]
HaulerShips.js["HaulerShips.js"]
Docks.js["Docks.js"]
Database.js["Database.js"]

main.js-->CargoShips.js
main.js-->HaulerShips.js
main.js-->Docks.js
CargoShips.js-->Database.js
HaulerShips.js-->Database.js
Docks.js-->Database.js

```