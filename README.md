
# Ringover Mobile App - Test Cases

## Login Feature

### TC01: Valid Login
- **Precondition:** User has a valid account with Ringover.
- **Steps:**  
  1. Open Ringover app.
  2. Enter a valid email and password.
  3. Click on the Login button.
- **Expected Result:** User is successfully logged in and taken to the main dashboard or homepage.

---

### TC02: Invalid Credentials
- **Precondition:** User has a valid account with Ringover.
- **Steps:**  
  1. Open Ringover app.
  2. Enter an incorrect email address or password.
  3. Click on the Login button.
- **Expected Result:** An error message is displayed indicating the login attempt was unsuccessful.

---

### TC03: Empty Credentials
- **Precondition:** None.
- **Steps:**  
  1. Open Ringover app.
  2. Leave the email and password fields empty.
  3. Click on the Login button.
- **Expected Result:** An error message is displayed indicating that both fields are required.

---

### TC04: Invalid Email
- **Precondition:** None.
- **Steps:**  
  1. Open Ringover app.
  2. Enter an invalid email or leave the field empty.
  3. Enter a valid password.
  4. Click on the Login button.
- **Expected Result:** An error message is displayed indicating that the email field is required or badly formatted.

---

### TC05: Empty Password
- **Precondition:** None.
- **Steps:**  
  1. Open Ringover app.
  2. Enter a valid email.
  3. Leave the password field empty.
  4. Click on the Login button.
- **Expected Result:** An error message is displayed indicating that the password field is required.

---

### TC06: Account Locked After Multiple Invalid Attempts
- **Precondition:** User has a valid account with Ringover.
- **Steps:**  
  1. Open Ringover app.
  2. Repeatedly enter invalid credentials.
- **Expected Result:** After 4 attempts, the account should be temporarily locked, and a message should be displayed to the user.

---

### TC07: Password Visibility Toggle
- **Precondition:** None.
- **Steps:**  
  1. Open Ringover app.
  2. Enter a password.
  3. Use SHOW button to show/hide the password.
- **Expected Result:** The password should toggle between visible and hidden states.

---

### TC08: Reset/Forgot Password
- **Precondition:** User has a valid account with Ringover.
- **Steps:**  
  1. Open Ringover app.
  2. Click on the "Forgot your Password?".
  3. Follow the instructions to reset the password.
- **Expected Result:** User should be able to reset their password successfully.

---

