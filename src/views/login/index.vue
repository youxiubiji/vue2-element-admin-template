<template>
    <div class="login-container">
        <div class="login-main">
            <div class="login-main_lf">
                <div class="line"></div>
                <div class="title">实时共享交换平台</div>
                <div class="en">Real time shared switching platform</div>
            </div>
            <div class="login-main_rg"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data() {
        return {}
    },
}
</script>

<style lang="scss" scoped>
.login-container {
    width: 100%;
    height: 100vh;
    background-image: url('../../assets/login_bg_new.png');
    // background: linear-gradient(135deg, #3B217E, #049CE2);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    .login-main {
        width: 919px;
        height: 551px;
        background: #ffffff;
        border-radius: 15px;
        display: flex;
        &_lf {
            width: 436px;
            height: 551px;
            background: linear-gradient(-40deg, #24c7fc, #0349fa);
            border-radius: 15px 0px 0px 15px;
            .line {
                margin: 44px 0 0 55px;
                width: 29px;
                height: 4px;
                background: #ffffff;
            }
            .title {
                margin: 17px 0 0 50px;
                font-size: 31px;
                font-weight: bold;
                color: #ffffff;
            }
            .en {
                margin: 0 0 0 51px;
                font-size: 16px;
                font-weight: 400;
                color: #ffffff;
            }
        }
        &_rg {
            width: 484px;
            height: 551px;
        }
    }
}
</style>
