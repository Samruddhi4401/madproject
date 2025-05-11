import 'package:flutter/material.dart';

class NurseryResScreen extends StatefulWidget {
  const NurseryResScreen({super.key});

  @override
  State<NurseryResScreen> createState() => _NurseryFormState();
}

class _NurseryFormState extends State<NurseryResScreen> {
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  final TextEditingController ownerController = TextEditingController();
  final TextEditingController nameController = TextEditingController();
  final TextEditingController addressController = TextEditingController();
  final TextEditingController pincodeController = TextEditingController();
  final TextEditingController mobile1Controller = TextEditingController();
  final TextEditingController mobile2Controller = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Column(
        children: [
          TextFormField(
            controller: ownerController,
            decoration: const InputDecoration(
              labelText: 'Owner Name',
              border: OutlineInputBorder(),
            ),
            validator:
                (value) =>
                    value == null || value.isEmpty
                        ? 'Please enter the owner\'s name'
                        : null,
          ),
          const SizedBox(height: 16),
          TextFormField(
            controller: nameController,
            decoration: const InputDecoration(
              labelText: 'Nursery Name',
              border: OutlineInputBorder(),
            ),
            validator:
                (value) =>
                    value == null || value.isEmpty
                        ? 'Please enter the nursery\'s name'
                        : null,
          ),
          const SizedBox(height: 16),
          TextFormField(
            controller: addressController,
            decoration: const InputDecoration(
              labelText: 'Address',
              border: OutlineInputBorder(),
            ),
            validator:
                (value) =>
                    value == null || value.isEmpty
                        ? 'Please enter the nursery\'s address'
                        : null,
          ),
          const SizedBox(height: 16),
          TextFormField(
            controller: pincodeController,
            decoration: const InputDecoration(
              labelText: 'Pincode',
              border: OutlineInputBorder(),
            ),
            keyboardType: TextInputType.number,
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Please enter the pincode';
              }
              if (value.length != 6) {
                return 'Please enter a valid 6-digit pincode';
              }
              return null;
            },
          ),
          const SizedBox(height: 16),
          TextFormField(
            controller: mobile1Controller,
            decoration: const InputDecoration(
              labelText: 'Mobile Number 1',
              border: OutlineInputBorder(),
            ),
            keyboardType: TextInputType.phone,
            validator: (value) {
              if (value == null || value.isEmpty) {
                return 'Please enter a mobile number';
              }
              if (value.length != 10) {
                return 'Please enter a valid 10-digit mobile number';
              }
              return null;
            },
          ),
          const SizedBox(height: 16),
          TextFormField(
            controller: mobile2Controller,
            decoration: const InputDecoration(
              labelText: 'Mobile Number 2 (Optional)',
              border: OutlineInputBorder(),
            ),
            keyboardType: TextInputType.phone,
            validator: (value) {
              if (value != null && value.isNotEmpty && value.length != 10) {
                return 'Please enter a valid 10-digit mobile number';
              }
              return null;
            },
          ),
          const SizedBox(height: 24),
          ElevatedButton(
            onPressed: () {
              if (_formKey.currentState!.validate()) {
                print('Nursery Signup');
                print('Owner: ${ownerController.text}');
                print('Name: ${nameController.text}');
                print('Address: ${addressController.text}');
                print('Pincode: ${pincodeController.text}');
                print('Mobile 1: ${mobile1Controller.text}');
                print('Mobile 2: ${mobile2Controller.text}');
              }
            },
            child: const Text('Sign Up'),
          ),
        ],
      ),
    );
  }
}
