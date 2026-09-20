# Jurnal Trading Telegram Mini App (Vercel Ready)

Project ini siap di-deploy secara instant ke Vercel tanpa perlu server fisik atau komputer menyala 24/7.

## Cara Deploy Instant di Vercel:

1. **Upload ke GitHub / Vercel Import:**
   - Ekstrak file zip ini.
   - Upload seluruh file ke repository GitHub baru.
   - Buka [Vercel](https://vercel.com/new), pilih repository tersebut lalu klik **Deploy**.

2. **Set Environment Variable di Vercel:**
   - Masuk ke dashboard project Vercel kamu > **Settings** > **Environment Variables**.
   - Tambahkan 2 variable berikut:
     * `TELEGRAM_BOT_TOKEN`: Token bot dari `@BotFather`
     * `WEBAPP_URL`: URL Vercel kamu (misal: `https://nama-project-kamu.vercel.app`)
   - Klik **Redeploy** di tab Deployments Vercel.

3. **Set Webhook Telegram (Sekali saja):**
   Akses link berikut di browser (ganti `<TOKEN_BOT>` dan `<URL_VERCEL>`):
   `https://api.telegram.org/bot<TOKEN_BOT>/setWebhook?url=https://<URL_VERCEL>/api/bot`

4. **Uji Coba:**
   Buka Telegram Bot kamu, ketik `/start`, lalu klik **📊 Buka Jurnal Trading**.
