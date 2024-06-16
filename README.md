# Simple CRUD API with Express and Docker

This is a simple CRUD (Create, Read, Update, Delete) API built with Express.js and Docker.

## Getting Started

1. Clone the Repository

```bash
git clone https://github.com/victorbonato/ExpCrudApi.git
cd ExpCrudApi
```

2. Build and run the application

```bash
docker compose up --build
```

The API will be running at `http://localhost:3000`.

## API Endpoints

### Create an Item

- **URL:** `/items`
- **Method:** `POST`
- **Body:**

  ```json
  {
    "name": "item name"
  }
  ```

- **Response:**

  ```json
  {
    "name": "item name"
  }
  ```

### Get All Items

- **URL:** `/items`
- **Method:** `GET`
- **Response:**

  ```json
  [
    {
      "name": "item1"
    },
    {
      "name": "item2"
    }
  ]
  ```

### Update an Item

- **URL:** `/items/:id`
- **Method:** `PUT`
- **Body:**

  ```json
  {
    "name": "updated item name"
  }
  ```

- **Response:**

  ```json
  {
    "name": "updated item name"
  }
  ```

### Delete an Item

- **URL:** `/items/:id`
- **Method:** `DELETE`
- **Response:**
  - **Status:** `204 No Content`

## Testing the API

You can test the API using tools like [Postman](https://www.postman.com/) or `curl` from the command line.

### Examples

#### Create an Item

```bash
curl -X POST http://localhost:3000/items -H "Content-Type: application/json" -d '{"name":"item1"}'
```

#### Get All Items

```bash
curl http://localhost:3000/items
```

#### Update an Item

```bash
curl -X PUT http://localhost:3000/items/0 -H "Content-Type: application/json" -d '{"name":"updated item1"}'
```

#### Delete an Item

```bash
curl -X DELETE http://localhost:3000/items/0
```
