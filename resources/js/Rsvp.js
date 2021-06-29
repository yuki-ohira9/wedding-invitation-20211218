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
                this.setState({ errorMessage: 'DBの保存に失敗しました' });
            }
        }).catch(err => {
          console.error(err);
          this.setState({ errorMessage: '必須項目を入力してください' });
        });
    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    /**
     * @param {String} isAttend 
     * @param {String} id
     */
    changeIsAttend = (isAttend, id) => {
        this.setState({isAttend: isAttend});
        if ('attend' === id) { // 出席がクリックされた場合
            $('#attend').parent().removeClass('cancel_line');
            $('#absent').parent().addClass('cancel_line');
        } else { // 欠席がクリックされた場合
            $('#absent').parent().removeClass('cancel_line');
            $('#attend').parent().addClass('cancel_line');
        }
    }

    /**
     * @param {String} isAttend 
     * @param {String} id
     */
     changeHasAllergy = (hasAllergy, id) => {
        this.setState({hasAllergy: hasAllergy});
        if ('has_allergy' === id) { // 出席がクリックされた場合
            $('#has_allergy').parent().removeClass('cancel_line');
            $('#has_not_allergy').parent().addClass('cancel_line');
        } else { // 欠席がクリックされた場合
            $('#has_not_allergy').parent().removeClass('cancel_line');
            $('#has_allergy').parent().addClass('cancel_line');
        }
    }

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
                                        checked={this.state.isAttend === '1'}
                                        onChange={() => this.changeIsAttend('1', 'attend')}
                                        className={'0' === this.state.isAttend ? 'cancel_line' : ''}
                                    />
                                    <Form.Check
                                        required
                                        inline
                                        label="ご欠席"
                                        name="is_attend"
                                        type="radio"
                                        id="absent"
                                        checked={this.state.isAttend === '0'}
                                        onChange={() => this.changeIsAttend('0', 'absent')}
                                        className={'1' === this.state.isAttend ? 'cancel_line' : ''}
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
                                        onChange={() => this.changeHasAllergy('1', 'has_allergy')}
                                        className={'0' === this.state.hasAllergy ? 'cancel_line' : ''}
                                    />
                                    <Form.Check
                                        required
                                        inline
                                        label="なし"
                                        name="has_allergy"
                                        type="radio"
                                        id="has_not_allergy"
                                        checked={this.state.hasAllergy !== null && this.state.hasAllergy === "0"}
                                        onChange={() => this.changeHasAllergy('0', 'has_not_allergy')}
                                        className={'1' === this.state.hasAllergy ? 'cancel_line' : ''}
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