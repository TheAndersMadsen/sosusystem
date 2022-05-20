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
        stage('Building Project - [SOSUSYSTEM-FRONTEND]') {
            steps{
                dir("sosusystem-frontend"){
                    sh"npm install"
                    sh"npm run build"
                }
            }
        }
        stage('Delivering Build To Docker Hub - [SOSUSYSTEM-FRONTEND]') {
            steps{
                dir("sosusystem-frontend"){
                    echo 'Building Docker Image..'
                    sh"docker build . -t andersmadsen0/sosusystem-frontend"
               
                    echo 'Logging into Docker Hub..'
                    withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'HUB_USER', passwordVariable: 'HUB_TOKEN')]) {                      
                        sh 'docker login -u $HUB_USER -p $HUB_TOKEN'
                    }
                    sh"docker push andersmadsen0/sosusystem-frontend"
                }
                
            }
        }
        stage('reset containers') {
            steps{
                script{
                    try{
                        sh "docker-compose --env-file config/test.env down"
                    }
                    finally {}
                }
            }
        }
        stage('deployment') {
            steps{
                sh "docker-compose --env-file config/test.env up -d"
            }
        }

    }
}
