class Ticket {
    public destination: string;
    public price: number;
    public status: string;

    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }

    static compare(a, b, criteria) {
        if (criteria === 'price') {
            let first = Number(a[criteria]);
            let second = Number(a[criteria]);

            if (first < second) {
                return -1;
            } else if (first > second) {
                return 1;
            } else {
                return 0;
            }
        } else if (criteria === 'destianation' || criteria === 'status') {
            let first = a[criteria];
            let second = a[criteria];

            return first.localeCompare(second);
        }
    }
}

export default Ticket;