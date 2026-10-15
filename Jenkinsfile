pipeline{
    agent any
    stages{
        stage('Install'){
            steps{
                bat 'npm install'
            }

        }
        stage('Run and Build'){
            steps{
                bat 'npm run build'
            }
        }
    }
}