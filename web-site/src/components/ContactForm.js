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

      // コンテンツ内容のstate
      content: "",
      hasContentError: false,
    };
  }

  //email内容の表示
  handleEmailCahnge(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === "";

    this.setState({
      email: inputValue,
      hasEmailError: isEmpty,
    });
  }

  // コンテンツ内容の表示
  handleContentChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === "";

    this.setState({
      content: inputValue,
      hasContentError: isEmpty,
    });
  }

  //送信ボタン
  handleSubmit() {
    this.setState({ isSubmitted: true });
  }

  render() {
    let contactForm;
    let emailErrorText;
    let contentErrorText;

    if (this.state.hasEmailError) {
      emailErrorText = (
        <p className="contact-message-error">
          メールアドレスを入力してください
        </p>
      );
    }

    if (this.state.hasContentError) {
      contentErrorText = (
        <p className="contact-message-error">
          お問い合わせ内容を入力してください
        </p>
      );
    }

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
          <textarea
            value={this.state.content}
            onChange={(event) => {
              this.handleContentChange(event);
            }}
          />

          {contentErrorText}

          <input type="submit" value="送信" />
        </form>
      );
    }
    return <div className="contact-form">{contactForm}</div>;
  }
}

export default ContactForm;
