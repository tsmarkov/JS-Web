import React, { Component } from 'react'

class Catalog extends Component {
    render = () => {
        return (
            <section id="viewCatalog">
                <div class="posts">
                    <article class="post">
                        <div class="col rank">
                            <span>1</span>
                        </div>
                        <div class="col thumbnail">
                            <a href="https://softuni.bg/">
                                <img src="https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAMDAAAAJGY2Mjg3Y2I4LWU1ZTktNDJlNC1iM2M4LTc2MDlhNmVhNThhNQ.png" />
                            </a>
                        </div>
                        <div class="post-content">
                            <div class="title">
                                <a href="https://softuni.bg/">
                                    SoftUni
                            </a>
                            </div>
                            <div class="details">
                                <div class="info">
                                    submitted 1 day ago by Kiril
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
                    </article>

                    <article class="post">
                        <div class="col rank">
                            <span>2</span>
                        </div>
                        <div class="col thumbnail">
                            <a href="https://www.sli.do/">
                                <img src="https://www.sli.do/assets/images/2-step.png" />
                            </a>
                        </div>
                        <div class="post-content">
                            <div class="title">
                                <a href="https://www.sli.do/">
                                    Sli.Do
                            </a>
                            </div>
                            <div class="details">
                                <div class="info">
                                    submitted 3 days ago by Viktor
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
                    </article>

                    <article class="post">
                        <div class="col rank">
                            <span>3</span>
                        </div>
                        <div class="col thumbnail">
                            <a href="https://www.cnbc.com/2017/06/28/progress-buys-mobile-backend-start-up-kinvey-for-49-million.html">
                                <img src="https://pbs.twimg.com/profile_images/464099715865276417/nXvsGPVO.png" />
                            </a>
                        </div>
                        <div class="post-content">
                            <div class="title">
                                <a href="https://www.cnbc.com/2017/06/28/progress-buys-mobile-backend-start-up-kinvey-for-49-million.html">
                                    Progress Software buys Kinvey
                            </a>
                            </div>
                            <div class="details">
                                <div class="info">
                                    submitted 4 hours ago by Nakov
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
                    </article>
                    {/* <!-- TODO: more posts will come here -->   */}
            </div>
            </section>
        )
    }
}

export default Catalog