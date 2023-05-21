<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img width="1792" alt="image" src="https://user-images.githubusercontent.com/47917189/232225407-db882051-737e-4034-9e92-5f8558b60505.png">
    <img width="1792" alt="image" src="https://user-images.githubusercontent.com/47917189/232225370-7715e639-6e30-4cee-9e25-b402c7d1e1c0.png">
      <img width="1792" alt="Screenshot 2023-04-17 at 12 21 50" src="https://user-images.githubusercontent.com/47917189/232443601-50565d11-943f-400a-820e-4a2cbbbf64da.png">
  <h3 align="center">Cyolo Task</h3>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#built-with">Project File Structure</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Usage</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project contains all the source code, manifests and other related artifacts(YAMLs, templates, etc) of my submission to Cyolo home assignment.

This project contains two applications: Cyolo webapp application, a RESTapi server and a storage service for hosting the files and handling expiration.

### Built With

<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40"/>&nbsp;
  <img src="https://cdn.worldvectorlogo.com/logos/mobx.svg" title="MOBX" **alt="MOBX" width="40"/>&nbsp;
 
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" title="Typescript" alt="TS" width="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original-wordmark.svg" title="NodeJS" alt="NodeJS" width="40"/>
 
 
 
 
  <img src="https://github.com/devicons/devicon/blob/master/icons/go/go-original.svg" title="Golang" alt="Go" width="40"/>&nbsp;
 </div>
 
<br/>

- `React.js`,`MobX`, `Styled-Components`.
- Nodejs
- Golang

### Project File Structure

- `/api-server`: REST API server that exposes api/images/:uuid and api/images/upload endpoint.
- `/webapp`: Web Application that displays a central card that can handle file dropping or clicking to upload some file to the server.
- `/storage`: Golang Service that store the images in FS and peridically deletes expired images.

## Usage

<details>
  <summary>Prerequisites</summary>
 
  * postgresql
    - Install Postgresql on your local machine -> see installation guidelines [here](https://www.postgresqltutorial.com/postgresql-getting-started/install-postgresql-macos/).
    - Create images table as following: 
    ```
        CREATE TABLE (
            id SERIAL PRIMARY KEY
            uuid VARCHAR
            image_hash VARCHAR
            filename VARCHAR
            storage_url VARCHAR
            expiration_date TIMESTAMP)
    ```
    - In `/api-server`, configure the following variables according to the DB you created in .env file: `DB_USER, DB_PASSWORD, DB_NAME`. *The port is configured to 5432 by default.* 
    
</details>

### Web Application

To run the web application locally, you need to have `Node.js` installed on your machine. Then, navigate to the `webapp` folder and run the following commands:

```
    npm install
    npm start
```

### Node API Server

To run the API server locally, you need to have `Node.js` installed on your machine. Then, navigate to the `api-server` folder and run the following commands:

```
    npm install
    npm run build
    npm start
```

To test the project, run `npm test`.

### Node API Server

To run the API server locally, you need to have `Golang` installed on your machine. Then, navigate to the `storage-service` folder and run the following commands:

```
    go run .
```

## Contact

Noaa Barki - [@noaabarki](https://twitter.com/noaabarki)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[webapp-screenshot]: images/webapp.png
