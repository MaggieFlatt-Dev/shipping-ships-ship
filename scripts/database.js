const database = {
    docks: [
        {
            id: 1,
            location: "Shanghai, China",
            volume: "43.5"
        },
        {
            id: 2,
            location: "Busan, South Korea",
            volume: "21.6"
        },
        {
            id: 3,
            location: "Rotterdam, The Netherlands",
            volume: "14.35"
        },
        {
            id: 4,
            location: "Antwerp, Belgium",
            volume: "12.04"
        }
    ],
    haulers: [
        {
            id: 1,
            name: "Ship Happens",
            dockId: 3
        },
        {
            id: 2,
            name: "Bouyoncé",
            dockId: 3
        },
        {
            id: 3,
            name: "Big Deck Energy",
            dockId: 2
        },
        {
            id: 4,
            name: "Usain Boat",
            dockId: 4
        },
        {
            id: 5,
            name: "Yeah Bouy",
            dockId: 2
        }
    ],
    shippingShips: [
        {
            id: 1,
            name: "Hestia",
            haulerId: 3

        },
        {
            id: 2,
            name: "Ares",
            haulerId: 2

        },
        {
            id: 3,
            name: "Dionysus",
            haulerId: 5

        },
        {
            id: 4,
            name: "Demeter",
            haulerId: 5

        },
        {
            id: 5,
            name: "Hera",
            haulerId: 2

        },
        {
            id: 6,
            name: "Gaia",
            haulerId: 1

        },
        {
            id: 7,
            name: "Hades",
            haulerId: 4

        },
        {
            id: 8,
            name: "Aphrodite",
            haulerId: 3

        },
        {
            id: 9,
            name: "Artemis",
            haulerId: 2

        },
        {
            id: 10,
            name: "Eros",
            haulerId: 1

        },
    ],
}

export const getDocks = () => {
    return structuredClone(database.docks);
};

export const getHaulers = () => {
    return structuredClone(database.haulers);
};

export const getShippingShips = () => {
    return structuredClone(database.shippingShips);
};