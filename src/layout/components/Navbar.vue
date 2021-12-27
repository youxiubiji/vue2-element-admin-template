<template>
    <div class="navbar">
        <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

        <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />

        <div class="right-menu">
            <div class="right-menu-lf">
                <img src="../../assets/avatar.png" alt="" />
                <span>你好，管理员</span>
            </div>
            <div class="right-menu-line"></div>
            <div class="right-menu-rg" @click="logout">
                <svg-icon class="icon" icon-class="logout" />
                <span>退出</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
    components: {
        Breadcrumb,
        Hamburger,
    },
    computed: {
        ...mapGetters(['sidebar', 'avatar']),
    },
    methods: {
        toggleSideBar() {
            this.$store.dispatch('app/toggleSideBar')
        },
        async logout() {
            await this.$store.dispatch('user/logout')
            this.$router.push(`/login?redirect=${this.$route.fullPath}`)
        },
    },
}
</script>

<style lang="scss" scoped>
.navbar {
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

    .hamburger-container {
        line-height: 46px;
        height: 100%;
        float: left;
        cursor: pointer;
        transition: background 0.3s;
        -webkit-tap-highlight-color: transparent;

        &:hover {
            background: rgba(0, 0, 0, 0.025);
        }
    }

    .breadcrumb-container {
        float: left;
    }

    .errLog-container {
        display: inline-block;
        vertical-align: top;
    }

    .right-menu {
        float: right;
        height: 100%;
        display: flex;
        align-items: center;
        .right-menu-lf {
            display: flex;
            align-items: center;
            img {
                width: 28px;
                height: 28px;
            }
            span {
                font-size: 14px;
                font-weight: 400;
                color: #666666;
                padding: 0 14px 0 7px;
            }
        }
        .right-menu-line {
            width: 1px;
            height: 16px;
            background: #d8d8d8;
        }
        .right-menu-rg {
            display: flex;
            align-items: center;
            padding: 0 28px 0 14px;
            cursor: pointer;
            .icon {
                color: #649cee;
            }
            span {
                padding-left: 7px;
                font-size: 16px;
                font-weight: 400;
                color: #649cee;
            }
        }
    }
}
</style>
