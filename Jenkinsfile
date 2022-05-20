pipeline {
    agent any

    tools {nodejs "NodeJS"}

    triggers {
        pollSCM "*/5 * * * *"
    }
    environment {
        dockerhub=credentials('dockerhub')
    }

    stages{
        
        stage('Building [SOSUSYSTEM-FRONTEND]..') {
            steps{
                echo 'Building [SOSUSYSTEM-FRONTEND]..'
                dir("sosusystem-frontend"){
                    sh"npm install"
                    sh"npm run build"
                }
            }
        }
        stage('Delivering To Docker Hub..') {
            steps{
                    echo 'Delivering [SOSUSYSTEM-FRONTEND] To Docker Hub..'
                    sh"docker build . -t andersmadsen0/sosusystem-frontend"
                    withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'HUB_USER', passwordVariable: 'HUB_TOKEN')]) {                      
                        sh 'docker login -u $HUB_USER -p $HUB_TOKEN'
                    }
                    sh"docker push andersmadsen0/sosusystem-frontend"
                }
            }
        }
        stage('Reset Docker Environment') {
            steps{
                script{
                    try{
                        sh "docker-compose down"
                    }
                    finally {}
                }
            }
        }
        stage('Deploy Project') {
            steps{
                sh "docker-compose up -d"
            }
        }
    }

