# Note-Taking App

This repository contains a full-stack note-taking application built using **React** for the frontend, **Express** for the backend, and **MySQL** as the database. The app allows users to create, view, edit, and delete notes.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Express.js
- **Database**: MySQL
- **Database Management**: Sequelize ORM for interaction with MySQL

## Project Structure

### Frontend

The frontend of the app is built with **React**, focusing on creating an interactive UI where users can manage their notes.

#### Key Components:

- **App**: The main component that manages routing and renders other components.
- **NoteList**: Displays a list of all notes retrieved from the backend.
- **NoteItem**: Represents an individual note in the list. Allows the user to perform actions like editing or deleting the note.
- **CreateNote**: A form for users to input and save a new note.
- **EditNote**: A form for updating an existing note.
- **Header**: Contains navigation links and the title of the app.

#### Interaction with the Backend:

- The frontend makes HTTP requests to the backend API using **axios** (or **fetch**) for CRUD operations (Create, Read, Update, Delete).
- The main API endpoints interact with the Express backend and are structured as follows:
  - **GET /api/notes** – Fetch all notes.
  - **POST /api/notes** – Create a new note.
  - **PUT /api/notes/:id** – Update an existing note.
  - **DELETE /api/notes/:id** – Delete a specific note.
### Backend

The backend is built with **Express.js** and provides an API to manage the notes stored in the MySQL database.

#### Key Components:

- **Express Server**: Sets up the backend server and defines the routing logic.
- **Routes**: Defines all the API endpoints for CRUD operations on the notes.
- **Controllers**: Contains the logic for handling requests to the API endpoints (e.g., fetching notes, creating a note).
- **Models**: Defines the structure of the note data and how it interacts with the MySQL database via **Sequelize ORM**.
  - A `Note` model represents the structure of the note (with fields like title, content, and timestamps).

#### Database Interaction:

- **MySQL Database**: The app uses MySQL for persistent storage. The notes table will contain columns like `id`, `title`, `content`, and timestamps for created/updated dates.
- **Sequelize ORM**: Sequelize will be used to abstract the database interaction and provide easy-to-use methods for performing CRUD operations.

### Database Design

The app will use a single table called `notes` to store note data. The structure includes:

- **id**: A unique identifier for each note (auto-incremented).
- **title**: The title of the note.
- **content**: The content or body of the note.
- **created_at**: Timestamp for when the note was created.
- **updated_at**: Timestamp for when the note was last updated.

#### Relationships:

Since the application only requires a single type of entity (notes), there is no need for complex relationships like foreign keys. All CRUD operations will interact with this single table.

### Database Setup

1. **Create a MySQL Database**:
   - Create a new MySQL database. You can use `notetakingdb` or any name you prefer.
   - Example SQL query to create the database:
     ```sql
     CREATE DATABASE notetakingdb;
     ```

2. **Create the `notes` Table**:
   Below is the SQL query to create the `notes` table in the database.

   ```sql
   USE notetakingdb;

   CREATE TABLE notes (
       id INT AUTO_INCREMENT PRIMARY KEY,
       title VARCHAR(255) NOT NULL,
       content TEXT NOT NULL,
       created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
       updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
   );
   ```

3. **Optional: Create a `users` Table for Authentication** (if needed in the future):
   If you decide to add user authentication, you can create a `users` table to store user details.

   ```sql
   CREATE TABLE users (
       id INT AUTO_INCREMENT PRIMARY KEY,
       username VARCHAR(255) NOT NULL UNIQUE,
       email VARCHAR(255) NOT NULL UNIQUE,
       password VARCHAR(255) NOT NULL,
       created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
       updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
   );
   ```

4. **Optional: Create Tags for Notes** (if needed in the future):
   If you wish to add categorization, create a `tags` table and a join table to associate tags with notes.

   ```sql
   CREATE TABLE tags (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL UNIQUE
   );

   CREATE TABLE note_tags (
       note_id INT,
       tag_id INT,
       FOREIGN KEY (note_id) REFERENCES notes(id),
       FOREIGN KEY (tag_id) REFERENCES tags(id),
       PRIMARY KEY (note_id, tag_id)
   );
   ```

### API Endpoints

The backend exposes the following API endpoints:

1. **GET /api/notes**:
   - Fetches all notes from the database.
   - Response: A list of notes, each containing the `id`, `title`, `content`, and timestamps.

2. **POST /api/notes**:
   - Creates a new note with a provided title and content.
   - Request Body: `{ "title": "Note title", "content": "Note content" }`
   - Response: The newly created note, including its `id` and timestamps.

3. **PUT /api/notes/:id**:
   - Updates an existing note by its `id`.
   - Request Body: `{ "title": "Updated title", "content": "Updated content" }`
   - Response: The updated note data.

4. **DELETE /api/notes/:id**:
   - Deletes the note with the specified `id`.
   - Response: A success message confirming the note deletion.

### Running the Application

1. **Clone the repository**:
   ```bash
   git clone <repo-url>
   cd <repo-directory>
   ```

2. **Install dependencies**:
   - For the frontend:
     ```bash
     cd frontend
     npm install
     ```
   - For the backend:
     ```bash
     cd backend
     npm install
     ```

3. **Setup MySQL database**:
   - Create a new MySQL database named `notetakingdb` (or whatever you prefer).
   - Run the necessary migrations (e.g., creating the `notes` table).

4. **Run the backend**:
   ```bash
   cd backend
   npm start
   ```

5. **Run the frontend**:
   ```bash
   cd frontend
   npm start
   ```

6. **Access the app**: The frontend will be available at `http://localhost:3000`, and the backend will run on `http://localhost:5000`.

### Additional Features (Optional)

- **User Authentication**: Add user login and registration to allow personal note storage.
- **Search Notes**: Implement a search feature to find notes by title or content.
- **Tags or Categories**: Add tags to categorize notes, making it easier for users to organize their notes.
- **Note Archiving**: Allow users to archive notes without deleting them.

---

## Conclusion
