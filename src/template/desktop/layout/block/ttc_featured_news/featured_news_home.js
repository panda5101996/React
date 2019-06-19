import React, { Component } from 'react';
import {connect} from "react-redux";
import * as action from "./../../../../../actions/ActionHome";
import { Link } from "react-router-dom";
import axios from 'axios';
import Slider from "react-slick";
import PropTypes from 'prop-types'


const TtcHelper = require(`./../../../../../common/TtcHelper`);
const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2200,
    slidesToShow: 3,
    slidesToScroll: 3
};

class featured_news_home extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        this.props.onLoadFeaturedNew();
    };

    prior = () => {
        if (this.props.featured_news) {
            // eslint-disable-next-line array-callback-return
            return this.props.featured_news.map((object, index) => {
                if (index === 0) {
                    return (
                        <a className="art-top-1" key={index}>
                            <Link className="thumb" to={`/ttc/tin-tuc/doi-cuoi/20190523/an-dat-an-tat-an-nhu-xang-xuc/${object.object_id}.html`} title="">
                                <img src={object.thumb_link} alt={object.title}/>
                            </Link>
                            <h1 className="hasComment"><a href="#" title="">{object.title}</a> <span className="outer-icon"><span
                                className="number">43</span><i className="icon icon-comment"/></span></h1>
                            <p>{object.description}</p>
                        </a>
                    )
                }

                if(index === 1) {
                    return (
                        <article className="art-top-2" key={index}>
                            <Link className="thumb" to={`/ttc/tin-tuc/doi-cuoi/20190523/an-dat-an-tat-an-nhu-xang-xuc/${object.object_id}.html`} title="">
                                <img src={TtcHelper.imgUrl('photo-ver-1-min.jpg', 'photo')} alt={object.title}/>
                            </Link>
                            <h2 className="hasComment"><a href="#" title="">{object.title}</a> <span
                                className="outer-icon"><span className="number">43</span><i
                                className="icon icon-comment"/></span></h2>
                        </article>
                    )
                }
            })
        }

    };

    slider = () => {
        if (this.props.featured_news) {
            // eslint-disable-next-line array-callback-return
            return this.props.featured_news.map((object, index) => {
                if (index > 1) {
                    return (
                        <div className="slide_item" key={index} >
                            <article className="art-slider">
                                <a className="thumb" href="#"><img src={object.thumb_link} alt={object.title}/></a>
                                <h3 className="hasComment"><a href="#" title="">{object.title}</a> <span className="outer-icon"><span
                                    className="number">43</span><i className="icon icon-comment"/></span>
                                </h3>
                            </article>
                        </div>
                    )
                }
            })
        }

    };

    render() {
        return (
            <section className="content">
                <div className="block-top">
                    {this.prior()}
                </div>
                <div className="outer-slider">
                    <Slider className="slider single-top" {...settings} >
                        {this.slider()}
                    </Slider>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        featured_news : state.home[0].featured_news
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoadFeaturedNew : () => {
            dispatch(action.list_featured_news_home());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(featured_news_home);