# Rick and Morty Character API with Caching

This repository contains a simple Express.js application that serves data from the Rick and Morty API and caches the results using Redis for improved performance.

## Features

- Fetches data from the Rick and Morty API.
- Caches the data in Redis to reduce redundant network calls and improve response times.
- Offers two endpoints - one for fetching all characters, and one for fetching a character by ID.
- Utilizes `response-time` middleware to measure the duration of server handling.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Redis](https://redis.io/download)
- [npm](https://www.npmjs.com/get-npm) or [Yarn](https://yarnpkg.com/getting-started/install)

### Installation

1. Clone the repository.

```sh
git clone https://github.com/your-username/rick-and-morty-character-api.git
cd rick-and-morty-character-api
npm install

```
----


## Install NPM packages.

```sh
npm install
```
Start Redis server.
```sh
redis-server
```
```sh
Run the application.

node index.js
```

The server should be running at http://localhost:3000.

## Usage
This application exposes two endpoints:

Get All Characters: GET /character
Get Character by ID: GET /character/:id
Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project.
Create your Feature Branch (git checkout -b feature/AmazingFeature).
Commit your Changes (git commit -m 'Add some AmazingFeature').
Push to the Branch (git push origin feature/AmazingFeature).
Open a Pull Request.
License
Distributed under the MIT License. See LICENSE for more information.

Acknowledgments
Rick and Morty API
Redis
Express

