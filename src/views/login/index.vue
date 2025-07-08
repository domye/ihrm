<template>
  <div class="login-container">
    <div class="logo" />
    <div class="form">
      <h1>登录</h1>
      <el-card shadow="never" class="login-card">
        <!--登录表单-->
        <el-form ref="form" :model="loginForm" :rules="loginRules">
          <el-form-item prop="username">
            <el-input
              placeholder="请输入用户名"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              show-password
              placeholder="请输入密码"
              v-model="loginForm.password"
            ></el-input>
          </el-form-item>
          <el-form-item prop="isagree">
            <el-checkbox v-model="loginForm.isagree"
              >用户平台使用协议</el-checkbox
            >
          </el-form-item>
          <el-form-item>
            <el-button
              style="width: 350px"
              type="primary"
              size="large"
              round
              @click="login"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script>
import { login } from "@/api/user";

export default {
  name: "Login",

  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        isagree: false,
      },
      loginRules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
          {
            pattern: /^1[3-9]\d{9}$/,
            message: "请输入正确的手机号",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            min: 6,
            max: 16,
            message: "密码长度在6到16位之间",
            trigger: "blur",
          },
        ],
        isagree: [
          {
            validator: (rule, value, callback) => {
              value
                ? callback()
                : callback(new Error("请阅读用户平台使用协议"));
            },
            trigger: "change",
          },
        ],
      },
    };
  },

  methods: {
    login() {
      this.$refs.form.validate((isok) => {
        if (isok) {
          login(this.loginForm).then((res) => {
            if (res.code === 200) {
              this.$message.success("登录成功");
              this.$router.push("/home");
            } else {
              this.$message.error(res.message);
            }
          });
        }
      });
    },
  },
};
</script>
<style lang="scss">
.login-container {
  display: flex;
  align-items: stretch;
  height: 100vh;
  .logo {
    flex: 3;
    background: rgba(38, 72, 176) url(../../assets/common/login_back.png)
      no-repeat center / cover;
    border-top-right-radius: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 0 100px;
    .icon {
      background: url(../../assets/common/logo.png) no-repeat 70px center /
        contain;
      width: 300px;
      height: 50px;
      margin-bottom: 50px;
    }
    p {
      color: #fff;
      font-size: 18px;
      margin-top: 20px;
      width: 300px;
      text-align: center;
    }
  }
  .form {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 176px;
    .el-card {
      border: none;
      padding: 0;
    }
    h1 {
      padding-left: 20px;
      font-size: 24px;
    }
    .el-input {
      width: 350px;
      height: 44px;
      .el-input__inner {
        background: #f4f5fb;
      }
    }
    .el-checkbox {
      color: #606266;
    }
  }
}
</style>
