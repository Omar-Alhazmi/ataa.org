import React, { Component } from 'react'
import { CgSoftwareUpload, CgEditFlipH } from "react-icons/cg";
import {validFileType} from '../../helperMethods';
export default class TeamLeaderForm extends Component {

    render() {
        const { Logo, Leader, show } = this.props
        const { CreateAt, GeneralGoal, Message, NumberOfII, SpecificGoal, Vision } = this.props.data
        return (
            <div>
                <div className="modalContainer">
                    <div className='login-form' >
                    <form onSubmit={this.props.onFormSubmit}>
                        <div className="flex-row">
                            <label className="lf--label" for="Logo">
                                <CgSoftwareUpload />
                            </label> 
                            <input id="Logo"
                                //  required
                                className='lf--input'
                                name="Logo"
                                accept={validFileType(Logo)}
                                type="file"
                                onChange={this.props.onFileChange}
                            />
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
                    <input className='lf--submit' type='submit' value='العودة'  onClick={this.props.toggleHandler}/>
                    </div>
                </div>
            </div>
        )
    }
}
