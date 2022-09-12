import express from "express";
const app = express();

const PORT = 3000;

/*
Notes for the Newbies :/

1) The main HTTP methods are: GET, POST, PUT, DELETE
*/

// Tell express to parse request body as json
app.use(express.json());

// Routes
app.get("/api/test", (req, res) => {
  res.send({ test: "success" });
});

app.post("/api/test", (req, res) => {
  const body = req.body;
  res.send({ received: body });
});

/*
User Story 1: As a customer, I want to see a list of all pets available
for adoption.

HTTP Method: GET
*/
app.get("/api/get_all_available_pets", (req, res) => {
  // todo: finish implementation
});

/*
User Story 2: As a customer, I want to see a list of all merchandise within
the store.

HTTP Method: GET
*/
app.get("/api/get_all_available_merchandise", (req, res) => {
  // todo: finish implementation
});

/*
User Story 3: As a customer. I want to create an account with the store.

HTTP Method: POST
*/
app.post("/api/create_user_account", (req, res) => {
  // todo: finish implementation
});

/*
User Story 4: As a customer, I want to sign into my account.

HTTP Method: GET?
*/
app.get("/api/sign_in", (req, res) => {
  // todo: finish implementation
});

/*
User Story 5: As a customer, I want to apply to adopt a particular pet.

HTTP Method: POST
*/
app.post("/api/apply_for_adoption", (req, res) => {
  // todo: finish implementation
});

/*
User Story 6: As a customer, I want to add a piece of merchandise to my cart.

HTTP Method: POST
*/
app.post("/api/add_to_cart", (req, res) => {
  // todo: finish implementation
});

/*
User Story 7: As a customer, I want to purchase everything in my cart.

HTTP Method: POST
*/
app.post("/api/purchase_cart", (req, res) => {
  // todo: finish implementation
})

/*
User Story 8: As an administrator, I want to be be able to added a new
pet to the database.

HTTP Method: POST
*/
app.post("/api/add_pet", (req, res) => {
  // todo: finish implementation
});

/*
User Story 9: As an administrator, I want to be able to add new merchandise
to the store.

HTTP Method: POST
*/
app.post("/api/add_merchandise", (req, res) => {
  // todo: finish implementation
});

/*
User Story 10: As an administrator, I want to be able to see all pending
adoption applications.

HTTP Method: GET
*/
app.get("/api/get_pending_adoption_applications", (req, res) => {
  // todo: finish implementation
});

/*
User Story 11: As an administrator, I want to be able to approve a pending
adoption application.

HTTP Method: POST
*/
app.post("/api/approve_adoption_application", (req, res) => {
  // todo: finish implementation
});

// Listen on port
app.listen(PORT, () => console.log(`Server starting on port ${PORT} ...`));
