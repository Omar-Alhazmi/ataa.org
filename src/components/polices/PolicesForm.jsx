import React, { Component } from "react";
import { CgSoftwareUpload, CgEditFlipH } from "react-icons/cg";
import "../styles/news.css";
import { validFileTypePDF } from "../helperMethods";
export default class PolicesForm extends Component {
    render() {
        const { file, Title } = this.props;
        let filePH = "";
        if (file !== "") filePH = file.name;
        else filePH = "الرجاء رفع الملف";
        return (
            <div className="nwsModalContainer">
                <form onSubmit={this.props.onFormSubmit}>
                    <div className="flex-row">
                        <label className="lf--label" htmlFor="file">
                            <CgSoftwareUpload />
                        </label>
                        <input
                            id="file"
                            //  required
                            className="news-lf--input uploadLogo"
                            name="file"
                            accept={validFileTypePDF(file)}
                            type="file"
                            onChange={this.props.onFileChange}
                        />
                        <label className="fileLabel" htmlFor="file">
                            {filePH}
                        </label>
                    </div>
                    <div className="flex-row">
                        <label className="lf--label" htmlFor="Title">
                            <CgEditFlipH />
                        </label>
                        <input
                            id="Title"
                            required
                            className="news-lf--input"
                            placeholder={"العنوان "}
                            name="Title"
                            type="text"
                            onChange={this.props.onNameChange}
                            value={Title}
                        />
                    </div>
                    <input
                        className="lf--submit"
                        type="submit"
                        value="حفض وارسال"
                        onSubmit={this.props.onFormSubmit}
                        onClick={this.props.onFormSubmit}
                    />
                </form>
                <input
                    className="lf--submit"
                    type="submit"
                    value="العودة"
                    onClick={this.props.hide}
                />
            </div>
        );
    }
}
