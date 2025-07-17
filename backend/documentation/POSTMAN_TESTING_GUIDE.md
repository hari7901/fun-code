# Smart Email Assistant API - Postman Testing Guide

## Base URL

```
http://localhost:5001/api/auth
```

## 1. User Registration (Signup)

### Endpoint: `POST /api/auth/signup`

**Headers:**

```
Content-Type: application/json
```

**Body (JSON):**

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "Password123"
}
```

**Expected Response (201):**

```json
{
  "success": true,
  "message": "User registered successfully. Please verify your email.",
  "data": {
    "user": {
      "_id": "...",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "role": "user",
      "isEmailVerified": false,
      "isActive": true,
      "createdAt": "...",
      "updatedAt": "..."
    },
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "tokenInfo": {
      "accessTokenExpiry": "15 minutes",
      "refreshTokenExpiry": "30 days",
      "securityTip": "Store refresh token securely, use access token for API calls"
    }
  }
}
```

---

## 2. User Login

### Endpoint: `POST /api/auth/login`

**Headers:**

```
Content-Type: application/json
```

**Body (JSON):**

```json
{
  "email": "john.doe@example.com",
  "password": "Password123"
}
```

**Expected Response (200):**

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "_id": "...",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "role": "user",
      "isEmailVerified": false,
      "isActive": true,
      "createdAt": "...",
      "updatedAt": "..."
    },
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "tokenInfo": {
      "accessTokenExpiry": "15 minutes",
      "refreshTokenExpiry": "30 days",
      "securityTip": "Store refresh token securely, use access token for API calls"
    }
  }
}
```

---

## 3. Get Current User Profile

### Endpoint: `GET /api/auth/me`

**Headers:**

```
Authorization: Bearer YOUR_ACCESS_TOKEN_HERE
```

**Expected Response (200):**

```json
{
  "success": true,
  "data": {
    "user": {
      "_id": "...",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "role": "user",
      "isEmailVerified": false,
      "isActive": true,
      "createdAt": "...",
      "updatedAt": "..."
    }
  }
}
```

---

## 4. Refresh Access Token

### Endpoint: `POST /api/auth/refresh-token`

**Headers:**

```
Content-Type: application/json
```

**Body (JSON):**

```json
{
  "refreshToken": "YOUR_REFRESH_TOKEN_HERE"
}
```

**Alternative - Using Header:**

```
X-Refresh-Token: YOUR_REFRESH_TOKEN_HERE
```

**Expected Response (200):**

```json
{
  "success": true,
  "message": "Tokens refreshed successfully",
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "tokenInfo": {
      "accessTokenExpiry": "15 minutes",
      "refreshTokenExpiry": "30 days"
    }
  }
}
```

---

## 5. Forgot Password

### Endpoint: `POST /api/auth/forgot-password`

**Headers:**

```
Content-Type: application/json
```

**Body (JSON):**

```json
{
  "email": "john.doe@example.com"
}
```

**Expected Response (200):**

```json
{
  "success": true,
  "message": "Password reset token sent to your email"
}
```

---

## 6. Reset Password

### Endpoint: `PUT /api/auth/reset-password/:token`

**URL Example:**

```
PUT /api/auth/reset-password/a1b2c3d4e5f6g7h8i9j0
```

**Headers:**

```
Content-Type: application/json
```

**Body (JSON):**

```json
{
  "password": "NewPassword123"
}
```

**Expected Response (200):**

```json
{
  "success": true,
  "message": "Password reset successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "data": {
    "user": {
      "_id": "...",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "role": "user",
      "isEmailVerified": false,
      "isActive": true,
      "createdAt": "...",
      "updatedAt": "..."
    }
  }
}
```

---

## 7. Verify Email

### Endpoint: `GET /api/auth/verify-email/:token`

**URL Example:**

```
GET /api/auth/verify-email/a1b2c3d4e5f6g7h8i9j0
```

**Expected Response (200):**

```json
{
  "success": true,
  "message": "Email verified successfully"
}
```

---

## 8. Update Password

### Endpoint: `PUT /api/auth/update-password`

**Headers:**

