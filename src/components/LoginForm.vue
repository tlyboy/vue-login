<template>
  <div class="login-form">
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item>
        <a-input
          v-decorator="[
            'userName',
            { rules: [{ required: true, message: '请输入你的用户名！' }] }
          ]"
          placeholder="用户名"
        >
          <a-icon
            slot="prefix"
            type="user"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            { rules: [{ required: true, message: '请输入你的密码！' }] }
          ]"
          type="password"
          placeholder="密码"
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-checkbox
          v-decorator="[
            'remember',
            {
              valuePropName: 'checked',
              initialValue: true
            }
          ]"
        >
          记住我
        </a-checkbox>
        <router-link to="/forgot" class="login-form-forgot">
          忘记密码
        </router-link>
        <a-button type="primary" html-type="submit" class="login-form-button">
          登录
        </a-button>
        或者
        <router-link to="/register"> 立即注册！ </router-link>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields(async (err, values) => {
        if (!err) {
          const { userName, password } = values

          const { data: res } = await this.$http.post('/login', {
            userName,
            password
          })

          switch (res.status) {
            case 1:
              this.$message.success(res.msg)
              localStorage.setItem('token', res.token)
              this.$router.push('/')
              break
            case 0:
              this.$message.error(res.msg)
              localStorage.removeItem('token')
              break
            case -1:
              this.$message.warning(res.msg)
              localStorage.removeItem('token')
              break
            default:
              break
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-form {
  padding: 24px 24px 0 24px;
  max-width: 300px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);

  .login-form-forgot {
    float: right;
  }

  .login-form-button {
    width: 100%;
  }
}
</style>
