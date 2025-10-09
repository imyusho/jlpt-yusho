import { EnMessages } from "./en";

const messages: EnMessages = {
  shared: {
    somethingWentWrong: "問題が発生しました",
    validation: {
      invalidEmail: "メールアドレスが無効です",
      passwordMin: "パスワードは最低 {min} 文字必要です",
      passwordMax: "パスワードは最大 {max} 文字までです",
      nameMin: "名前は最低 {min} 文字必要です",
      nameMax: "名前は最大 {max} 文字までです",
    },
    interval: {
      second: "{value} 秒",
      minute: "{value} 分",
      hour: "{value} 時間",
      day: "{value} 日",
      week: "{value} 週間",
      month: "{value} か月",
      year: "{value} 年",
    },
  },
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
    nameLabel: "名前",
    namePlaceholder: "ユウショウ・コウ",
    emailLabel: "メールアドレス",
    emailPlaceholder: "m@example.com",
    passwordLabel: "パスワード",
    or: "または",
    signUpButton: "登録",
    loginWithGoogle: "Googleで登録",
    alreadyAccount: "すでにアカウントをお持ちですか？",
    login: "ログイン",
  },
  emailConfirmation: {
    title: "メールアドレスを確認してください",
    description:
      "確認リンクをあなたのメールアドレスに送信しました。リンクをクリックしてアカウントを確認してください。",
    returnToLogin: "ログインに戻る",
    noEmail: "メールが届いていませんか？",
    resendConfirmation: "確認メールを再送信",
    resendConfirmationSuccess:
      "確認メールを再送信しました。リンクをクリックしてアカウントを確認してください。",
  },
  forgotPassword: {
    title: "パスワードをお忘れですか？",
    description:
      "メールアドレスを入力してください。パスワードをリセットするためのリンクをお送りします。",
    emailLabel: "メールアドレス",
    emailPlaceholder: "メールアドレスを入力してください",
    sendResetLink: "リセットリンクを送信",
    backToLogin: "ログインに戻る",
    emailSent: {
      title: "メールを確認してください",
      description:
        "受信トレイにメールを送信しました。見当たらない場合は、迷惑メールフォルダもご確認ください。",
    },
  },
  forgotPasswordRedirect: {
    title: "パスワードをリセット",
    description:
      "アカウントの新しいパスワードを入力してください。安全で強力なパスワードを設定しましょう。",
    passwordLabel: "新しいパスワード",
    reset: "パスワードを設定",
  },
  vocabulary: {
    title: "語彙",
    words: "{count} 語彙",
    loadMore: "もっと読み込む",
  },
  unit: {
    title: "クイズモード",
  },
  sidebar: {
    default: {
      home: "ホーム",
    },
    learning: {
      title: "学習",
      vocabulary: "単語",
    },
  },
  supabase: {
    signInWithOtpSuccess:
      "確認メールを再送信しました。数分以内に届かない場合は、迷惑メールフォルダを確認するか、後でもう一度お試しください。",
    errorCodes: {
      anonymous_provider_disabled: "匿名サインインは無効です。",
      bad_code_verifier:
        "コードの検証に失敗しました。再度サインインしてください。",
      bad_json: "リクエストボディが有効なJSONではありません。",
      bad_jwt: "無効な認証トークンです。",
      bad_oauth_callback: "OAuthコールバックに必要な属性がありません。",
      bad_oauth_state: "OAuthステートが無効です。",
      captcha_failed: "CAPTCHAの検証に失敗しました。もう一度お試しください。",
      conflict: "競合が発生しました。少し待ってから再試行してください。",
      email_address_invalid: "無効なメールアドレスです。",
      email_address_not_authorized:
        "このメールアドレスではデフォルトSMTPからのメッセージを受信できません。",
      email_conflict_identity_not_deletable:
        "アカウントの競合があります。サポートに連絡してください。",
      email_exists: "このメールアドレスは既に登録されています。",
      email_not_confirmed:
        "メールアドレスが確認されていません。受信箱を確認してください。",
      email_provider_disabled: "メールサインアップは無効です。",
      flow_state_expired:
        "サインインセッションの有効期限が切れています。再度お試しください。",
      flow_state_not_found:
        "サインインセッションが見つかりません。再度お試しください。",
      hook_payload_invalid_content_type:
        "無効なリクエストコンテンツタイプです。",
      hook_payload_over_size_limit: "リクエストのペイロードが大きすぎます。",
      hook_timeout: "リクエストがタイムアウトしました。",
      hook_timeout_after_retry: "複数回の再試行後にリクエストが失敗しました。",
      identity_already_exists: "このIDは既にユーザーに紐付けられています。",
      identity_not_found: "IDが見つかりません。",
      insufficient_aal: "追加の認証が必要です。",
      invalid_credentials: "ログイン資格情報が無効です。",
      invite_not_found: "招待は期限切れ、または既に使用されています。",
      manual_linking_disabled: "手動でのIDリンクは無効です。",
      mfa_challenge_expired:
        "MFAチャレンジの有効期限が切れています。新しいものをリクエストしてください。",
      mfa_factor_name_conflict: "MFA要素は一意の名前である必要があります。",
      mfa_factor_not_found: "MFA要素が見つかりません。",
      mfa_ip_address_mismatch:
        "MFA登録には同じIPアドレスを使用する必要があります。",
      mfa_phone_enroll_not_enabled: "電話によるMFA登録は無効です。",
      mfa_phone_verify_not_enabled: "電話によるMFA認証は無効です。",
      mfa_totp_enroll_not_enabled: "TOTP登録は無効です。",
      mfa_totp_verify_not_enabled: "TOTP認証は無効です。",
      mfa_verification_failed: "MFA認証に失敗しました。",
      mfa_verification_rejected: "MFA認証が拒否されました。",
      mfa_verified_factor_exists: "既に認証済みの電話要素が存在します。",
      mfa_web_authn_enroll_not_enabled: "WebAuthn登録は無効です。",
      mfa_web_authn_verify_not_enabled: "WebAuthn認証は無効です。",
      no_authorization: "認可が必要です。",
      not_admin: "管理者権限が必要です。",
      oauth_provider_not_supported:
        "OAuthプロバイダーはサポートされていません。",
      otp_disabled: "ワンタイムパスワードは無効です。",
      otp_expired: "OTPの有効期限が切れています。再試行してください。",
      over_email_send_rate_limit:
        "メールの送信回数が多すぎます。後で再試行してください。",
      over_request_rate_limit:
        "リクエストが多すぎます。少し待って再試行してください。",
      over_sms_send_rate_limit:
        "SMSの送信回数が多すぎます。後で再試行してください。",
      phone_exists: "この電話番号は既に登録されています。",
      phone_not_confirmed: "電話番号が確認されていません。",
      phone_provider_disabled: "電話サインアップは無効です。",
      provider_disabled: "プロバイダーは無効です。",
      provider_email_needs_verification:
        "OAuthサインイン後に確認メールが送信されました。",
      reauthentication_needed: "続行するには再認証が必要です。",
      reauthentication_not_valid: "再認証に失敗しました。再試行してください。",
      refresh_token_already_used:
        "リフレッシュトークンは既に使用されています。再度サインインしてください。",
      refresh_token_not_found:
        "リフレッシュトークンが見つかりません。再度サインインしてください。",
      request_timeout: "リクエストがタイムアウトしました。再試行してください。",
      same_password:
        "新しいパスワードは現在のパスワードと異なる必要があります。",
      saml_assertion_no_email: "SAMLレスポンスにメール属性がありません。",
      saml_assertion_no_user_id: "SAMLレスポンスにユーザーIDがありません。",
      saml_entity_id_mismatch: "SAMLエンティティIDが一致しません。",
      saml_idp_already_exists: "SAML IDプロバイダーは既に存在します。",
      saml_idp_not_found: "SAML IDプロバイダーが見つかりません。",
      saml_metadata_fetch_failed: "SAMLメタデータの取得に失敗しました。",
      saml_provider_disabled: "SAMLプロバイダーは無効です。",
      saml_relay_state_expired:
        "SAMLリレーステートの有効期限が切れています。再試行してください。",
      saml_relay_state_not_found:
        "SAMLリレーステートが見つかりません。再試行してください。",
      session_expired:
        "セッションの有効期限が切れました。再度サインインしてください。",
      session_not_found: "セッションが見つかりません。",
      signup_disabled: "サインアップは無効です。",
      single_identity_not_deletable:
        "ユーザーは少なくとも1つのIDを持つ必要があります。",
      sms_send_failed:
        "SMSの送信に失敗しました。プロバイダーを確認してください。",
      sso_domain_already_exists: "SSOドメインは既に存在します。",
      sso_provider_not_found: "SSOプロバイダーが見つかりません。",
      too_many_enrolled_mfa_factors: "登録されているMFA要素が多すぎます。",
      unexpected_audience: "Tokenのaudienceが予期せぬ値です。",
      unexpected_failure: "予期せぬエラーが発生しました。",
      user_already_exists: "ユーザーは既に存在します。",
      user_banned: "このアカウントは使用禁止です。",
      user_not_found: "ユーザーが見つかりません。",
      user_sso_managed:
        "ユーザーはSSOで管理されており、一部更新は許可されません。",
      validation_failed: "検証に失敗しました。入力内容を確認してください。",
      weak_password:
        "パスワードが弱すぎます。より強力なパスワードを使用してください。",
    },
  },
};

export default messages;
