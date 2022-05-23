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
                        sh "docker-compose -f docker-compose.yml --env-file config/test.env build frontend"
                    }
                    post{
                        success{
                            echo "Frontend Built Successfully!"
                        }
                    }
                }
                stage('Build Backend') {
                    steps {
                        echo "Building Backend.."
                        dir("sosusystem-backend"){
                            sh"npm install"
                            sh"npm run build"
                        }
                        sh "docker-compose -f docker-compose.yml --env-file config/test.env build backend"
                    }
                    post{
                        success{
                            echo "Backend Built Successfully!"
                        }
                    }
                }
            }
        }
        stage('Reset Test Environment') {
            steps{
                sh "docker-compose -f docker-compose.yml --env-file config/test.env down"
                sh "docker system prune -f"
                sh "docker-compose -f docker-compose.yml --env-file config/test.env up -d"
            }
            post{
                success{
                    echo "Test Environemnt Ready!"
                }
            }
        }
        stage("Push images to registry") {
            steps {
                sh "docker-compose -f docker-compose.yml --env-file config/test.env push"
            }
            post{
                success{
                    echo "Images Pushed To Registry!"
                }
            }
        }
    }
}
