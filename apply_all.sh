#!/bin/sh

kubectl apply -f my_database/kubernetes/my_database_volume.yaml
kubectl apply -f my_database/kubernetes/my_database_config.yaml
kubectl apply -f my_database/kubernetes/my_database.yaml
kubectl apply -f my_backend/kubernetes/my_backend.yaml
kubectl apply -f my_microservice/kubernetes/my_microservice.yaml
kubectl apply -f my_frontend/kubernetes/my_frontend.yaml

kubectl get rs -A -o wide | tail -n +2 | awk '{if ($3 + $4 + $5 == 0) print "kubectl delete rs -n "$1, $2 }' | sh
