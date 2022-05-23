pipeline {
    agent any

    tools {nodejs "NodeJS"}

    triggers {
        pollSCM "*/5 * * * *"
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
                        sh "docker-compose --env-file config/test-manual.env build frontend"
                    }
                    post{
                        success{
                            echo "Frontend Built Successfully!"
                        }
                    }
                }
                stage('Build Backend') {
                    when{
                        anyOf{
                            changeset "sosusystem-backend/**"
                        }
                    }
                    steps {
                        echo "Building Backend.."
                        dir("sosusystem-backend"){
                            sh"npm install"
                            sh"npm run build"
                        }
                        sh "docker-compose --env-file config/test-manual.env build backend"
                    }
                    post{
                        success{
                            echo "Backend Built Successfully!"
                        }
                    }
                }
            }
        }
        stage("Deliver") {
            steps {
                parallel(
                    web: {
                        withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                            sh 'docker login -u ${USERNAME} -p ${PASSWORD}'
                            sh"docker push andersmadsen0/sosusystem-frontend:${BUILD_NUMBER}"
                        }
                    },
                    api: {
                        withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                            sh 'docker login -u ${USERNAME} -p ${PASSWORD}'
                            
                            sh"docker push andersmadsen0/sosusystem-backend:${BUILD_NUMBER}"
                        }
                    }
                )
            }
        }
        stage("Release to test") {
            steps {
                sh "docker-compose -p staging -f docker-compose.yml -f docker-compose.test.yml up -d"
            }
        }
    }
}
