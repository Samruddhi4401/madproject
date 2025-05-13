<<<<<<< HEAD
=======

>>>>>>> 9d18ee2076a4cacfe12e51b1810d58261042919d
buildscript {
    repositories {
        google()
        mavenCentral()
    }

    dependencies {
<<<<<<< HEAD
        // Add the Maven coordinates and latest version of the plugin
        classpath("com.google.gms:google-services:4.4.2")
        classpath("com.android.tools.build:gradle:8.0.0")
=======
        classpath("com.android.tools.build:gradle:8.1.0")
        classpath("com.google.gms:google-services:4.3.15") // <- Use 4.3.15, it's more stable
>>>>>>> 9d18ee2076a4cacfe12e51b1810d58261042919d
    }
}

allprojects {
    repositories {
        google()
        mavenCentral()
    }
}
<<<<<<< HEAD

val newBuildDir: Directory = rootProject.layout.buildDirectory.dir("../../build").get()
rootProject.layout.buildDirectory.value(newBuildDir)

subprojects {
    val newSubprojectBuildDir: Directory = newBuildDir.dir(project.name)
    project.layout.buildDirectory.value(newSubprojectBuildDir)
}

subprojects {
    project.evaluationDependsOn(":app")
}

tasks.register<Delete>("clean") {
    delete(rootProject.layout.buildDirectory)
}
=======
>>>>>>> 9d18ee2076a4cacfe12e51b1810d58261042919d
