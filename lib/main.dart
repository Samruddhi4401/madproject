// ignore_for_file: depend_on_referenced_packages

import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'screens/auth/farmer_login_screen.dart';
import 'screens/auth/farmer_res_screen.dart';
import 'screens/auth/login.dart';
import 'screens/auth/nursery_login_screen.dart';
import 'screens/auth/nursery_res_screen.dart';
import 'screens/auth/signup.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.green,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      debugShowCheckedModeBanner: false,
      initialRoute: '/',
      routes: {
        '/': (context) => const LoginScreen(),
        '/farmer_login': (context) => const FarmerLoginScreen(),
        "/farmer_register": (context) => const FarmerResScreen(),
        '/nursery_login': (context) => const NurseryLoginScreen(),
        '/nursery_register': (context) => const NurseryResScreen(),
        '/login': (context) => const LoginScreen(),
        '/signup': (context) => const SignUpScreen(),
      },
    );
  }
}
