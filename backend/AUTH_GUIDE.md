# Smart Email Assistant - Authentication System

## Overview

This authentication system uses JWT tokens with a dual-token approach for enhanced security:

- **Access Tokens**: Short-lived (15 minutes) tokens for API requests
- **Refresh Tokens**: Long-lived (30 days) tokens for obtaining new access tokens

## Security Features

### 1. Token Expiration Strategy

- **Access Token**: 15 minutes (configurable via `JWT_ACCESS_EXPIRE`)
- **Refresh Token**: 30 days (configurable via `JWT_REFRESH_EXPIRE`)
- Automatic cleanup of expired refresh tokens

### 2. Token Storage

- Access tokens should be stored in memory (React state)
- Refresh tokens should be stored securely (httpOnly cookies recommended for web, secure storage for mobile)

### 3. Device Management

- Each device/session gets its own refresh token
- Ability to logout from specific device or all devices
- Track user agent and IP address for security monitoring

## API Endpoints

### Authentication Routes

#### 1. Sign Up

```
POST /api/auth/signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass123"
}

Response:
{
  "success": true,
  "message": "User registered successfully. Please verify your email.",
  "data": {
    "user": { ... },
    "accessToken": "eyJ...",
    "refreshToken": "eyJ...",
    "tokenInfo": {
      "accessTokenExpiry": "15 minutes",
      "refreshTokenExpiry": "30 days",
      "securityTip": "Store refresh token securely, use access token for API calls"
    }
  }
}
```

#### 2. Login

```
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePass123"
}

Response: Same as signup
```

#### 3. Refresh Token

```
POST /api/auth/refresh-token
Content-Type: application/json
X-Refresh-Token: <refresh_token>

OR

{
  "refreshToken": "eyJ..."
}

Response:
{
  "success": true,
  "message": "Tokens refreshed successfully",
  "data": {
    "accessToken": "eyJ...",
    "refreshToken": "eyJ...",
    "tokenInfo": {
      "accessTokenExpiry": "15 minutes",
      "refreshTokenExpiry": "30 days"
    }
  }
}
```

#### 4. Logout (Single Device)

```
POST /api/auth/logout
Content-Type: application/json

{
  "refreshToken": "eyJ..."
}

Response:
{
  "success": true,
  "message": "Logged out successfully"
}
```

#### 5. Logout All Devices

```
POST /api/auth/logout-all
Authorization: Bearer <access_token>

Response:
{
  "success": true,
  "message": "Logged out from all devices successfully"
}
```

### Protected Routes

#### Get User Profile

```
GET /api/auth/me
Authorization: Bearer <access_token>

Response:
{
  "success": true,
  "data": {
    "user": { ... }
  }
}
```

#### Update Password

```
PUT /api/auth/update-password
Authorization: Bearer <access_token>
Content-Type: application/json

{
  "currentPassword": "oldPassword",
  "newPassword": "newSecurePassword123"
}
```

## Frontend Implementation Guide

### 1. Token Storage (React)

```javascript
// Token management hook
import { useState, useEffect } from "react";

const useAuth = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(
    () => localStorage.getItem("refreshToken") // Store securely in production
  );

  useEffect(() => {
    if (refreshToken) {
      localStorage.setItem("refreshToken", refreshToken);
    } else {
      localStorage.removeItem("refreshToken");
    }
  }, [refreshToken]);

  return {
    accessToken,
    setAccessToken,
    refreshToken,
    setRefreshToken,
  };
};
```

### 2. Automatic Token Refresh

```javascript
// API interceptor for automatic token refresh
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Request interceptor to add access token
api.interceptors.request.use((config) => {
  const accessToken = getAccessToken(); // From your auth state
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// Response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = getRefreshToken(); // From your auth state
        const response = await axios.post("/api/auth/refresh-token", {
          refreshToken,
        });

        const { accessToken, refreshToken: newRefreshToken } =
          response.data.data;

        // Update tokens
        setAccessToken(accessToken);
        setRefreshToken(newRefreshToken);

        // Retry original request
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        // Refresh failed, logout user
        logout();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
```

### 3. Secure Storage Recommendations

#### Web Applications

```javascript
// Option 1: Memory + httpOnly cookies (most secure)
// Store access token in memory (React state)
// Store refresh token in httpOnly cookie (requires backend changes)

// Option 2: Secure localStorage with encryption
import CryptoJS from "crypto-js";

const ENCRYPTION_KEY = "your-app-specific-key";

const secureStorage = {
  setItem: (key, value) => {
    const encrypted = CryptoJS.AES.encrypt(value, ENCRYPTION_KEY).toString();
    localStorage.setItem(key, encrypted);
  },

  getItem: (key) => {
    const encrypted = localStorage.getItem(key);
    if (!encrypted) return null;

    try {
      const decrypted = CryptoJS.AES.decrypt(encrypted, ENCRYPTION_KEY);
      return decrypted.toString(CryptoJS.enc.Utf8);
    } catch {
      return null;
    }
  },

  removeItem: (key) => {
    localStorage.removeItem(key);
  },
};
```

## Security Best Practices

### 1. Environment Variables

```bash
# Development
JWT_SECRET=development-secret-min-32-characters
JWT_REFRESH_SECRET=development-refresh-secret-different-from-access

# Production (use strong, unique secrets)
JWT_SECRET=super-long-random-secret-for-production-access-tokens
JWT_REFRESH_SECRET=different-super-long-random-secret-for-refresh-tokens
```

### 2. Token Validation

- Always validate token type (access vs refresh)
- Check token expiration
- Verify user still exists and is active
- Monitor for suspicious activity

### 3. Rate Limiting

- Implement rate limiting on auth endpoints
- Monitor failed login attempts
- Consider account lockout policies

### 4. HTTPS Only

- Always use HTTPS in production
- Set secure cookie flags
- Implement proper CORS policies

## Error Handling

### Common Error Responses

```javascript
// Invalid/Expired Access Token
{
  "success": false,
  "message": "Access token expired"
}

// Invalid Refresh Token
{
  "success": false,
  "message": "Refresh token not found or expired"
}

// Account Issues
{
  "success": false,
  "message": "Your account has been deactivated"
}
```

### Frontend Error Handling

```javascript
const handleAuthError = (error) => {
  if (error.response?.status === 401) {
    const message = error.response.data.message;

    if (message.includes("Access token expired")) {
      // Trigger token refresh
      return refreshTokens();
    } else if (message.includes("Refresh token")) {
      // Logout user, redirect to login
      logout();
      navigate("/login");
    }
  }

  // Handle other errors
  showErrorMessage(error.response?.data?.message || "An error occurred");
};
```

## Testing the API

### Using curl

```bash
# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Use access token for protected routes
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"

# Refresh tokens
curl -X POST http://localhost:5000/api/auth/refresh-token \
  -H "Content-Type: application/json" \
  -d '{"refreshToken":"YOUR_REFRESH_TOKEN"}'
```

This authentication system provides enterprise-grade security while maintaining ease of use for developers.
