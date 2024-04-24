<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

Microservice implementation using NestJS and NatS.

## Installation

```bash
$ npm install
```

## Running the app

- 3 services are implemented in this project [main, mailer, user]. you can run each service separately by adding the service name to env file.

- before running the app, make sure you have a NATS server running on your local machine. You can download the NATS server from [here](https://nats.io/download/nats-io/nats-server/).

- you can run all services at once by running the following command (APP_NAME must be empty in the env file):

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

- you can run nats server as a docker container by running the following command: `docker run -p 4222:4222 -p 8222:8222 -p 6222:6222 --name nats-server -d nats`

```bash
## License

### DevOps checklist
- [ ] Add a health check endpoint
- [ ] Add a Dockerfile
- [ ] Add a CI/CD pipeline (Github Actions, Gitlab CI, Jenkins, etc)
- [ ] Monitoring (Prometheus, Grafana, etc)
- [ ] Alerting (Prometheus Alertmanager, Grafana, etc)
- [ ] log management (ELK, Splunk,Loki, etc)

### DevOps questions:

- [ ] Which do you prefer, All 3 service as one Dockerfile, or each service as a separate Dockerfile?
- [ ] How do you deploy your application? (Kubernetes, Docker, etc)
- [ ] How do you monitor your application?
- [ ] How do you scale your application?
- [ ] How do you backup your application?
- [ ] How do you secure your application?
- [ ] How do you manage your application configuration?
- [ ] How do you handle this senario: 2 main services are running, 2 mailer services are running, 1 user service is running. The user service is down, how do you handle this situation?


### DevOps Goals:

- [ ] 2 instans of main services, 3 instans of mailer services, 1 instans of user service must be running.


nestjs-micro is [MIT licensed](LICENSE).
```
