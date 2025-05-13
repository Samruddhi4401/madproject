<<<<<<< HEAD
plugins {
    id("com.android.application")
    id("kotlin-android")
    id("dev.flutter.flutter-gradle-plugin")
    id("com.google.gms.google-services")
}

android {
    namespace = "com.example.android" // Replace with your actual application ID
    compileSdk = flutter.compileSdkVersion

    defaultConfig {
        applicationId = "com.example.android" // Make sure this matches the namespace
        minSdk = 23
        targetSdk = flutter.targetSdkVersion
        versionCode = flutter.versionCode
        versionName = flutter.versionName
=======
android {
    namespace = "com.example.android"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.example.android"
        minSdk = 23
        targetSdk = 35
        versionCode = 1
        versionName = "1.0"
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    kotlinOptions {
        jvmTarget = "17"
>>>>>>> 9d18ee2076a4cacfe12e51b1810d58261042919d
    }

    buildTypes {
        release {
<<<<<<< HEAD
            signingConfig = signingConfigs.getByName("debug") // Adjust for release signing
=======
            isMinifyEnabled = true
            isShrinkResources = true
            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
>>>>>>> 9d18ee2076a4cacfe12e51b1810d58261042919d
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }

    kotlinOptions {
    jvmTarget = "11" // Or your desired JVM target
    languageVersion = "2.1" // Match the Kotlin Gradle plugin version (or a compatible one)
    apiVersion = "2.1"    // Match the Kotlin Gradle plugin version (or a compatible one)
    }

}
<<<<<<< HEAD

flutter {
    source = "../.."
}

dependencies {
    implementation(platform("com.google.firebase:firebase-bom:33.1.0"))
    implementation("com.google.firebase:firebase-analytics")
    // Add other dependencies here
}
=======
>>>>>>> 9d18ee2076a4cacfe12e51b1810d58261042919d
