pipeline {
    agent any

    environment {
        TIMESTAMP = sh(script: "date +%s", returnStdout: true).trim()
        SCREENSHOT_PATH = "root/screenshots/${TIMESTAMP}"
        TEST_FOLDER = "tests/${TIMESTAMP}"
    }
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
                            sh "docker build . -t andersmadsen0/sosusystem-backend:${BUILD_NUMBER}"
                            
                        }
                    }
                }
                stage('Build Frontend') {
                    steps {
                        dir("sosusystem-frontend"){
                            sh"npm install"
                            sh"npm run build"
                            sh "docker build . -t andersmadsen0/sosusystem-frontend:${BUILD_NUMBER}"
                        }
                    }
                }
            }
        }

        stage('Deliver To Docker Hub') {
            parallel {
                stage('Deliver Backend To Docker Hub') {
                    steps {
                        withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                            sh 'docker login -u ${USERNAME} -p ${PASSWORD}'
                            sh"docker push andersmadsen0/sosusystem-backend:${BUILD_NUMBER}"
                        }
                    }
                }
                stage('Deliver Frontend To Docker Hub') {
                    steps {
                        withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                            sh 'docker login -u ${USERNAME} -p ${PASSWORD}'
                            sh"docker push andersmadsen0/sosusystem-frontend:${BUILD_NUMBER}"
                        }
                    }
                }
            }
        }
        stage("Release To Test Environment") {
            steps {
                sh "docker-compose -p staging -f docker-compose.yml -f docker-compose.test.yml --env-file config/test-manual.env up -d"
            }
        }
        stage("Execute UI tests") {
            steps {
                    echo "Executing TestCafe tests.."
                    sh "mkdir -p ${SCREENSHOT_PATH}"
                    sh "chmod a=rwx ${SCREENSHOT_PATH}"
                    sh "docker run -v /root/Blogifier/testcafeTests/:/tests -t testcafe/testcafe chromium /tests/ui/*.js"
            }
            post {
                always {
                    archiveArtifacts artifacts: "${SCREENSHOT_PATH}/**", allowEmptyArchive: true
                }
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
