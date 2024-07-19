pipeline {
    agent any

    environment {
        NODE_ENV = 'test'
        GIT_CREDENTIALS_ID = 'Credential_ID' // Remplacez par l'ID de vos credentials Jenkins
    }
    // triggers {
    //     cron('H/5 * * * *') // Planification pour exécuter toutes les 5 minutes
    // }
 
    stages {
        stage('Checkout') {
            steps {
                script {
                    // Checkout the 'dev' branch
                    checkout([$class: 'GitSCM', branches: [[name: '*/dev']], 
                              doGenerateSubmoduleConfigurations: false, 
                              extensions: [], submoduleCfg: [], 
                              userRemoteConfigs: [[credentialsId: env.GIT_CREDENTIALS_ID, url: 'https://github.com/Manja2012/gestion-des-livres.git']]])
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install Node.js dependencies for both frontend and backend
                    dir('front') {
                        bat 'npm install'
                    }
                    dir('back') {
                        bat 'npm install'
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Run tests for both frontend and backend
                    dir('front') {
                        echo 'sur le front'
                        
                    }
                    dir('back') {
                        echo 'sur le back'
                        bat 'npm test'
                    }
                }
            }
        }

        
    }

    
    post {
        success {
            script {
                checkout([$class: 'GitSCM', branches: [[name: '*/dev']], 
                              doGenerateSubmoduleConfigurations: false, 
                              extensions: [], submoduleCfg: [], 
                              userRemoteConfigs: [[credentialsId: env.GIT_CREDENTIALS_ID, url: 'https://github.com/Manja2012/gestion-des-livres.git']]])

                echo 'Tests succeeded, merging dev into main'
                withCredentials([usernamePassword(credentialsId: env.GIT_CREDENTIALS_ID, passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
                    bat """
                        git config --global user.email "mdemko2012@gmail.com"
                        git config --global user.name "Manja2012"
                        git checkout main
                        git pull origin main
                        git merge origin/dev
                        git push https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/Manja2012/gestion-des-livres.git main
                    """
                }
            }
        }
        failure {
            echo 'Tests failed, merge to main aborted.'
        }
        always {
            echo 'Cleaning up workspace'
            cleanWs()
        }
    }
}