``` mermaid
sequenceDiagram

Participant Database
Participant main
Participant CargoShips
Participant HaulerShips
Participant Docks
Participant DOM

Database-->>CargoShips:Here is all the cargo data
Database-->>HaulerShips: Here is all the hauler data
Database-->>Docks: Here is all the dock data
note over CargoShips: Do something with data(create HTML)
note over HaulerShips:Do something with data(create HTML)
note over Docks:Do something with data (create HTML)
CargoShips-->>main: Here is the finished HTML
HaulerShips-->>main: Here is the finished HTML
Docks-->>main: Here is the finished HTML
main-->>DOM: Here is all of the put together HTML
```