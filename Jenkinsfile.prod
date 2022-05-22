
pipeline {
    agent any

    triggers {
        pollSCM "*/5 * * * *"
    }
    environment {
        dockerhub=credentials('dockerhub')
    }

    stages{
        agent any
        parameters {
            run filter: 'SUCCESSFUL', name: 'PROMOTED_BUILD', projectName: 'SOSUSYSTEM'
        }
        
        stage('Delivering Builds To Docker Hub') {
            parallel {
                stage('Delivering Frontend To Docker Hub') {
                    when{
                        anyOf{
                            changeset "sosusystem-frontend/**"
                        }
                    }
                    steps {
                        echo "Delivering Frontend.."
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
                    post{
                        success{
                            echo "Frontend Delivered To Docker Hub!"
                        }
                    }
                }
            }
        }
        stages {
            stage("Deploy to production") {
                steps {
                    sh "docker-compose -f docker-compose.prod.yml --env-file config/prod.env pull"
                    sh "docker-compose -f docker-compose.prod.yml --env-file config/prod.env up -d"
                }
            }
        }
    }
}
