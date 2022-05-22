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
        stage('Building Stage..') {
            parallel {
                stage('Build Frontend') {
                    steps {
                        echo "Building Frontend.."
                        dir("sosusystem-frontend"){
                            sh"npm install"
                            sh"npm run build"
                        }
                    }
                }
            }
        }
        stage('Delivering Build To Docker Hub - [SOSUSYSTEM-FRONTEND]') {
            steps{
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
        }
        stage('Resetting Containers') {
            steps{
                script{
                    try{
                        sh "docker-compose --env-file config/test.env down"
                        sh "docker system prune -f"
                    }
                    finally {}
                }
            }
        }
        stage('Deployment') {
            steps{
                sh "docker-compose --env-file config/test.env up -d"
            }
        }
    }
    post {
        always {
            sh "Pipeline has ran successfully!"
            discordSend description: '', enableArtifactsList: true, footer: 'Jenkins Pipeline Build', image: '', link: 'env.BUILD_URL', result: '', scmWebUrl: '', showChangeset: true, thumbnail: 'https://nyuddannet.dk/images/dynamic/company/logo/121078', title: 'env.JOB_NAME', webhookURL: 'https://discord.com/api/webhooks/954004988013707334/-YGVFR1tMHesJqAWoPDf1oR-9f81WPC7CmL48L-60yh5dMNMUCs6D6DTm-gRe2SZJ_Pw'
        }
    }
}
