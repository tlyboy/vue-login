<template>
  <div class="login-form">
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item>
        <a-input
          v-decorator="['username', { rules: [{ required: true, message: '请输入你的用户名！' }] }]"
          placeholder="用户名"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0, 0, 0, 0.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="['password', { rules: [{ required: true, message: '请输入你的密码！' }] }]"
          type="password"
          placeholder="密码"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0, 0, 0, 0.25)" />
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
        <router-link to="/forgot" class="login-form-forgot"> 忘记密码 </router-link>
        <a-button type="primary" html-type="submit" class="login-form-button"> 登录 </a-button>
        或者
        <router-link to="/register"> 立即注册！ </router-link>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'TLoginForm',
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'login_form' })
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()

      this.form.validateFields(async (err, values) => {
        if (!err) {
          const { username, password } = values

          let res

          try {
            res = await this.$axios.post('login', {
              username,
              password
            })
          } catch (error) {
            res = {
              data: {
                msg: '暂无服务'
              }
            }
          }

          const { status, msg, token } = res.data

          switch (status) {
            case 0:
              this.$message.error(msg)
              break
            case 1:
              this.$message.success(msg)
              localStorage.setItem('token', token)
              this.$router.push({ name: 'Home' })
              break
            default:
              this.$message.info(msg)
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
}

.login-form-forgot {
  float: right;
}

.login-form-button {
  width: 100%;
}
</style>
