import { EnMessages } from "./en";

const messages: EnMessages = {
  home: {
    meta: {
      title: "JLPT Yusho - JLPT のための日本語をマスター",
      description:
        "JLPT のためのよりスマートな学習。すべての JLPT レベル (N5 から N1) に合わせたインタラクティブな演習で、語彙、文法、漢字、リスニングを練習します。",
    },
  },
  loginForm: {
    title: "アカウントにログイン",
    description:
      "アカウントにログインするには、以下にメールアドレスを入力してください",
    emailLabel: "メール",
    emailPlaceholder: "m@example.com",
    passwordLabel: "パスワード",
    forgotPassword: "パスワードをお忘れですか？",
    loginButton: "ログイン",
    or: "または、以下で続行",
    loginWithGoogle: "Google でログイン",
    noAccount: "アカウントをお持ちではありませんか？",
    signUp: "サインアップ",
  },
  signupForm: {
    title: "無料アカウントを作成",
    description: "情報を入力してアカウントを作成してください",
    usernameLabel: "ユーザー名",
    usernamePlaceholder: "YushoKo",
    emailLabel: "メールアドレス",
    emailPlaceholder: "m@example.com",
    passwordLabel: "パスワード",
    or: "または",
    signUpButton: "登録",
    loginWithGoogle: "Googleで登録",
    alreadyAccount: "すでにアカウントをお持ちですか？",
    login: "ログイン",
  },
};

export default messages;
