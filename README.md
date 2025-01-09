# Hackathon Starter Kit

## What this is?

This is a starter kit for programmers who wish to have some kind of starting framework for a generic full stack project for a hackathon. Clone this repository and modify it a bit and use it to jump start your hackathon projects. That way it will save you a lot of time trying to stick around and configure things when you could be spending your time coding up your project.

## Motivation

As I said above, clone this repository and modify it a bit and use it to jump start your hackathon projects. That way it will save you a lot of time trying to stick around and configure things when you could be spending your time coding up your project. During my projects and my hackathons, I spent quite a while figuring out how to set things up, how to run code that works on my friends computer and not mine, how to deploy it so I can show the judges what we have made, and all that configuring stuff. I've built this such that you do not have to worry about those details and can go straight to programming the app and winning the hackathon prize!

## What this is not?

A submission for a hackathon. This is pretty generic so you won't get any points from the judges.

## How to use this?

If you want to run the application (all the services including frontend, backend, etc)
Do:
```bash
docker compose up --build
```

If you want to stop the application, either use "Ctrl-C" or in a new terminal use "docker compose down"

If you want to run it in detached mode:
```bash
docker compose up -d --build
```

If you want to stop it detached then do "docker compose down"

If you want to attach a specific container to see the logs of it, do "docker attach <container name>"

If you want to just get the logs, do "docker logs <container name>"


Any questions regarding docker itself, refer to this website: https://docs.docker.com/