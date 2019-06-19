import React, { Component } from 'react';
import {connect} from "react-redux";
import * as action from "./../../../../../actions/ActionHome";
import axios from 'axios';

const TtcHelper = require(`./../../../../../common/TtcHelper`);

class Giai_tri_news_home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }

    componentWillMount() {
        this.props.onLoadGiaiTri()
    };

    firstGiaiTri() {
        if (this.props.giai_tri) {
            // eslint-disable-next-line array-callback-return
            return this.props.giai_tri.map((object, index) => {
                if (index === 0) {
                    return (
                        <article className="art-enter art-b" key={index}>
                            <a className="thumbs" href="#" title=""><img src={object.thumb_link} /><i
                                className={object.cate_name[0] === 'media' ? 'icon icon-video' : ''}/></a>
                            <div className="des">
                                <h3 className="hasComment"><a href="#" title="">{object.title}</a> <span className="outer-icon"><span
                                    className="number">43</span><i className="icon icon-comment"/></span></h3>
                                <a className="link-cat" href="">{object.cate_name[0]}</a>
                                <p>{object.description}</p>
                                <article className="art-s">
                                    <h4><a href="#" title="">Sương sớm, À ố Show, Teh Dar diễn ở phố cổ Hội An</a>
                                    </h4>
                                </article>
                            </div>
                        </article>
                    )
                }
            })
        }
    }

    listGiaiTri() {
        if (this.props.giai_tri) {
            // eslint-disable-next-line array-callback-return
            return this.props.giai_tri.map((object, index) => {
                if (index > 0) {
                    return (
                        <div className="col" key={index}>
                            <article className="art-enter-s"><a href="#" title=""><img
                                src={object.thumb_link}/></a>
                                <h3><a href="#">{object.title} </a></h3>
                            </article>
                        </div>
                    )
                }
            })
        }

    }

    render() {
        return (
            <div className="block-enter">
                <h2 className="title">
                    <i className="icon icon-enter"/>
                    <div className="inner-title">
                        <h2><a href="#" title="">Giải trí</a></h2>
                        <ul className="list-cat">
                            <li><a href="#" title="">Nghe đồn là</a></li>
                            <li><a href="#" title="">Sau cánh gà</a></li>
                            <li><a href="#" title="">Ngẫm thử đúng không</a></li>
                        </ul>
                    </div>
                </h2>
                <div className="outer">
                    {this.firstGiaiTri()}
                    <div className="block-bar block-qc">
                        <a href="#"><img src={TtcHelper.imgUrl('banner-300x250.jpg')} alt=""/></a>
                    </div>
                </div>
                <div className="list-enter">
                    <div className="row">
                        {this.listGiaiTri()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        giai_tri : state.home[0].giai_tri
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoadGiaiTri : () => {
            dispatch(action.list_giai_tri_home());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Giai_tri_news_home);