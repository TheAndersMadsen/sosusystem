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
                            sh"npm run build
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
        stage("Push images to registry") {
            steps {
                sh "docker-compose --env-file config/test-manual.env push"
            }
            post{
                success{
                    echo "Images Pushed To Registry!"
                }
            }
        }
        stage("Release to production") {
            steps {
                build job: "SOSUSYSTEM-PROD", wait: false, parameters: [
                    string(name: "TAG_NUMBER", value: env.BUILD_NUMBER)
                ]
            }
        }
    }
}
