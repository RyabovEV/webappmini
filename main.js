<script src="https://telegram.org/js/telegram-web-app.js"></script>
<script>
    const tg = window.Telegram.WebApp;
    tg.ready();
    alert("Привет, " + tg.initDataUnsafe.user.first_name);
</script>