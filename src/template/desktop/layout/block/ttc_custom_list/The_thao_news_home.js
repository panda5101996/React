import React, { Component } from 'react';
import {connect} from "react-redux";
import * as action from "./../../../../../actions/ActionHome";
import axios from 'axios';

const TtcHelper = require(`./../../../../../common/TtcHelper`);

class The_thao_news_home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }

    componentWillMount() {
        this.props.onLoadTheoThao()
    };

    listTheThao() {
        if (this.props.the_thao) {
            return this.props.the_thao.map((object, index) => {
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
            <div className="box box-right">
                <h2 className="title">
                    <i className="icon icon-sport"/>
                    <div className="inner-title">
                        <h2><a href="#" title="">Thể thao</a></h2>
                        <ul className="list-cat">
                            <li><a href="#" title="">Khoảng khắc</a></li>
                            <li><a href="#" title="">Quan điểm</a></li>
                            <li><a href="#" title="">Video</a></li>
                            {/*<li><a href="#" title="">(Mục cho fan)</a></li>*/}
                        </ul>
                    </div>
                </h2>
                <div className="row">
                    {this.listTheThao()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        the_thao : state.home[0].the_thao
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoadTheoThao : () => {
            dispatch(action.list_the_thao_home());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(The_thao_news_home);