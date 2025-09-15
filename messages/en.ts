const messages = {
  home: {
    meta: {
      title: "JLPT Yusho - Master Japanese for the JLPT",
      description:
        "Study smarter for the JLPT. Practice vocabulary, grammar, kanji, and listening with interactive exercises tailored for all JLPT levels (N5 to N1).",
    },
  },
  loginForm: {
    title: "Log in to your account",
    description: "Enter your email below to log in to your account",
    emailLabel: "Email",
    emailPlaceholder: "m@example.com",
    passwordLabel: "Password",
    forgotPassword: "Forgot your password?",
    loginButton: "Log in",
    or: "or",
    loginWithGoogle: "Log in with Google",
    noAccount: "Don't have an account?",
    signUp: "Sign up",
  },
  signupForm: {
    title: "Create your free account",
    description: "Enter your information and create an account",
    usernameLabel: "Username",
    usernamePlaceholder: "YushoKo",
    emailLabel: "Email",
    emailPlaceholder: "m@example.com",
    passwordLabel: "Password",
    or: "or",
    signUpButton: "Sign up",
    loginWithGoogle: "Sign up with Google",
    alreadyAccount: "Already have an account?",
    login: "Log in",
  },
};

export type EnMessages = typeof messages;
export default messages;
