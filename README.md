
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


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

