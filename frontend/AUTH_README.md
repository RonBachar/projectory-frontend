# Authentication System

This project includes a complete authentication UI built with React, TypeScript, Firebase, and Chakra UI components.

## Features

- **Email/Password Authentication**: Login and signup forms with validation
- **Google OAuth**: One-click sign-in with Google
- **Form Validation**: Client-side validation with error handling
- **Responsive Design**: Mobile-friendly layouts
- **Modern UI**: Clean, minimal design with shadows and rounded corners

## File Structure

```
src/
├─ components/
│   ├─ Auth/
│   │   ├─ LoginForm.tsx          # Email/password login form
│   │   ├─ SignupForm.tsx         # Email/password signup form
│   │   ├─ GoogleSignInButton.tsx # Google OAuth button
│   │   └─ index.ts               # Export file
│   └─ ui/
│       ├─ input.tsx              # Input component
│       ├─ label.tsx              # Label component
│       ├─ button.tsx             # Button component
│       └─ card.tsx               # Card component
├─ pages/
│   ├─ Login.tsx                  # Login page
│   ├─ Signup.tsx                 # Signup page
│   └─ Home.tsx                   # Home page with navigation
└─ lib/
    └─ firebase.ts                # Firebase configuration
```

## Components

### LoginForm

- Email and password inputs
- Form validation
- Error handling for Firebase auth errors
- Link to switch to signup

### SignupForm

- Email, password, and confirm password inputs
- Password strength validation
- Password confirmation matching
- Link to switch to login

### GoogleSignInButton

- Google OAuth integration
- Custom Google icon
- Error handling

## Pages

### Login Page (`/login`)

- Centered layout with gradient background
- Login form
- Google sign-in option
- Navigation to signup

### Signup Page (`/signup`)

- Centered layout with gradient background
- Signup form
- Google sign-in option
- Navigation to login

## Usage

### Basic Setup

The authentication system is already integrated with React Router. You can navigate to:

- `/login` - Login page
- `/signup` - Signup page
- `/` - Home page

### Firebase Configuration

Make sure your Firebase project is configured with:

1. Authentication enabled
2. Email/Password provider enabled
3. Google provider enabled
4. Environment variables set in `.env`:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### Customization

#### Styling

All components use Tailwind CSS classes and can be customized by:

- Modifying the className props
- Updating the Tailwind configuration
- Overriding component styles

#### Form Validation

Validation rules can be modified in the respective form components:

- Email format validation
- Password length requirements
- Custom error messages

#### Error Handling

Error handling is built into each component and can be extended by:

- Adding toast notifications
- Implementing custom error logging
- Adding retry mechanisms

## Dependencies

- `firebase` - Firebase SDK
- `react-router-dom` - Routing
- `@radix-ui/react-label` - Label component
- `@radix-ui/react-slot` - Slot component
- `class-variance-authority` - Component variants
- `clsx` - Class name utility
- `tailwind-merge` - Tailwind class merging

## Next Steps

1. **Protected Routes**: Implement route protection based on authentication state
2. **User Context**: Create a user context for managing authentication state
3. **Password Reset**: Add password reset functionality
4. **Email Verification**: Implement email verification for new accounts
5. **Profile Management**: Add user profile management features
