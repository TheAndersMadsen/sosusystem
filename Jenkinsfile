pipeline {
    agent any

    tools {nodejs "NodeJS"}

    triggers {
        pollSCM "*/5 * * * *"
    }

    stages{        
        stage('Building Stage..') {
            parallel {
                stage('Build Backend') {
                    steps {
                        echo "Building Backend.."
                        dir("sosusystem-backend"){
                            sh"npm install"
                            sh"npm run build"
                            sh "docker build . -t andersmadsen0/sosusystem-frontend:${BUILD_NUMBER}"
                            
                        }
                    }
                    post{
                        success{
                            echo "Backend Built Successfully!"
                        }
                    }
                }
                stage('Build Frontend') {
                    when{
                        anyOf{
                            changeset "sosusystem-frontend/**"
                        }
                    }
                    steps {
                        dir("sosusystem-frontend"){
                            sh"npm install"
                            sh"npm run build"
                            sh "docker build . -t andersmadsen0/sosusystem-backend:${BUILD_NUMBER}"
                        }
                    }
                    post{
                        success{
                            echo "Frontend Built Successfully!"
                        }
                    }
                }
            }
        stage("Deliver To Docker Hub") {
            steps {
                parallel(
                    backend: {
                        withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                            sh 'docker login -u ${USERNAME} -p ${PASSWORD}'
                            
                            sh"docker push andersmadsen0/sosusystem-backend:${BUILD_NUMBER}"
                        }
                    },
                    frontend: {
                        withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                            sh 'docker login -u ${USERNAME} -p ${PASSWORD}'
                            sh"docker push andersmadsen0/sosusystem-frontend:${BUILD_NUMBER}"
                        }
                    }
                )
            }
        }
        stage("Release To Test Environment") {
            steps {
                sh "docker-compose -p staging -f docker-compose.yml -f docker-compose.test.yml --env-file config/test-manual.env up -d"
            }
        }
        stage("Release To Production") {
            steps {
                build job: "SOSUSYSTEM-PROD", wait: false, parameters: [
                    string(name: "TAG_NUMBER", value: env.BUILD_NUMBER)
                ]
            }
        }
    }
}
}

