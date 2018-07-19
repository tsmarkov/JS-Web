import React, { Component } from 'react';

class CreateComment extends Component {
    render = () => {
        return (
            <div class="post post-content">
                <form id="commentForm">
                    <label>Comment</label>
                    <textarea name="content" type="text"></textarea>
                    <input type="submit" value="Add Comment" id="btnPostComment" />
                </form>
            </div>
        );
    }
}

export default CreateComment;
