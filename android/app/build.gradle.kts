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
    }

    buildTypes {
        release {
            signingConfig = signingConfigs.getByName("debug") // Adjust for release signing
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

flutter {
    source = "../.."
}

dependencies {
    implementation(platform("com.google.firebase:firebase-bom:33.1.0"))
    implementation("com.google.firebase:firebase-analytics")
    // Add other dependencies here
}