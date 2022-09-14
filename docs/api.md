## API Documentation

Our application programming interface accomodates a variety of workflows to interface without our database. We currently have support for you interface with 5 tables: `animal`, `customer`, `merchanise`, `sale`, and `supplier`. For more information about the specific attributes and field within each of these tables, please look at the prisma schema in `petstore-backend/prisma/schema.prisma`.

### Animal

1) GET `<API_URL>/api/animals/`: return a list of all animals within the store

2) GET `<API_URL>/api/animals/:id`: return a specific animal with the specified id number

3) POST `<API_URL>/api/animals/`: add a new animal to the store's database

4) PATCH `<API_URL>/api/animals/:id`: update a specific animal's information based on their id number

5) DELETE `<API_URL>/api/animals/:id`: delete a specific animal from the system based on their id number 

### Customer

1) GET `<API_URL>/api/customers/`: return a list of all customers registered with the store

2) GET `<API_URL>/api/customers/:id`: return a specific customer with the specified id number

3) POST `<API_URL>/api/customers/`: add a new customer to the store's database

4) PATCH `<API_URL>/api/customers/:id`: update a specific customers's information based on their id number

5) DELETE `<API_URL>/api/customers/:id`: delete a specific customer from the system based on their id number

### Merchandise

1) GET `<API_URL>/api/merchandise/`: return a list of all merchandise within the store

2) GET `<API_URL>/api/merchandise/:id`: return a specific piece of merchandise with the specified id number

3) POST `<API_URL>/api/merchandise/`: add a new piece of merchadise to the store's database

4) PATCH `<API_URL>/api/merchandise/:id`: update a specific piece of merchandise's information based on its id number

5) DELETE `<API_URL>/api/merchandise/:id`: delete a specific piece of merchandise from the system based on its id number

### Sale

1)

2)

3)

4)

5)

### Supplier

1)

2)

3)

4)

5)
