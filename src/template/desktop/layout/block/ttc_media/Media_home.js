import React, { Component } from 'react';
import {connect} from "react-redux";
import * as action from "../../../../../actions/ActionHome";
import axios from 'axios';

const TtcHelper = require(`./../../../../../common/TtcHelper`);

class Media_home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }

    componentWillMount() {
        const script = document.createElement("script");
        script.src = '//player.tuoitre.vn/player/static/playerInit.js';
        script.async = true;
        document.body.appendChild(script);

        this.props.onLoadMedia()
    };

    listMedia() {
        if (this.props.media) {
            return this.props.media.map((object, index) => {
                return (
                    <div className="col-sm-3" key={index}>
                        <article className="art-video-top"><a className="thumb" href="/ttc/video/20190521/the-greatest-showman-never-enough-bai-hat-cham-toi-trai-tim-nguoi-nghe/512.html" title=""><img
                            src={object.thumb_link}/><span className="tit time">10:45</span></a>
                            <h3><a href="#">{object.title}</a></h3>
                        </article>
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div className="block-video">
                <h2 className="title">
                    <i className="icon icon-title-video"/>
                    <div className="inner-title">
                        <h2><a href="#" title="">Videos</a></h2>
                        <ul className="list-cat">
                            <li><a href="#" title="">Cười xối xả</a></li>
                            <li><a href="#" title="">TV show</a></li>
                            <li><a href="#" title="">Show cười</a></li>
                        </ul>
                    </div>
                </h2>
                <article className="art-media">
                    <div className="inner-media">
                        <div className="video-wrap">
                            <div className="video">
                                <div style={{backgroundColor: '#f6f6f6'}} className="media-content">
                                    <div className="tt-vplayer-content">
                                        <video id="ttplayer_8"
                                               className="tt-vplayer video-js tt-vplayer-visibility"
                                               style={{ width: '100%' }}
                                               poster="http://static.zyz.local/ttc/i/s1280/2019/04/25/anh-gai-xinh-hd-1556156997-16x9.jpg"
                                               data-vid="https://static.tuoitrenews.vn/ttnew/r/2018/08/09/sand-boarding-1533785186.mp4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="des">
                        <h1>Khởi tố hai người đưa phụ nữ mang thai vượt biên bán con </h1>
                        <ul className="list-tool">
                            <li><a href="#" title="">Thời sự</a></li>
                            <li><a href="#" title="">Nguyễn Quang</a></li>
                        </ul>
                        <p> TTC - Tối 21-2, 542 doanh nghiệp đã được trao chứng nhận hàng Việt Nam chất lượng
                            cao (HVNCLC) 2019. Trong bối cảnh mới, 42 doanh nghiệp đã được trao chứng nhận hàng
                            Việt Nam chất lượng cao (HVNCLC) 2019. Trong bối cảnh mới. </p>
                        <div className="tag"><a href="#" title="">cố thủ tướng</a> <a href="#" title="">Phan Văn
                            Khải</a></div>
                        <ul className="list-social-1 list-cm">
                            <li>
                                <iframe src="iframe/like_new-18.html"
                                        style={{width: '59px', height: '31px'}}/>
                            </li>
                            <li className="outer-share">
                                <i className="icon icon-share" aria-hidden="true"/> 100
                                <div className="block-share">
                                    <h5>Chia sẻ trên</h5>
                                    <a className="facebook" href="#" title=""><i
                                        className="fa fa-facebook-official" aria-hidden="true"/> Facebook</a>
                                    <a className="facebookmes" href="#" title=""><i
                                        className="icon-messenger"/> Facebook messenger</a>
                                </div>
                            </li>
                            <li className="text-cm">
                                <textarea placeholder="Viết bình luận"/>
                            </li>
                        </ul>
                        <div className="s-comment">
                            <div className="inner">
                                <a className="thumbs" href="#"><img src={TtcHelper.imgUrl('user.jpg')} alt=""/></a>
                                <div className="des">
                                    <div className="cmt-content"><span><strong>Văn Quân</strong></span> The
                                        typhoon is forecast to weaken into a tropical depression depression ...
                                        <div className="tool-like">
                                                    <span className="like"><i className="fa fa-heart-o"
                                                                              aria-hidden="true"/> 245</span> <span
                                            className="reply"> Trả lời</span> <span className="count">Xem tất cả bình luận</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <div className="row">
                    {this.listMedia()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        media : state.home[0].media
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoadMedia : () => {
            dispatch(action.list_media_home());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Media_home);