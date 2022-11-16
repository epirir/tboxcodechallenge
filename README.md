
# Toolbox codechallenge




## Installation

### Back-End

To deploy backend service run in order:

```bash
  cd backend
```

```bash
  npm install
```

```bash
  npm run start
```

Backend server will be started on http://localhost:9000

### Front-End
To deploy front-end app run in order:

```bash
  cd frontend
```

```bash
  npm install
```

```bash
  npm run start
```

Front-end app will be started on http://localhost:3000

## API Reference

#### Get list of files

```http
  GET /files/list
```

#### Get all files data

```http
  GET /files/data
```

#### Get one file data
```http
  GET /files/data?fileName=<filename>
```

| QueryParam | Type     | Description                              |
|:-----------|:---------|:-----------------------------------------|
| `fileName` | `string` | **Optional**. file name of item to fetch |

### Postman Collection
[TBcodechallenge.postman_collection.json.zip](https://github.com/epirir/tboxcodechallenge/files/10025042/TBcodechallenge.postman_collection.json.zip)


## Screenshots

### Main Page
Contains all data from files, it gets the data from back-end server
![Screenshot 2022-11-15 at 21 37 02](https://user-images.githubusercontent.com/28916201/202078374-b6493776-ac49-46e8-88f0-5bf96e69d178.png)

### Filtered data
Contains data from a specific file, a queryParam "fileName" must be passed in the url
![Screenshot 2022-11-15 at 21 37 30](https://user-images.githubusercontent.com/28916201/202078975-b1faef31-fcb9-4820-8496-7ce8800ed872.png)






