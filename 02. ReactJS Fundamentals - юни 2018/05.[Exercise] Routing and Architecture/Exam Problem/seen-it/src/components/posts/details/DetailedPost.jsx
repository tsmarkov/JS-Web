import React, { Component } from 'react';

class DetailedPost extends Component {
    render = () => {
        return (
            <div class="post">
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
                        <p>Very helpful and complete info. Even includes a detailed tutorial.</p>
                        <div class="info">
                            submitted 5 days ago by pesho
                        </div>
                        <div class="controls">
                            <ul>
                                <li class="action"><a class="editLink" href="#">edit</a></li>
                                <li class="action"><a class="deleteLink" href="#">delete</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div class="clear"></div>
            </div>
        );
    }
}

export default DetailedPost;
