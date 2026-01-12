<template>
    <div class="sso-buttons-wrapper">
        <div class="google-button-wrapper">
            <button class="google-signin-btn" @click="continueWithGoogle">
                <img :src="googleLogo" class="google-icon" alt="google logo">
                <span class="btn-text">Continue with Google</span></button>
        </div>
        <div class="google-button-wrapper">
            <button @click="loginWithMicrosoft" class="google-signin-btn">
                <img :src="microsoftLogo" class="google-icon" alt="microsoft logo">
                <span class="btn-text">Continue with Microsoft</span>
            </button>
        </div>
    </div>
</template>

<script>
import googleLogo from '@/assets/files/images/svgs/google-logo.svg'
import microsoftLogo from '@/assets/files/images/svgs/microsoft-logo.svg'
export default {
    data() {
        return {
            googleLogo: googleLogo,
            microsoftLogo: microsoftLogo,
        }
    },
    methods: {
        continueWithGoogle() {
            const redirect = encodeURIComponent(this.$route.fullPath || '/');

            const w = 500;
            const h = 650;
            const left = (window.innerWidth - w) / 2;
            const top = (window.innerHeight - h) / 2;

            const authUrl = `/google?redirect=${redirect}`;

            const popup = window.open(
                authUrl,
                'googleLoginPopup',
                `width=${w},height=${h},top=${top},left=${left},resizable=yes,scrollbars=yes,status=yes`
            );

            // Optional: if popup blocked, fallback to normal redirect
            if (!popup) {
                window.location.href = authUrl;
            }
        },
        loginWithMicrosoft() {
            const popup = window.open(
                `${import.meta.env.VITE_APP}/microsoft`,
                'Microsoft Login',
                'width=500,height=600'
            );
        },
    },
    mounted() {
        window.addEventListener('message', (event) => {
            // IMPORTANT: verify origin
            if (event.origin !== window.location.origin) return;

            if (event.data?.type === 'google-auth-success') {
                const redirect = event.data.redirect || '/';
                window.location.assign(redirect);
            }
        });
    }
}
</script>

<style scoped>
.sso-buttons-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
}

.google-button-wrapper {
    width: 100%;
    display: flex;
}

.google-signin-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 10px 20px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.google-signin-btn:hover {
    background: #f7f8f8;
    border-color: #c6c7ca;
}

.google-signin-btn:active {
    background: #eee;
    border-color: #c6c7ca;
}

.google-signin-btn:focus-visible {
    outline: 2px solid #4285f4;
    outline-offset: 2px;
}

.google-icon {
    width: 20px;
    height: 20px;
    margin: 0;
}

.btn-text {
    white-space: nowrap;
    margin: 0;
}
</style>