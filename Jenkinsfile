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
        stage('Building Stage..') {
            parallel {
                stage('Build Frontend') {
                    when{
                        anyOf{
                            changeset "sosusystem-frontend/**"
                        }
                    }
                    steps {
                        echo "Building Frontend.."
                        dir("sosusystem-frontend"){
                            sh"npm install"
                            sh"npm run build"
                        }
                    }
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
        stage('Resetting Containers') {
            steps{
                script{
                    try{
                        sh "docker-compose --env-file config/test.env down"
                        sh "docker system prune -f"
                    }
                    finally {}
                }
            }
        }
        stage('Deployment') {
            steps{
                sh "docker-compose --env-file config/test.env up -d"
            }
        }
    }
}
