pipeline {
    agent any

    tools {nodejs "NodeJS"}

    triggers {
        pollSCM "*/5 * * * *"
    }

    stages{
        stage("Build") {
            steps {
                parallel(
                    web: {
                        dir("sosusystem-frontend"){
                            sh"npm install"
                            sh"npm run build"
                            sh "docker build . -t andersmadsen0/sosusystem-frontend:${BUILD_NUMBER}"
                            
                        }
                    },
                    api: {
                        dir("sosusystem-backend"){
                            sh"npm install"
                            sh"npm run build"
                            sh "docker build . -t andersmadsen0/sosusystem-backend:${BUILD_NUMBER}"
                        }
                    }
                )
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
