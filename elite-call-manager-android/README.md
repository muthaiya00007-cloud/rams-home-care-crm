# Elite Calls — Android APK (offline-first pilot)

This is a separate Android native WebView wrapper with a self-contained HTML/JS call log UI. It does not overwrite the old CRM.

- Saves client enquiries, call notes and follow-ups **locally on the installed device** via WebView localStorage.
- Click-to-dial, WhatsApp open, client search, recent calls, follow-up, CSV sharing.
- **Not yet connected to Supabase / Vercel.** No automatic phone-call recording, no notifications, no multi-device/cloud sync, no access controls.
- Data may be permanently lost if the user uninstalls the app or clears its data: export periodically from the Dashboard.
- Do not use for sensitive medical histories, Aadhaar or other high-risk identifiers.
- Compiled debug build is for **manual Android installation only**, not Play Store. A Play Store build requires reviewed release signing, privacy disclosures and an AAB build.

Build with Android SDK 35, Java 17 and Gradle 8.10.2: `gradle :app:assembleDebug`.
Output: `app/build/outputs/apk/debug/app-debug.apk`.
