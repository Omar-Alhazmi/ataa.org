import React, { Component } from 'react'
import { CgSoftwareUpload, CgEditFlipH } from "react-icons/cg";
import '../styles/news.css';
import {validFileType} from '../helperMethods';
export default class NewsForm extends Component {
    render() {
    const {image,data}=this.props
    let imagePH = ""
    if(image !== "") imagePH = image.name
    else imagePH = "صورة الخبر";
        return (
            <div className="nwsModalContainer">
                <form onSubmit={this.props.onFormSubmit}>
                    <div className="flex-row">
                        <label className="lf--label" htmlFor="image">
                            <CgSoftwareUpload />
                        </label>
                        <input id="image"
                            //  required
                            className='news-lf--input uploadLogo'
                            name="image"
                            accept={validFileType(image)}
                            type="file"
                            onChange={this.props.onFileChange}
                        />
                        <label className="imageLabel" htmlFor="image">{imagePH}</label>
                    </div>
                    <div className="flex-row">
                        <label className="lf--label" htmlFor="Title">
                            <CgEditFlipH />
                        </label>
                        <input id="Title"
                            required
                            className='news-lf--input'
                            placeholder={"عنوان الخبر"}
                            name="Title"
                            type="text"
                            onChange={this.props.onNameChange}
                            value={data.Title}
                        />
                    </div>
                    <div className="flex-row">
                        <label className="lf--label" htmlFor="Content">
                            <CgEditFlipH />
                        </label>
                        <textarea id="Content"
                            required
                            className='news-lf--input'
                            placeholder={"المحتوى"}
                            name="Content"
                            rows="4" cols="50"
                            onChange={this.props.onNameChange}
                            value={data.Content}
                        />
                    </div>
                    <input className='lf--submit' type='submit' value='حفض وارسال' onSubmit={this.props.onFormSubmit} onClick={this.props.onFormSubmit} />
                </form>
                <input className='lf--submit' type='submit' value='العودة' onClick={this.props.hide} />

            </div>
        )
    }
}
