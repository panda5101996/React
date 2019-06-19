import React, { Component } from 'react';
import Content_Detail from '../block/ttc_content_detail/Content_detail';
import Title_Detail from '../block/ttc_content_detail/Title_detail';
import Block_Quan_Tam from '../block/ttc_content_detail/Block_quan_tam';

class detail extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentWillMount() {

    }
    render() {
        let params = this.props.match.params;
        // console.log(params.id);
        return (
            <div className="main">
                <div className="container">
                    <h2 className="title">
                        <i className="icon icon-laugh" />
                        <div className="inner-title">
                            <h2><a href="#" >Đời cười</a>
                                <span className="inner">
                                  <a href="#" >Bình luận</a>
                                  <a href="#" >Miễn bình luận</a>
                                  <a href="#" >Góc nhìn</a>
                                </span>
                            </h2>
                            <ul className="list-cat">
                                <li><a href="javascript:void(0)" rel="nofollow" title="Breaking news" className="icon-direction"> </a></li>
                                <li><a href="#" >Cười xối xả</a></li>
                                <li><a href="#" >TV show</a></li>
                                <li><a href="#" >Show cười</a></li>
                            </ul>
                        </div>
                    </h2>
                    <div className="row-1">
                        <div className="box-665">
                            <Title_Detail />
                            <span className="line-border-solid" />
                        </div>
                    </div>
                    <div className="row-1 scrollToOne">
                        <div className="box-665">
                            <Content_Detail id={params.id} />
                            <div className="block-comment">
                                <div className="wrapper-cm">
                                    <div className="plugin-comment">
                                        <div className="tool-comment">
                                            <h4>Bình luận (285)</h4>
                                            <span className="fr">
                                                <a className="active" href="#" >Nổi bật</a>
                                                <a href="#" >Mới nhất</a>
                                              </span>
                                        </div>
                                        <div className="wrapper-comment">
                                            <div className="comment media"><img src="http://localhost:3000/img/user.jpg"  className="mr-3" />
                                                <div className="media-body">
                                                    <div className="inner-cm">
                                                        <h5 className="mt-0">Bạn A</h5>
                                                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                                        <div className="tool-like"><span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span> <span className="reply"> Trả lời</span> <span className="count">3 trả lời</span>
                                                            <div className="box-reply-cm">
                                                                <textarea className="box-reply-cm" placeholder="Viết bình luận của bạn ở đây, không vượt quá 300 ký tự" defaultValue={""} />
                                                                <div className="text-right">
                                                                    <button className="btn-comment" data-toggle="modal" data-target="#loginModal" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media mt-3"><a href="#"><img src="http://localhost:3000/img/user.jpg"  className="mr-3" /></a>
                                                <div className="media-body">
                                                    <h5 className="mt-0">Media heading</h5>
                                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                                    <div className="tool-like"><span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span> <span className="reply"> Trả lời</span> <span className="count">3 trả lời</span>
                                                        <div className="box-reply-cm">
                                                            <textarea className="box-reply-cm" placeholder="Viết bình luận của bạn ở đây, không vượt quá 300 ký tự" defaultValue={""} />
                                                            <div className="text-right">
                                                                <button className="btn-comment" data-toggle="modal" data-target="#loginModal" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media mt-3"><a href="#"><img src="http://localhost:3000/img/user.jpg"  className="mr-3" /></a>
                                                <div className="media-body">
                                                    <h5 className="mt-0">Media heading</h5>
                                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                                    <div className="tool-like"><span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span> <span className="reply"> Trả lời</span> <span className="count">3 trả lời</span>
                                                        <div className="box-reply-cm">
                                                            <textarea className="box-reply-cm" placeholder="Viết bình luận của bạn ở đây, không vượt quá 300 ký tự" defaultValue={""} />
                                                            <div className="text-right">
                                                                <button className="btn-comment" data-toggle="modal" data-target="#loginModal" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media mt-3"><a href="#"><img src="http://localhost:3000/img/user.jpg"  className="mr-3" /></a>
                                                <div className="media-body">
                                                    <h5 className="mt-0">Media heading</h5>
                                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                                    <div className="tool-like"><span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span> <span className="reply"> Trả lời</span> <span className="count">3 trả lời</span>
                                                        <div className="box-reply-cm">
                                                            <textarea className="box-reply-cm" placeholder="Viết bình luận của bạn ở đây, không vượt quá 300 ký tự" defaultValue={""} />
                                                            <div className="text-right">
                                                                <button className="btn-comment" data-toggle="modal" data-target="#loginModal" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> <a href="#" className="viewmore">Xem thêm bình luận</a>
                                        </div>
                                        <div className="wrapper-comment">
                                            <div className="comment media"><img src="http://localhost:3000/img/user.jpg"  className="mr-3" />
                                                <div className="media-body">
                                                    <div className="inner-cm">
                                                        <h5 className="mt-0">Bạn A</h5>
                                                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                                        <div className="tool-like"><span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span> <span className="reply"> Trả lời</span> <span className="count">3 trả lời</span>
                                                            <div className="box-reply-cm">
                                                                <textarea className="box-reply-cm" placeholder="Viết bình luận của bạn ở đây, không vượt quá 300 ký tự" defaultValue={""} />
                                                                <div className="text-right">
                                                                    <button className="btn-comment" data-toggle="modal" data-target="#loginModal" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media mt-3"><a href="#"><img src="http://localhost:3000/img/user.jpg"  className="mr-3" /></a>
                                                <div className="media-body">
                                                    <h5 className="mt-0">Media heading</h5>
                                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                                    <div className="tool-like"><span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span> <span className="reply"> Trả lời</span> <span className="count">3 trả lời</span>
                                                        <div className="box-reply-cm">
                                                            <textarea className="box-reply-cm" placeholder="Viết bình luận của bạn ở đây, không vượt quá 300 ký tự" defaultValue={""} />
                                                            <div className="text-right">
                                                                <button className="btn-comment" data-toggle="modal" data-target="#loginModal" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media mt-3"><a href="#"><img src="http://localhost:3000/img/user.jpg"  className="mr-3" /></a>
                                                <div className="media-body">
                                                    <h5 className="mt-0">Media heading</h5>
                                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                                    <div className="tool-like"><span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span> <span className="reply"> Trả lời</span> <span className="count">3 trả lời</span>
                                                        <div className="box-reply-cm">
                                                            <textarea name="txtarea-cm" placeholder="Viết bình luận của bạn ở đây, không vượt quá 300 ký tự" defaultValue={""} />
                                                            <div className="text-right">
                                                                <button className="btn-comment" data-toggle="modal" data-target="#loginModal" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media mt-3"><a href="#"><img src="http://localhost:3000/img/user.jpg"  className="mr-3" /></a>
                                                <div className="media-body">
                                                    <h5 className="mt-0">Media heading</h5>
                                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                                                    <div className="tool-like"><span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span> <span className="reply"> Trả lời</span> <span className="count">3 trả lời</span>
                                                        <div className="box-reply-cm">
                                                            <textarea className="txtarea-cm" placeholder="Viết bình luận của bạn ở đây, không vượt quá 300 ký tự" defaultValue={""} />
                                                            <div className="text-right">
                                                                <button className="btn-comment" data-toggle="modal" data-target="#loginModal" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> <a href="#" className="viewmore">Xem thêm bình luận</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-write">
                                    <h4>Viết bình luận</h4>
                                    <textarea className="box-reply-cm" data-toggle="modal" data-target="#modalCom_1" placeholder="Viết bình luận của bạn ở đây, không vượt quá 300 ký tự" defaultValue={""} />
                                    <div className="text-right">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-300">
                            <div className="block-banner"><a href="#" ><img src="http://localhost:3000/img/banner-300x250.jpg"  /></a></div> <span className="line-border-s mar-20" />
                            <div className="block-subscibe mar-20">
                                <form className="frm-subscibe">
                                    <input type="text" className="txt-subscibe" placeholder="Email của bạn" />
                                    <button className="btn-subscibe">Nhận tin</button>
                                </form>
                                <h4><i className="icon icon-mail" /> Đọc những tin tức nóng nhất trên TTC</h4>
                                <p>Bạn sẽ nhận được các tin nổi bật trên TTC, nếu không muốn bạn có thể tắt bất cứ lúc nào.</p>
                            </div> <span className="line-border mar-20" />
                            <div className="block-bar">
                                <h3 className="title-note"><a href="#" >Đáng chú ý</a></h3>
                                <article className="art-bar-b">
                                    <a href="#"><img src="http://localhost:3000/img/photo/9-min.jpg"  /></a>
                                    <h4><a href="#" >Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                </article>
                                <article className="art-bar-s art-hori">
                                    <a href="#"><img src="http://localhost:3000/img/photo/8-min.jpg"  /></a>
                                    <div className="des">
                                        <h4><a href="#" >Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                    </div>
                                </article>
                                <article className="art-bar-s art-hori">
                                    <a href="#"><img src="http://localhost:3000/img/photo/7-min.jpg"  /></a>
                                    <div className="des">
                                        <h4><a href="#" >Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                    </div>
                                </article>
                                <article className="art-bar-s art-hori">
                                    <a href="#"><img src="http://localhost:3000/img/photo/6-min.jpg"  /></a>
                                    <div className="des">
                                        <h4><a href="#" >Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                    </div>
                                </article>
                            </div>
                            <div className="block-bar block-banner ui sticky one"><a href="#" ><img src="http://localhost:3000/img/banner-300x250.jpg"  /></a></div>
                        </div>
                    </div>
                    <Block_Quan_Tam />
                    <span className="line-border" />
                    <div className="block-enter">
                        <div className="outer">
                            <article className="art-enter art-b">
                                <a className="thumbs" href="#" ><img src="http://localhost:3000/img/photo/8-min.jpg" style={{}} /><i className="icon icon-video" /></a>
                                <div className="des">
                                    <h3 className="hasComment"><a href="#" >Hai Phượng giải nhiệt cơn khát phim hành động Việt</a> <span className="outer-icon"><span className="number">43</span><i className="icon icon-comment" /></span></h3>
                                    <a className="link-cat" >Nghe đồn là</a>
                                    <p>Được nhào nặn dưới bàn tay của vị đạo diễn tài năng trong dòng phim kinh dị Christopher B. Landon, nhà sản xuất đã khẳng định rằng Happy Death Day 2U.</p>
                                </div>
                            </article>
                            <div className="block-bar block-qc">
                                <a href="#"><img src="http://localhost:3000/img/banner-300x250.jpg"  /></a>
                            </div>
                        </div>
                        <div className="list-enter">
                            <div className="row">
                                <div className="col">
                                    <article className="art-enter-s"><a href="#" ><img src="http://localhost:3000/img/photo/2-min.jpg" /></a>
                                        <h3><a href="#">Hai Phượng giải nhiệt cơn khát phim hành động Việt </a></h3>
                                    </article>
                                </div>
                                <div className="col">
                                    <article className="art-enter-s"><a href="#" ><img src="http://localhost:3000/img/photo/1-min.jpg" /></a>
                                        <h3><a href="#">Hai Phượng giải nhiệt cơn khát phim hành động Việt </a></h3>
                                    </article>
                                </div>
                                <div className="col">
                                    <article className="art-enter-s"><a href="#" ><img src="http://localhost:3000/img/photo/3-min.jpg" /></a>
                                        <h3><a href="#">Hai Phượng giải nhiệt cơn khát phim hành động Việt </a></h3>
                                    </article>
                                </div>
                                <div className="col">
                                    <article className="art-enter-s"><a href="#" ><img src="http://localhost:3000/img/photo/4-min.jpg" /></a>
                                        <h3><a href="#">Hai Phượng giải nhiệt cơn khát phim hành động Việt </a></h3>
                                    </article>
                                </div>
                                <div className="col">
                                    <article className="art-enter-s"><a href="#" ><img src="http://localhost:3000/img/photo/5-min.jpg" /></a>
                                        <h3><a href="#">Hai Phượng giải nhiệt cơn khát phim hành động Việt </a></h3>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default detail