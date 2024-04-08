# Express.js Server with MongoDB Integration

An Express.js server integrated with MongoDB for managing NBA-related data. The server provides routes for NBA conferences, players, and teams, supported by controller functions for CRUD operations. Middleware handles logging and static asset serving, while EJS templates in `views/` render dynamic content. Configuration settings, including the port and MongoDB URI, are stored in a `.env` file. Overall, the application offers a structured and scalable solution for interacting with NBA data.

### Project Features and Components

1. **Express.js Server**:

   - Initialized in `index.js`.
   - Configured in `app.js`.

2. **MongoDB Integration**:

   - Models in `db/`.
   - Connection URI in `.env`.

3. **Routes and Controllers**:

   - CRUD routes in separate files (`playersRoutes.js`, `conferencesRoutes.js`, `teamsRoutes.js`).
   - Controllers in corresponding files.

4. **Static Files**:

   - CSS and JS in `public/`.

5. **View Templates**:

   - EJS templates in `views/`.

6. **Environment Configuration**:

   - Environment variables in `.env`.

7. **Front-end Integration**:
   - HTML in `index.ejs`.
   - CSS and JS in `public/`.

## Player Endpoints

### Get All Players

- **Endpoint**: `/players`
- **Method**: `GET`
- **Query Parameters**:
  - `team`: Filter players by team
  - `rings`: Filter players by the number of rings
- **Description**: Retrieve a list of all players or filter players by team and/or rings.

### Add New Player

- **Endpoint**: `/players`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "name": "Player Name",
    "rings": 5,
    "mvps": 3,
    "team": "Team Name"
  }
  ```
- **Description**: Add a new player with the specified name, number of rings, MVPs, and team.

### Get Player by ID

- **Endpoint**: `/players/:id`
- **Method**: `GET`
- **Description**: Retrieve a player by their ID.

### Update Player by ID

- **Endpoint**: /players/:id
- **Method**: PUT
- **Request Body**: Any fields you want to update for the player.
  ```json
  {
    "name": "Player Name",
    "rings": 5,
    "mvps": 3,
    "team": "Team Name"
  }
  ```
- **Description**: Update a player's information by their ID.

### Delete Player by ID

- **Endpoint**: /players/:id
- **Method**: DELETE
- **Description**: Delete a player by their ID.

## Project Structure

- `index.js`: Entry point of the application where Express server is initialized and configured.
- `db/Players.js`: Database model and schema for players.
- `db/Conferences.js`: Database model and schema for conferences.
- `db/Teams.js`: Database model and schema for teams.
- `data/players.js`: Contains sample NBA player data.
- `data/teams.js`: Contains sample NBA team data.
- `data/conference.js`: Contains sample NBA conference data.
- `routes/playersRoutes.js`: Router handling player-related endpoints.
- `controllers/playersControllers.js`: Controller functions for handling player-related CRUD operations.
- `routes/conferencesRoutes.js`: Router handling conference-related endpoints.
- `controllers/conferencesController.js`: Controller functions for handling conference-related operations.
- `routes/teamsRoutes.js`: Router handling team-related endpoints.
- `controllers/teamsControllers.js`: Controller functions for handling team-related operations.
- `css/style.css`: CSS file for styling the application.
- `public/script.js`: JavaScript file containing client-side scripts.
- `views/index.ejs`: EJS template file for rendering the main HTML view.
- `app.js`: Main application file where middleware, routes, and server setup are defined.
- `package.json`: Project dependencies and scripts configuration.
- `README.md`: Project documentation providing an overview of the application, setup instructions, and endpoint details.

### Environment Variables

- Create a .env file in the root directory and add the following variables:

```
PORT=<ANY PORT HERE>
MONGODB_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/nba
```

- Retrieve data from the `/data` folder for your own MongoDB database.

## Contributing

Contributions are welcome! Feel free to open issues, suggest enhancements, or submit pull requests.
