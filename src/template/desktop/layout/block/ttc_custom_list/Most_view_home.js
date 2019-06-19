import React, { Component } from 'react';
import {connect} from "react-redux";
import * as action from "./../../../../../actions/ActionHome";
import axios from 'axios';

class Most_view_home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }

    componentWillMount() {
        this.props.onLoadMostView()
    };

    listMostView() {
        if (this.props.most_view) {
            // eslint-disable-next-line array-callback-return
            return this.props.most_view.map((object, index) => {
                if (index === 0) {
                    return (
                        <article key={index} className="art-bar-b">
                            <a href="#"><img src={object.thumb_link} alt={object.title}/></a>
                            <h4><a href="#" title={object.title}>{object.title}</a></h4>
                        </article>
                    )
                }
                if (index > 0) {
                    return (
                        <article key={index} className="art-bar-s art-hori">
                            <a href="#"><img src={object.thumb_link} alt={object.title}/></a>
                            <div className="des">
                                <h4><a href="#" title={object.title}>{object.title}</a></h4>
                            </div>
                        </article>
                    )
                }

            })
        }
    }

    render() {
        return (
            <div className="block-bar ui sticky one">
                <h3 className="title-note"><a href="#" title="">Đáng chú ý</a></h3>
                <div className="inner-gray">
                    {this.listMostView()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        most_view : state.home[0].most_view
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLoadMostView : () => {
            dispatch(action.list_most_view_home());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Most_view_home);