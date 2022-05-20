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
        stage('Deliver To Docker Hub - Frontend') {
            steps{
                
                sh"echo 'Deliver To Docker Hub - Frontend..'"
                
                dir("sosusystem-frontend"){
                    sh"docker build . -t andersmadsen0/sosusystem-frontend"
                    withCredentials([usernamePassword(credentialsId: 'dockerHub', usernameVariable: 'HUB_USER', passwordVariable: 'HUB_TOKEN')]) {                      
                        sh 'docker login -u $HUB_USER -p $HUB_TOKEN'
                    }
                    sh"docker push andersmadsen0/sosusystem-frontend"
                }
            }
        }
        stage('building: frontend') {
            steps{
                sh"echo 'BUILDING [FRONTEND]..'"
                dir("sosusystem-frontend"){
                    sh"npm install"
                    sh"npm run build"
                }
                sh "docker-compose --env-file config/test.env build web"
            }
        }
        stage('reset containers') {
            steps{
                script{
                    try{
                        sh "docker-compose --env-file ./config/test.env down"
                    }
                    finally {}
                }
            }
        }
        stage('deployment') {
            steps{
                sh "docker-compose --env-file ./config/test.env up -d"
            }
        }

    }
}
