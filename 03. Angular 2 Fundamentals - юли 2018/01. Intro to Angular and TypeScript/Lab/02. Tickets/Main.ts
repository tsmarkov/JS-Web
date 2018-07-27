import Ticket from "./Ticket";

function main(descriptions = [], sortingCriteria) {
    let tickets = descriptions.map(d => {
        let [destination, price, status] = d.split('|');
        return new Ticket(destination, price, status);
    })

    return tickets.sort((a, b) => Ticket.compare(a, b, sortingCriteria));
}

// let result = main(['Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'],
//     'destination');

// console.log(result);