import React, { Component } from 'react'

class Post extends Component {
    render = () => {
        return (
            <article class="post">
                <div class="col rank">
                    <span>1</span>
                </div>
                <div class="col thumbnail">
                    <a href="http://sammyjs.org/docs/api/0.7.4/all#Sammy.RenderContext-load">
                        <img src="src/RuditoFreshStep.jpg" />
                    </a>
                </div>
                <div class="post-content">
                    <div class="title">
                        <a href="http://sammyjs.org/docs/api/0.7.4/all#Sammy.RenderContext-load">
                            Sammy Docs
                            </a>
                    </div>
                    <div class="details">
                        <div class="info">
                            submitted 5 days ago by pesho
                            </div>
                        <div class="controls">
                            <ul>
                                <li class="action"><a class="commentsLink" href="#">comments</a></li>
                                <li class="action"><a class="editLink" href="#">edit</a></li>
                                <li class="action"><a class="deleteLink" href="#">delete</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div class="clear"></div>
            </article>
        )
    }
}

export default Post