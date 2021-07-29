import React, { Component } from 'react'
import { CgSoftwareUpload, CgEditFlipH } from "react-icons/cg";
import { validFileType, leadTeam , newTeam} from '../../helperMethods';
export default class TeamLeaderForm extends Component {
  render() {
        const { Logo } = this.props
        const { CreateAt, GeneralGoal, Message, NumberOfII, SpecificGoal, Vision,TeamName } = this.props.data
        let displayStatus = ""
        let logoPH = ""
        if (leadTeam() === false && newTeam() === false){ displayStatus = "LoginContainer"}
        else displayStatus = "modalContainer";
        if(Logo !== "") logoPH = Logo.name
        else logoPH = "شعار الفريق";
        return (
            <div>
                <div className={displayStatus}>
                    <div className='login-form' >
                        <form onSubmit={this.props.onFormSubmit}>
                            {leadTeam() === false && newTeam() === false?
                                <div className="flex-row">
                                    <label className="lf--label" for="TeamName">
                                        <CgEditFlipH />
                                    </label>
                                    <input id="TeamName"
                                        required
                                        className='lf--input'
                                        placeholder={"اسم الفريق"}
                                        name="TeamName"
                                        type="text"
                                        onChange={this.props.onNameChange}
                                        value={TeamName} />
                                </div>
                                : ""}
                            <div className="flex-row">
                                <label className="lf--label" for="Logo">
                                    <CgSoftwareUpload />
                                </label>
                                <input id="Logo"
                                    //  required
                                    className='lf--input uploadLogo'
                                    name="Logo"
                                    accept={validFileType(Logo)}
                                    type="file"
                                    onChange={this.props.onFileChange}
                                />
                                <label className="imageLabel" for="Logo">{logoPH}</label>
                            </div>
                            <div className="flex-row">
                                <label className="lf--label" for="Vision">
                                    <CgEditFlipH />
                                </label>
                                <input id="Vision"
                                    required
                                    className='lf--input'
                                    placeholder={"الرؤية"}
                                    name="Vision"
                                    type="text"
                                    onChange={this.props.onNameChange}
                                    value={Vision} />
                            </div>
                            <div className="flex-row">
                                <label className="lf--label" for="Message">
                                    <CgEditFlipH />
                                </label>
                                <input id="Message"
                                    required
                                    className='lf--input'
                                    placeholder="الرسالة"
                                    name="Message"
                                    type="text"
                                    onChange={this.props.onNameChange}
                                    value={Message} />
                            </div>
                            <div className="flex-row">
                                <label className="lf--label" for="SpecificGoal">
                                    <CgEditFlipH />
                                </label>
                                <input id="SpecificGoal"
                                    required
                                    className='lf--input'
                                    placeholder="الاهداف التفصيلية"
                                    name="SpecificGoal"
                                    type="text"
                                    onChange={this.props.onNameChange}
                                    value={SpecificGoal} />
                            </div>
                            <div className="flex-row">
                                <label className="lf--label" for="GeneralGoal">
                                    <CgEditFlipH />
                                </label>
                                <input id="GeneralGoal"
                                    required
                                    className='lf--input'
                                    placeholder="الهدف العام"
                                    name="GeneralGoal"
                                    type="text"
                                    onChange={this.props.onNameChange}
                                    value={GeneralGoal} />
                            </div>
                            <div className="flex-row">
                                <label className="lf--label" for="NumberOfII">
                                    <CgEditFlipH />
                                </label>
                                <input id="NumberOfII"
                                    required
                                    className='lf--input'
                                    placeholder="عدد المبادرات المنجزة"
                                    name="NumberOfII"
                                    type="number"
                                    onChange={this.props.onNameChange}
                                    value={NumberOfII} />
                            </div>
                            <div className="flex-row">
                                <label className="lf--label" for="CreateAt">
                                    <CgEditFlipH />
                                </label>
                                <input id="CreateAt"
                                    className='lf--input'
                                    placeholder="تاريخ انشاء الفريق"
                                    name="CreateAt"
                                    type="date"
                                    onChange={this.props.onNameChange}
                                    value={CreateAt.slice(0, 10)} />
                            </div>
                            <input className='lf--submit' type='submit' value='حفض وارسال' onSubmit={this.props.onFormSubmit} onClick={this.props.onFormSubmit} />
                        </form>
                        <input className='lf--submit' type='submit' value='العودة' onClick={this.props.toggleHandler} />
                    </div>
                </div>
            </div>
        )
    }
}
