import React, { Component } from 'react';

class EditForm extends Component {
    render = () => {
        return (
            <div class="submitArea formContainer">
                <form id="editPostForm" class="submitForm">
                    <label>Link URL:</label>
                    <input name="url" type="text"
                        value="https://www.cnbc.com/2017/06/28/progress-buys-mobile-backend-start-up-kinvey-for-49-million.html" />
                    <label>Link Title:</label>
                    <input name="title" type="text" value="Progress Software buys Kinvey" />
                    <label>Link Thumbnail Image (optional):</label>
                    <input name="image" type="text"
                        value="https://pbs.twimg.com/profile_images/464099715865276417/nXvsGPVO.png" />
                    <label>Comment (optional):</label>
                    <textarea name="description">No desc</textarea>
                    <input id="btnEditPost" type="submit" value="Edit Post" />
                </form>
            </div>
        );
    }
}

export default EditForm;
