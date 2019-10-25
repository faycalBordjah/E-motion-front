# E-motion-front

[![Build Status](https://travis-ci.com/faycalBordjah/E-motion-front.svg?branch=master)](https://travis-ci.org/faycalBordjah/E-motion-front)
Repo pour le projet e-motion D-20.4 2019 pour la partie Frontend


Pour lancer le front-end de l'application :

* placez vous sur la racince du projet
* lancer la commande :
```bash
docker build -t emotion-front .
```
* puis la commance 

```bash
docker run -p 4200:4200 -v ${PWD}:/app -v /app/node_modules emotion-front
```
