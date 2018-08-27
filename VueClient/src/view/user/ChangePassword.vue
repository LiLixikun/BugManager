<script>
import { Form } from "ant-design-vue";
import axios from "axios";

const ChangeWordForm = {
  data() {
    return {
      confirmDirty: false,
      autoCompleteResult: [],
      buttonTitle: "获取验证码",
      disable: false,
      timer: null
    };
  },
  mounted() {
    axios.get("http://localhost:8081/index").then()
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue("password")) {
        callback("请输入相同的密码!");
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(["confirm"], { force: true });
      }
      callback();
    },

    getCode() {
      let time = 60;
      let timer = window.setInterval(() => {
        time--;
        if (time <= 0) {
          this.disable = false;
          this.buttonTitle = "获取验证码";
          return;
        }
        this.disable = "disabled";
        this.buttonTitle = time + "S后再发送!";
      }, 1000);
    },
    beforeDestroy() {
      clearInterval(this.timer);
      this.timer = null;
    }
  },

  render() {
    const { getFieldDecorator } = this.form;
    const { autoCompleteResult } = this;

    return (
      <a-form onSubmit={this.handleSubmit} class="register">
        <a-form-item>
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "请输入有效的邮箱!"
              },
              {
                required: true,
                message: "请输入邮箱!"
              }
            ]
          })(
            <a-input
              prefix={
                <a-icon type="mobile" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              placeholder="邮箱/手机号"
            />
          )}
        </a-form-item>

        <a-form-item>
          <a-row gutter={8}>
            <a-col span={16}>
              {getFieldDecorator("captcha", {
                rules: [
                  {
                    required: true,
                    message: "请输入验证码!"
                  }
                ]
              })(
                <a-input
                  prefix={
                    <a-icon
                      type="code-o"
                      style={{ color: "rgba(0,0,0,.25)" }}
                    />
                  }
                  placeholder="请输入验证码!"
                />
              )}
            </a-col>
            <a-col span={8}>
              <a-button
                style={{ width: "100%" }}
                onClick={this.getCode}
                disabled={this.disable}
              >
                {this.buttonTitle}
              </a-button>
            </a-col>
          </a-row>
        </a-form-item>

        <a-form-item>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "请输入密码!"
              },
              {
                validator: this.validateToNextPassword
              }
            ]
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
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "请确认密码!"
              },
              {
                validator: this.compareToFirstPassword
              }
            ]
          })(
            <a-input
              prefix={
                <a-icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              type="password"
              onBlur={this.handleConfirmBlur}
              placeholder="确认密码"
            />
          )}
        </a-form-item>
        <a-form-item>
          <a-button type="primary" htmlType="submit" style={{ width: "100%" }}>
            确定
          </a-button>
          <a-form-item style={{ textAlign: "center" }}>
            想起密码?<router-link to="/user/login">直接登录</router-link>
          </a-form-item>
        </a-form-item>
      </a-form>
    );
  }
};

export default Form.create()(ChangeWordForm);
</script>
<style>
</style>
