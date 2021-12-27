<template>
    <div class="login-container">
        <div class="login-main">
            <div class="login-main_lf">
                <div class="line"></div>
                <div class="title">优秀笔记后台</div>
                <div class="en">Real time shared switching platform</div>
            </div>
            <div class="login-main_rg">
                <div class="login-name">登录</div>
                <div class="login-form">
                    <el-form ref="form" :model="loginForm" :rules="rules">
                        <el-form-item prop="username">
                            <el-input class="login-input" placeholder="请输入账号" clearable v-model="loginForm.username">
                                <img slot="prefix" class="input-icon" src="../../assets/username_new.png" alt="" />
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input
                                class="login-input"
                                placeholder="请输入密码"
                                clearable
                                show-password
                                v-model="loginForm.password"
                                @keyup.enter.native="handleLogin"
                            >
                                <img slot="prefix" class="input-icon" src="../../assets/password_new.png" alt="" />
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button :loading="loading" type="primary" round class="login-btn" @click.native.prevent="handleLogin">
                                登录
                            </el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data() {
        return {
            loading: false,
            redirect: undefined,
            otherQuery: {},
            loginForm: {
                username: 'admin',
                password: '123456',
            },
            rules: {
                username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
            },
        }
    },
    watch: {
        $route: {
            handler: function (route) {
                const query = route.query
                if (query) {
                    this.redirect = query.redirect
                    this.otherQuery = this.getOtherQuery(query)
                }
            },
            immediate: true,
        },
    },
    methods: {
        handleLogin() {
            if (!this.loginForm.username || !this.loginForm.password) {
                return
            }
            this.loading = true
            this.$store
                .dispatch('user/login', this.loginForm)
                .then(() => {
                    this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
                    this.loading = false
                })
                .catch(() => {
                    this.loading = false
                })
        },
        getOtherQuery(query) {
            return Object.keys(query).reduce((acc, cur) => {
                if (cur !== 'redirect') {
                    acc[cur] = query[cur]
                }
                return acc
            }, {})
        },
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
            opacity: 0.8;
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
                text-transform: uppercase;
            }
        }
        &_rg {
            width: 484px;
            height: 551px;
            .login-name {
                padding-top: 69px;
                text-align: center;
                font-size: 22px;
                font-weight: bold;
                color: #0599df;
                position: relative;
                z-index: 2;
                &::after {
                    content: '';
                    position: absolute;
                    bottom: 4px;
                    left: 50%;
                    width: 47px;
                    height: 4px;
                    transform: translateX(-50%);
                    background: #0076fe;
                    opacity: 0.2;
                    z-index: 1;
                }
            }
            .login-form {
                margin: 58px 69px 0 64px;
                .input-icon {
                    width: 16px;
                    height: 18px;
                    margin: 17px 0 0 20px;
                }
                .login-btn {
                    margin-top: 10px;
                    width: 351px;
                    height: 54px;
                    background: #039de3;
                    border-radius: 27px;
                    font-size: 18px;
                    font-weight: 500;
                    color: #ffffff;
                }
            }
        }
    }
}

::v-deep {
    .el-input__inner {
        width: 351px;
        height: 54px;
        border-radius: 27px;
        padding-left: 53px;
        font-size: 18px;
        font-weight: 500;
        color: #333;
        margin-bottom: 10px;
        &::placeholder {
            font-size: 15px;
            font-weight: 400;
            color: #b9bed1;
        }
    }
    .el-input__suffix {
        right: 22px;
        transform: translateY(-5px);
    }
    .el-input .el-input__clear {
        font-size: 16px;
    }
    .el-form-item__error {
        font-size: 14px;
        top: 90%;
        left: 0;
    }
}
</style>
