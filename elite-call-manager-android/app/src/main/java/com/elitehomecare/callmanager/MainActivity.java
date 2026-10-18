package com.elitehomecare.callmanager;

import android.app.Activity;
import android.os.Bundle;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.content.Intent;
import android.net.Uri;
import android.graphics.Color;
import android.view.WindowManager;

public class MainActivity extends Activity {
    private WebView webView;

    @Override public void onCreate(Bundle state) {
        super.onCreate(state);
        getWindow().setStatusBarColor(Color.rgb(48, 58, 167));
        getWindow().setNavigationBarColor(Color.rgb(255, 255, 255));
        getWindow().getDecorView().setSystemUiVisibility(android.view.View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR);
        webView = new WebView(this);
        webView.setBackgroundColor(Color.rgb(246, 248, 255));
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setAllowFileAccess(true);
        settings.setAllowContentAccess(false);
        settings.setAllowFileAccessFromFileURLs(false);
        settings.setAllowUniversalAccessFromFileURLs(false);
        settings.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
        webView.setWebChromeClient(new WebChromeClient());
        webView.addJavascriptInterface(new AndroidBridge(), "EliteNative");
        webView.setWebViewClient(new WebViewClient() {
            @Override public boolean shouldOverrideUrlLoading(WebView v, WebResourceRequest request) {
                return handleUrl(request.getUrl().toString());
            }
            @Override public boolean shouldOverrideUrlLoading(WebView v, String url) { return handleUrl(url); }
            private boolean handleUrl(String url) {
                if (url.startsWith("file:///android_asset/")) return false;
                try {
                    Uri target = Uri.parse(url);
                    String scheme = target.getScheme();
                    if ("tel".equals(scheme) || "https".equals(scheme)) {
                        startActivity(new Intent(Intent.ACTION_VIEW, target));
                    }
                } catch (Exception ignored) { }
                return true;
            }
        });
        setContentView(webView);
        webView.loadUrl("file:///android_asset/index.html");
    }

    public class AndroidBridge {
        @JavascriptInterface public void call(String number) {
            if (number == null || !number.matches("[6-9][0-9]{9}")) return;
            runOnUiThread(() -> {
                try { startActivity(new Intent(Intent.ACTION_DIAL, Uri.parse("tel:" + number))); }
                catch (Exception ignored) { }
            });
        }
        @JavascriptInterface public void whatsapp(String number) {
            if (number == null || !number.matches("[6-9][0-9]{9}")) return;
            runOnUiThread(() -> {
                try { startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse("https://wa.me/91" + number))); }
                catch (Exception ignored) { }
            });
        }
        @JavascriptInterface public void shareCsv(String data) {
            if (data == null || data.length() > 1500000) return;
            runOnUiThread(() -> {
                try {
                    Intent i = new Intent(Intent.ACTION_SEND);
                    i.setType("text/plain");
                    i.putExtra(Intent.EXTRA_SUBJECT, "Elite Calls backup CSV");
                    i.putExtra(Intent.EXTRA_TEXT, data);
                    startActivity(Intent.createChooser(i, "Export / share CSV backup"));
                } catch (Exception ignored) { }
            });
        }
    }

    @Override protected void onDestroy() {
        if (webView != null) { webView.destroy(); webView = null; }
        super.onDestroy();
    }
}
