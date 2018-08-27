
<script>
import { Form } from "ant-design-vue";
import { Login } from "../../api/user";
const LoginForm = {
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          Login(values)
            .then(res => console.log(res))
            .catch();
        }
      });
    }
  },

  render() {
    const { getFieldDecorator } = this.form;
    return (
      <a-form
        id="components-form-demo-normal-login"
        onSubmit={this.handleSubmit}
        class="login"
      >
        <a-form-item>
          {getFieldDecorator("name", {
            rules: [{ required: true, message: "请输入你的账号!" }]
          })(
            <a-input
              prefix={
                <a-icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              placeholder="用户名"
            />
          )}
        </a-form-item>
        <a-form-item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "请输入你的密码!" }]
          })(
            <a-input
              prefix={
                <a-icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              type="password"
              placeholder="密码"
            />
          )}
        </a-form-item>

        <a-form-item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<a-checkbox>记住密码</a-checkbox>)}
          <router-link class="login-form-forgot" to="/user/forgetPassword">
            忘记密码?
          </router-link>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" htmlType="submit" class="login-form-button">
            登陆
          </a-button>
        </a-form-item>
        <a-form-item style={{ textAlign: "center" }}>
          还没有账户?<router-link to="/user/register">立即注册</router-link>
        </a-form-item>
      </a-form>
    );
  }
};

export default Form.create()(LoginForm);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.login .login-form-forgot {
  float: right;
}
.login .login-form-button {
  width: 100%;
}
</style>