```
Authorization: Bearer YOUR_ACCESS_TOKEN_HERE
Content-Type: application/json
```

**Body (JSON):**

```json
{
  "currentPassword": "Password123",
  "newPassword": "NewPassword456"
}
```

**Expected Response (200):**

```json
{
  "success": true,
  "message": "Password updated successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "data": {
    "user": {
      "_id": "...",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "role": "user",
      "isEmailVerified": false,
      "isActive": true,
      "createdAt": "...",
      "updatedAt": "..."
    }
  }
}
```

---

## 9. Logout (Single Device)

### Endpoint: `POST /api/auth/logout`

**Headers:**

```
Authorization: Bearer YOUR_ACCESS_TOKEN_HERE
Content-Type: application/json
```

**Body (JSON):**

```json
{
  "refreshToken": "YOUR_REFRESH_TOKEN_HERE"
}
```

**Expected Response (200):**

```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

---

## 10. Logout All Devices

### Endpoint: `POST /api/auth/logout-all`

**Headers:**

```
Authorization: Bearer YOUR_ACCESS_TOKEN_HERE
```

**Expected Response (200):**

```json
{
  "success": true,
  "message": "Logged out from all devices successfully"
}
```

---

## Test Users for Different Scenarios

### 1. Regular User

```json
{
  "name": "Alice Johnson",
  "email": "alice@example.com",
  "password": "SecurePass123"
}
```

### 2. Admin User (after creation, you can manually change role in database)

```json
{
  "name": "Admin User",
  "email": "admin@smartmail-ai.com",
  "password": "AdminPass123"
}
```

### 3. Test User with Different Email

```json
{
  "name": "Bob Smith",
  "email": "bob.smith@test.com",
  "password": "TestPass456"
}
```

---

## Health Check Endpoint

### Endpoint: `GET /health`

**No Headers Required**

**Expected Response (200):**

```json
{
  "status": "success",
  "message": "SmartMail AI API is running",
  "timestamp": "2025-07-17T10:30:00.000Z",
  "uptime": 1234.567
}
```

---

## Error Response Examples

### 400 - Validation Error

```json
{
  "success": false,
  "message": "Validation Error",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email"
    },
    {
      "field": "password",
      "message": "Password must contain at least one lowercase letter, one uppercase letter, and one number"
    }
  ]
}
```

### 401 - Unauthorized

```json
{
  "success": false,
  "message": "Access token expired"
}
```

### 403 - Forbidden

```json
{
  "success": false,
  "message": "User role 'user' is not authorized to access this resource"
}
```

### 404 - Not Found

```json
{
  "success": false,
  "message": "No user found with that email address"
}
```

### 500 - Server Error

```json
{
  "success": false,
  "message": "Server error during registration"
}
```

---

## Postman Environment Variables

Create these environment variables in Postman:

```
BASE_URL: http://localhost:5001
ACCESS_TOKEN: (will be set automatically from responses)
REFRESH_TOKEN: (will be set automatically from responses)
USER_ID: (will be set automatically from responses)
```

## Postman Pre-request Scripts

For automatic token management, add this to your collection's Pre-request Script:

```javascript
// Auto-set tokens from previous responses
if (pm.response && pm.response.json()) {
  const response = pm.response.json();
  if (response.data && response.data.accessToken) {
    pm.environment.set("ACCESS_TOKEN", response.data.accessToken);
  }
  if (response.data && response.data.refreshToken) {
    pm.environment.set("REFRESH_TOKEN", response.data.refreshToken);
  }
  if (response.data && response.data.user && response.data.user._id) {
    pm.environment.set("USER_ID", response.data.user._id);
  }
}
```

## Testing Workflow

1. **Start with Health Check** - Verify server is running
2. **Register a User** - Use signup endpoint
3. **Login** - Use the same credentials
4. **Get Profile** - Test protected route
5. **Update Password** - Test password change
6. **Refresh Token** - Test token refresh mechanism
7. **Logout** - Test single device logout
8. **Login Again** - Test with new password
9. **Logout All** - Test logout from all devices

This comprehensive guide will help you test all authentication endpoints thoroughly!
