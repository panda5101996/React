import React, { Component } from 'react';
import {connect} from "react-redux";
import * as action from "./../../../../../actions/ActionHome";
import axios from 'axios';
import Slider from "react-slick";

const settings = {
    infinite: true,
    autoplay: true,
    speed: 3200,
    slidesToShow: 1,
    slidesToScroll: 1
};

class Biem_hoa_news_home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data : null
        }
    }

    componentDidMount() {
        this.props.onLoadBiemHoaNew()
    };

    slider() {
        if (this.props.biem_hoa_news) {
            // eslint-disable-next-line array-callback-return
            return this.props.biem_hoa_news.map((object, index) => {
                if (index < 3) {
                    return (
                        <div key={index}>
                            <a className="thumb" href="#"><img src={object.thumb_link} alt={object.title}/></a>
                        </div>
                    )
                }
            })
        }
    }

    list() {
        if (this.props.biem_hoa_news) {
            // eslint-disable-next-line array-callback-return
            return this.props.biem_hoa_news.map((object,index) => {
                if (index === 3) {
                    let icon = object.video_link ? "icon con-video" : "";
                    return (
                        <article key={index} className="art-lastest art-b">
                            <a href="#" title={object.title}><img src={object.thumb_link} /><i
                                className={icon}/></a>
                            <div className="des">
                                <h4 className="hasComment"><a href="#" title="">{object.title}</a> <span className="outer-icon"><span
                                    className="number">{object.comment_count}</span><i className="icon icon-comment"/></span>
                                </h4>
                                <a className="cat" href="#">{object.cate_name[0]}</a>
                                <article className="art-s">
                                    <h4><a href="#" title="">{object.description}</a></h4>
                                </article>
                            </div>
                        </article>
                    )
                }
                if (index > 3) {
                    let icon = object.video_link ? "icon con-video" : "";
                    return (
                        <article key={index} className="art-lastest">
                            <a href="#" title={object.title}><img src={object.thumb_link} /><i
                                className={icon}/></a>
                            <div className="des">
                                <h4><a href="#" title={object.title}>{object.title}</a></h4>
                                <a className="cat" href="#">{object.cate_name[0]}</a>
                            </div>
                        </article>
                    )
                }
            })
        }
    }

    getTitle() {
        if (this.props.biem_hoa_news) {
            // eslint-disable-next-line array-callback-return
            return this.props.biem_hoa_news.map((object,index) => {
                if (index === 0) {
                    return (
                        <h3 key={index}><a href="#" title="">{object.title}</a></h3>
                    )
                }
            })
        }
    }

    render() {
        return (
            <div className="list-news">
                <article className="art-style">
                    <Slider className="slick-thumb" {...settings}>
                        {this.slider()}
                    </Slider>
                    <div className="des">
                        {this.getTitle()}
                        <a className="btn-viewmore" href="#" title="">Xem thêm <i
                            className="icon icon-viewmore"/></a>
                    </div>
                </article>
                {this.list()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        biem_hoa_news : state.home[0].biem_hoa_news
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoadBiemHoaNew : () => {
            dispatch(action.list_biem_hoa_news_home());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Biem_hoa_news_home);