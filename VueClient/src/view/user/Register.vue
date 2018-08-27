<script>
import { Form } from "ant-design-vue";
import axios from "axios";
const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake"
          }
        ]
      }
    ]
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men"
          }
        ]
      }
    ]
  }
];

const RegistrationForm = {
  data() {
    return {
      confirmDirty: false,
      autoCompleteResult: []
    };
  },
  mounted() {},
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          axios.post("http://localhost:3000/register", values).then(data => {
            console.log(data);
          });
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

    editCaptcha() {
      console.log("---------");
      this.$refs.imgYzm.src =
        "http://localhost:3000/captcha?d=" + Math.random();
    }
  },

  render() {
    const { getFieldDecorator } = this.form;
    const { autoCompleteResult } = this;

    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "86"
    })(
      <a-select style={{ width: "70px" }}>
        <a-select-option value="86">+86</a-select-option>
        <a-select-option value="87">+87</a-select-option>
      </a-select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <a-select-option key={website}>{website}</a-select-option>
    ));

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
                <a-icon type="idcard" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              placeholder="邮箱"
            />
          )}
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
          {getFieldDecorator("nickname", {
            rules: [
              {
                required: true,
                message: "请输入你的昵称!",
                whitespace: true
              }
            ]
          })(
            <a-input
              prefix={
                <a-icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              placeholder="昵称"
            />
          )}
        </a-form-item>

        <a-form-item>
          {getFieldDecorator("phone", {
            rules: [
              {
                required: true,
                message: "请输入有效的手机号!"
              }
              //   {
              //     pattern: /^1[34578]d{9}$/,
              //     message: "请输入有效的手机号码"
              //   }
            ]
          })(
            <a-input addonBefore={prefixSelector} style={{ width: "100%" }} />
          )}
        </a-form-item>

        <a-form-item>
          <a-row gutter={8}>
            <a-col span={12}>
              {getFieldDecorator("captcha", {
                rules: [
                  {
                    required: true,
                    message: "请输入验证码!"
                  }
                ]
              })(<a-input />)}
            </a-col>
            <a-col span={12}>
              <img
                onClick={this.editCaptcha}
                src="http://localhost:3000/captcha"
                ref="imgYzm"
              />
            </a-col>
          </a-row>
        </a-form-item>

        <a-form-item>
          <a-button type="primary" htmlType="submit" style={{ width: "100%" }}>
            注册
          </a-button>
          <a-form-item style={{ textAlign: "center" }}>
            已有账户?<router-link to="/user/login">立即登录</router-link>
          </a-form-item>
        </a-form-item>
      </a-form>
    );
  }
};

export default Form.create()(RegistrationForm);
</script>
<style>
</style>
