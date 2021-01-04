import React from "react";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      // emailの入力値をstateで管理
      email: "",
      //入力がないときにエラーメッセージの表示
      hasEmailError: false,
    };
  }

  handleSubmit() {
    this.setState({ isSubmitted: true });
  }
  handleEmailCahnge(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === "";

    this.setState({
      email: inputValue,
      hasEmailError: isEmpty,
    });
  }

  render() {
    let emailErrorText;

    if (this.state.hasEmailError) {
      emailErrorText = (
        <p className="contact-message-error">
          メールアドレスを入力してください
        </p>
      );
    }

    let contactForm;

    if (this.state.isSubmitted) {
      contactForm = <div className="contact-submit-message">送信完了</div>;
    } else {
      contactForm = (
        <form
          onSubmit={() => {
            this.handleSubmit();
          }}
        >
          <p>メールアドレス(必須)</p>
          {/* inputのvalue属性でmailを表示 */}
          <input
            value={this.state.email}
            // onChangeイベントの関数でeventを関数として渡し、handleEmailCahnge()を実行
            onChange={(event) => {
              this.handleEmailCahnge(event);
            }}
          />

          {emailErrorText}
          <p>お問い合わせ内容(必須)</p>
          <textarea />

          <input type="submit" value="送信" />
        </form>
      );
    }
    return <div className="contact-form">{contactForm}</div>;
  }
}

export default ContactForm;
