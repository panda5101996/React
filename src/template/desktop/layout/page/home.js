import React, { Component } from 'react';
import Featured_News_Home from '../block/ttc_featured_news/featured_news_home';
import Biem_Hoa_News_Home from '../block/ttc_custom_list/Biem_hoa_news_home';
import Most_View_Home from '../block/ttc_custom_list/Most_view_home';
import Doi_Cuoi_News_Home from '../block/ttc_custom_list/Doi_cuoi_news_home';
import Giai_Tri_News_Home from '../block/ttc_custom_list/Giai_tri_news_home';
import Song_Tre_News_Home from '../block/ttc_custom_list/Song_tre_news_home';
import The_Thao_News_Home from '../block/ttc_custom_list/The_thao_news_home';
import Media_Home from '../block/ttc_media/Media_home';
const TtcHelper = require(`../../../../common/TtcHelper`);

class home extends Component {
    render() {
        return (
            <div className="main">
                <div className="container">
                    <div className="suggest-bar">
                        <ul className="subMenu-bottom">
                            <li><a href="javascript:void(0)" rel="nofollow" title="Breaking news"
                                   className="icon-direction"> </a></li>
                            <li><a href="#" title="">Breaking news</a></li>
                            <li><a href="#" title="">Giao dịch tiền mặt</a></li>
                            <li><a href="#" title="">Xe hơi nhập khẩu</a></li>
                            <li><a href="#" title="">Chiến tranh</a></li>
                            <li><a href="#" title="">Mỹ</a></li>
                            <li><a href="#" title="">Bitcoin</a></li>
                            <li><a href="#" title="">Quan tham</a></li>
                        </ul>
                    </div>
                    <div className="outer outer-top">

                        {/* Begin block featured of home */}
                        <Featured_News_Home />
                        {/* End block featured of home */}

                        <aside className="sidebar">
                            <div className="block-bar block-qc">
                                <a href="#"><img src={TtcHelper.imgUrl('banner-300x600.jpg')} alt=""/></a>
                            </div>
                        </aside>
                    </div>
                    <span className="line-border"/>
                    <div className="outer outer-mid  scrollToOne">
                        <section className="content">
                            {/* Begin block biem hoa of home */}
                            <Biem_Hoa_News_Home />
                            {/* End block biem hoa of home */}
                        </section>
                        <aside className="sidebar">
                            {/* Begin block most view of home */}
                            <Most_View_Home />
                            {/* End block most view home */}
                        </aside>
                    </div>
                    <span className="line-border"/>
                    {/* Begin block media of home */}
                    <Media_Home />
                    {/* End block media home */}
                    <span className="line-border"/>
                    {/* Begin block doi cuoi of home */}
                    <Doi_Cuoi_News_Home />
                    {/* End block giai tri home */}
                    <span className="line-border"/>
                    {/* Begin block giai tri of home */}
                    <Giai_Tri_News_Home />
                    {/* End block doi cuoi home */}
                    <span className="line-border"/>
                    <div className="block block-last">
                        {/* Begin block song tre of home */}
                        <Song_Tre_News_Home />
                        {/* End block song tre home */}

                        {/* Begin block the thao of home */}
                        <The_Thao_News_Home />
                        {/* End block the thao home */}
                    </div>
                </div>
            </div>
        );
    }
}

export default home;