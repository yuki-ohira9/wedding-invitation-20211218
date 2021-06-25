import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import User from './User';
import '../css/Rsvp.css'

class Rsvp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAttend: User.isAttend(),
            name: User.userName() + ' 様',
            email: User.userEmail(),
            address: User.address() ?? '',
            tel: User.tel() ?? '',
            hasAllergy: User.hasAllergy(),
            allergyDetail: User.allergyDetail() ?? '',
            message: User.message() ?? '',
            userMessage: '',
            errorMessage: '',
        };
    }

    click = async () => {
        this.setState({userMessage: ""})
        this.setState({errorMessage: ""})
        await axios.put(`/api/invitations/${User.userId()}`, {
            is_attend: this.state.isAttend,
            email: this.state.email,
            address: this.state.address,
            tel: this.state.tel,
            has_allergy: this.state.hasAllergy,
            allergy_detail: this.state.allergyDetail,
            message: this.state.message
        }).then(res => {
            if (res.data.result == true) {
                User.set('userEmail', this.state.email);
                User.set('isAttend', this.state.isAttend);
                User.set('address', this.state.address);
                User.set('tel', this.state.tel);
                User.set('hasAllergy', this.state.hasAllergy);
                User.set('allergyDetail', this.state.allergyDetail);
                User.set('message', this.state.message);
                this.setState({ userMessage: '送信が完了しました' });
            } else {
                this.setState({ errorMessage: '送信に失敗しました' });
            }
        }).catch(err => {
          console.error(err);
          this.setState({ errorMessage: '送信に失敗しました' });
        });
    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    render() {
        return (
            <div className="wrapper">
                <div className="rsvp__main">
                    <div className="rsvp__description font_gray">
                        <div className="rsvp__description_block">
                            お問い合わせ、ご要望等がございましたら、お気軽にお問い合わせください。<br/>
                        </div>
                        <div className="rsvp__form_block">
                            <Form>
                                {this.state.userMessage && (
                                    <Alert variant="success">{this.state.userMessage}</Alert>
                                )}
                                {this.state.errorMessage && (
                                    <Alert variant="danger">{this.state.errorMessage}</Alert>
                                )}
                                <Form.Group>
                                    <Form.Label className="rsvp__form_label required">どちらかを選択してください</Form.Label><br/>
                                    <Form.Check
                                        required
                                        inline
                                        label="ご出席"
                                        name="is_attend"
                                        type="radio"
                                        id="attend"
                                        checked={this.state.isAttend !== null && this.state.isAttend === "1"}
                                        onChange={() => this.setState({isAttend: "1"})}
                                    />
                                    <Form.Check
                                        required
                                        inline
                                        label="ご欠席"
                                        name="is_attend"
                                        type="radio"
                                        id="absent"
                                        checked={this.state.isAttend !== null && this.state.isAttend === "0"}
                                        onChange={() => this.setState({isAttend: "0"})}
                                    />
                                </Form.Group>
                                <Form.Group className="cp_iptxt">
                                    <Form.Label className="rsvp__form_label">ご芳名</Form.Label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={this.state.name}
                                        className="ef"
                                        disabled="disabled"
                                        onChange={this.handleChange}
                                        autoComplete="off"
                                    />
                                    <span className="focus_line"></span>
                                </Form.Group>
                                <Form.Group className="cp_iptxt">
                                    <Form.Label className="rsvp__form_label required">メールアドレス</Form.Label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="ef"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        autoComplete="off"
                                    />
                                    <span className="focus_line"></span>
                                </Form.Group>
                                <Form.Group className="cp_iptxt">
                                    <Form.Label className="rsvp__form_label required">ご住所</Form.Label>
                                    <input
                                        id="address"
                                        className="ef"
                                        required
                                        type="text"
                                        value={this.state.address}
                                        onChange={this.handleChange}
                                        autoComplete="off"
                                    />
                                    <span className="focus_line"></span>
                                </Form.Group>
                                <Form.Group className="cp_iptxt">
                                    <Form.Label className="rsvp__form_label required">電話番号</Form.Label>
                                    <input
                                        id="tel"
                                        className="ef"
                                        required
                                        type="text"
                                        value={this.state.tel}
                                        onChange={this.handleChange}
                                        autoComplete="off"
                                    />
                                    <span className="focus_line"></span>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="rsvp__form_label required">アレルギー</Form.Label><br/>
                                    <Form.Check
                                        required
                                        inline
                                        label="あり"
                                        name="has_allergy"
                                        type="radio"
                                        id="has_allergy"
                                        checked={this.state.hasAllergy !== null && this.state.hasAllergy === "1"}
                                        onChange={() => this.setState({hasAllergy: "1"})}
                                    />
                                    <Form.Check
                                        required
                                        inline
                                        label="なし"
                                        name="has_allergy"
                                        type="radio"
                                        id="has_not_allergy"
                                        checked={this.state.hasAllergy !== null && this.state.hasAllergy === "0"}
                                        onChange={() => this.setState({hasAllergy: "0"})}
                                    />
                                </Form.Group>
                                <Form.Group className="cp_iptxt">
                                    <Form.Label className="rsvp__form_label">アレルギーで「あり」を選択した方はお聞かせくださいませ</Form.Label>
                                    <input
                                        id="allergyDetail"
                                        className="ef"
                                        type="text"
                                        value={this.state.allergyDetail}
                                        onChange={this.handleChange}
                                        autoComplete="off"
                                    />
                                    <span className="focus_line"></span>
                                </Form.Group>
                                <Form.Group className="cp_iptxt">
                                    <Form.Label className="rsvp__form_label">メッセージ</Form.Label>
                                    <textarea
                                        id="message"
                                        className="ef"
                                        rows={3}
                                        value={this.state.message}
                                        onChange={this.handleChange}
                                        autoComplete="off"
                                    />
                                    <span className="focus_line"></span>
                                </Form.Group>
                                <Button variant="light" onClick={this.click}>
                                    Send
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Rsvp;