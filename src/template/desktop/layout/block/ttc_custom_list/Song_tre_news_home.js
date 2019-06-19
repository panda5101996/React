import React, { Component } from 'react';
import {connect} from "react-redux";
import * as action from "./../../../../../actions/ActionHome";
import axios from 'axios';

const TtcHelper = require(`./../../../../../common/TtcHelper`);

class Song_tre_news_home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }

    componentWillMount() {
        this.props.onLoadSongTre()
    };

    listSongTre() {
        if (this.props.song_tre) {
            return this.props.song_tre.map((object, index) => {
                return (
                    <div className="col-6" key={index}>
                        <article className="art art-young">
                            <a href="#" title=""><img src={object.thumb_link}/></a>
                            <h3><a href="#">{object.title} </a></h3>
                        </article>
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div className="box box-left">
                <h2 className="title">
                    <i className="icon icon-young"/>
                    <div className="inner-title">
                        <h2><a href="#" title="">Sống trẻ</a></h2>
                        <ul className="list-cat">
                            <li><a href="#" title="">Giới trẻ 360</a></li>
                            <li><a href="#" title="">Đọc chậm</a></li>
                            <li><a href="#" title="">NGỡ rối tơ lòng</a></li>
                        </ul>
                    </div>
                </h2>
                <div className="row">
                    {this.listSongTre()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        song_tre : state.home[0].song_tre
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoadSongTre : () => {
            dispatch(action.list_song_tre_home());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Song_tre_news_home);