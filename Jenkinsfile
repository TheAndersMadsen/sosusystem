pipeline {
    agent any

    tools {nodejs "NodeJS"}

    triggers {
        pollSCM "*/5 * * * *"
    }

    stages{
        stage('building: backend') {
            when{
                anyOf{
                    changeset "sosusystem-backend/**"
                }
            }
            steps{
                sh "echo 'BUILDING [BACKEND]..'"
                dir("sosusystem-backend"){
                    sh "npm install"
                    sh "npm run build"
                }
                sh "docker-compose --env-file config/Test.env build api"
            }
            post{
                success{
                    sh"echo 'BACKEND BUILT SUCCESSFULLY'"
                }
            }
        }
        stage('backend tests') {
            when{
                anyOf{
                    changeset "sosusystem-backend/**"
                }
            }
            steps{
                sh"echo 'TBD: this should run all tests in the (domain.test) folder'"
            }
            post {
                success{
                    sh"echo 'TESTS ARE DONE, GENERATING COVERAGE REPORT. coverage report TBD'"
                }
            }
        }
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