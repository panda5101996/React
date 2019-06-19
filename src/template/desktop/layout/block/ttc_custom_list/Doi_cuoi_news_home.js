import React, { Component } from 'react';
import {connect} from "react-redux";
import * as action from "./../../../../../actions/ActionHome";
import axios from 'axios';

const TtcHelper = require(`./../../../../../common/TtcHelper`);

class Doi_cuoi_news_home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }

    componentWillMount() {
        this.props.onLoadDoiCuoi()
    };

    listDoiCuoi() {
        if (this.props.doi_cuoi) {
            // eslint-disable-next-line array-callback-return
           return this.props.doi_cuoi.map((object, index) => {
               if (index === 0) {
                    return (
                        <article className="art-lastest art-b" key={index}>
                            <a href="#" title=""><img src={object.thumb_link} /><i
                                className={object.cate_name[0] === 'media' ? 'icon icon-video' : ''}/></a>
                            <div className="des">
                                <h4 className="hasComment"><a href="#" title="">{object.title}</a> <span className="outer-icon"><span
                                    className="number">43</span><i className="icon icon-comment"/></span>
                                </h4>
                                <a className="cat" href="#">{object.cate_name[0]}</a>
                                <article className="art-s">
                                    <h4><a href="#" title="">{object.description}</a></h4>
                                </article>
                            </div>
                        </article>
                    )
               }

               if (index > 0) {
                   return (
                       <article className="art-lastest" key={index}>
                           <a href="#" title=""><img src={object.thumb_link} /><i
                               className={object.cate_name[0] === 'media' ? 'icon icon-video' : ''}/></a>
                           <div className="des">
                               <h4 className="hasComment"><a href="#" title="">{object.title}</a> <span className="outer-icon"><span
                                   className="number">43</span><i className="icon icon-comment"/></span>
                               </h4>
                               <a className="cat" href="#">{object.cate_name[0]}</a>
                           </div>
                       </article>
                   )
               }
           })
        }
    }

    render() {
        return (
            <div className="block-laugh">
                <h2 className="title">
                    <i className="icon icon-laugh"/>
                    <div className="inner-title">
                        <h2><a href="#" title="">Đời cười</a></h2>
                        <ul className="list-cat">
                            <li><a href="#" title="">Góc nhìn</a></li>
                            <li><a href="#" title="">Bình luận</a></li>
                            <li><a href="#" title="">Miễn bình luậnz</a></li>
                        </ul>
                    </div>
                </h2>
                <div className="outer scrollToTwo">
                    <section className="content">
                        <div className="list-news">
                            {this.listDoiCuoi()}
                        </div>
                    </section>
                    <aside className="sidebar">
                        <div className="block-bar block-qc ui sticky two">
                            <a href="#"><img src={TtcHelper.imgUrl('banner-300x600.jpg')} alt=""/></a>
                        </div>
                    </aside>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        doi_cuoi : state.home[0].doi_cuoi
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoadDoiCuoi : () => {
            dispatch(action.list_doi_cuoi_home());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Doi_cuoi_news_home);