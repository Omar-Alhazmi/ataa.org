import React, { Component } from 'react'

export default class TeamLeaderForm extends Component {

      
    validFileType = (file) => {
        const fileTypes = [
            "image/apng",
            "image/bmp",
            "image/gif",
            "image/jpeg",
            "image/pjpeg",
            "image/png",
            "image/svg+xml",
            "image/tiff",
            "image/webp",
            "image/x-icon"
        ];
        return fileTypes.includes(file.type);
    }
    render() {
        const {Logo, Leader, show } = this.props
        const { CreateAt, GeneralGoal, Message, NumberOfII, SpecificGoal, Vision } =this.props.data
        return (
            <div>
                   <div className="modalContainer">
                        <form className='login-form' onSubmit={this.props.onFormSubmit}>
                        <div className="flex-row">
                                <label className="lf--label" for="Logo">
                                    <svg x="0px" y="0px" width="12px" height="13px">
                                    </svg>
                                </label>
                                <input id="Logo"
                                    // required
                                    className='lf--input'
                                    // placeholder={Logo}
                                     name="Logo"
                                    accept={this.validFileType(Logo)}
                                    type="file"
                                    onChange={this.props.onFileChange}
                             // value={Logo}
                              />
                            </div>
                            <div className="flex-row">
                                <label className="lf--label" for="Vision">
                                    <svg x="0px" y="0px" width="12px" height="13px">
                                    </svg>
                                </label>
                                <input id="Vision"
                                    // required
                                    className='lf--input'
                                    // placeholder={Vision}
                                    name="Vision"
                                    type="text"
                                    onChange={this.props.onNameChange}
                                    value={Vision} />
                            </div>
                            <div className="flex-row">
                                <label className="lf--label" for="Message">
                                    <svg x="0px" y="0px" width="12px" height="13px">
                                    </svg>
                                </label>
                                <input id="Message"
                                    // required
                                    className='lf--input'
                                    // placeholder={Message}
                                    name="Message"
                                    type="text"
                                    onChange={this.props.onNameChange}
                                    value={Message} />
                            </div>
                            <div className="flex-row">
                                <label className="lf--label" for="SpecificGoal">
                                    <svg x="0px" y="0px" width="12px" height="13px">
                                    </svg>
                                </label>
                                <input id="SpecificGoal"
                                    // required
                                    className='lf--input'
                                    // placeholder={SpecificGoal}
                                    name="SpecificGoal"
                                    type="text"
                                    onChange={this.props.onNameChange}
                                    value={SpecificGoal} />
                            </div>
                            <div className="flex-row">
                                <label className="lf--label" for="GeneralGoal">
                                    <svg x="0px" y="0px" width="12px" height="13px">
                                    </svg>
                                </label>
                                <input id="GeneralGoal"
                                    // required
                                    className='lf--input'
                                    // placeholder={GeneralGoal}
                                    name="GeneralGoal"
                                    type="text"
                                    onChange={this.props.onNameChange}
                                    value={GeneralGoal} />
                            </div>
                            <div className="flex-row">
                                <label className="lf--label" for="NumberOfII">
                                    <svg x="0px" y="0px" width="12px" height="13px">
                                    </svg>
                                </label>
                                <input id="NumberOfII"
                                    // required
                                    className='lf--input'
                                    // placeholder={NumberOfII}
                                    name="NumberOfII"
                                    type="number"
                                    onChange={this.props.onNameChange}
                                    value={NumberOfII} />
                            </div>
                            <div className="flex-row">
                                <label className="lf--label" for="CreateAt">
                                    <svg x="0px" y="0px" width="12px" height="13px">
                                    </svg>
                                </label>
                                <input id="CreateAt"
                                    // required
                                    className='lf--input'
                                    // placeholder={CreateAt}
                                    name="CreateAt"
                                    type="date"
                                    onChange={this.props.onNameChange}
                                    value={CreateAt} />
                            </div>
                            <input className='lf--submit' type='submit' value='تسجيل الدخول' onSubmit={this.props.onFormSubmit} onClick={this.props.onFormSubmit + this.props.toggleHandler}/>
                        </form>
                    </div>
            </div>
        )
    }
}
