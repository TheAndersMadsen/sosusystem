pipeline {
    agent any

    tools {nodejs "NodeJS"}

    triggers {
        pollSCM "*/5 * * * *"
    }

    stages{
        stage('building: frontend') {
            when{
                anyOf{
                    changeset "sosusystem-frontend/**"
                }
            }
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
