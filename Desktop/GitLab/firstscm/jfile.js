pipeline {
    agent any 
    stages {
        /*stage('DELETION') { 
            steps {
                echo '--REMOVING REPOSITORY IF ALREADY EXIST --'
                sh "sudo rm -rf Work.js"
            }
        }*/
       /*stage('CLONE') { 
            steps {
                echo '--CLONE STAGE EXECUTION ---'
    sh "git clone https://gitlab.com/my-awesome-group8810907/firstscm.git test"
            }
        }*/
        stage('TEST1') { 
            steps {
                echo '--TEST1 STAGE EXECUTION --'
		    echo "Just to check the stage block"
            }
        }
        stage('TEST2') { 
            steps {
                echo '--TEST2 STAGE EXECUTION --'
		    echo "Just to check the stage block"
            }
        }
stage('TEST3') { 
            steps {
                echo '--TEST3 STAGE EXECUTION --'
		    echo "Just to check the stage block"
            }
        }
        stage('BUILD') { 
            steps {
    echo '--BUILD STAGE EXECUTION --'
    sh "pwd"
    sh "date"
            }
        }
  stage('DEPLOY') { 
            steps {
    echo '--WILL SEE IN NEXT PART --'
            }
        }
    }
}