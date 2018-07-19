import React, { Component } from 'react'

class SubmitForm extends Comment {
    render = () => {
        return (
            <div class="submitArea formContainer">
                <form id="submitForm" class="submitForm">
                    <label>Link URL:</label>
                    <input name="url" value="" type="text" />
                    <label>Link Title:</label>
                    <input name="title" value="" type="text" />
                    <label>Link Thumbnail Image (optional):</label>
                    <input name="image" value="" type="text" />
                    <label>Comment (optional):</label>
                    <textarea name="comment"></textarea>
                    <input id="btnSubmitPost" value="Submit" type="submit" />
                </form>
            </div>
        )
    }
}

export default SubmitForm