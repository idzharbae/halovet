import React from 'react';
import './Artikel.css';
import axios from 'axios';
import { getCookie } from '../../helper/cookies';
import ensureArray from 'ensure-array';

class Artikel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            articles : []
        }
    }
    componentDidMount(){
        const config = {
            validateStatus: function (status) {
                return status >= 200 && status <= 302;
              },
              headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Bearer '+ getCookie('jwt')
              }
        }
        axios.get("http://0.0.0.0:8000/articles?limit=5&limitstart=0", config)
            .then((result => {
                const response = result.data;
                if(response.Status)
                    this.setState({articles : response.Data.Articles})
                else
                    console.log(response);
            }))
            .catch((e) => {
                if(e.response)
                    console.log(e.response);
                else
                    console.log(e);
            })
    }
    render(){
        const articles = [];
        ensureArray(this.state.articles).forEach((article) => {
            Date.prototype.monthName = function() {
                return this.toUTCString().split(' ')[2]
            };
            const date = article.CreatedAt.split(" ")[0].split("-")[2];
           const month = new Date(article.CreatedAt.split(" ")[0]).monthName();
            articles.push(
                <article class="blog_item">
                    <div class="blog_item_img">
                        <img class="card-img rounded-0" src={"http://0.0.0.0:8000/static/article/"+article.PhotoPath} alt=""></img>>
                        <a href="#" class="blog_item_date">
                            <h3>{date}</h3>
                            <p>{month}</p>
                        </a>
                    </div>

                    <div class="blog_details">
                        <a class="d-inline-block" href={"/single/"+article.ID.toString()}>
                            <h3>{article.Title}</h3>
                        </a>
                        <p>{article.Content}</p>
                        <ul class="blog-info-link">
                            <li><a href="#"><i class="fa fa-user"></i> Travel, Lifestyle</a></li>
                            <li><a href="#"><i class="fa fa-comments"></i> 03 Comments</a></li>
                        </ul>
                    </div>
                </article>
            );
        });
        return(
        <div>

    <div class="bradcam_area breadcam_bg bradcam_overlay">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="bradcam_text">
                            <h3>Artikel</h3>
                            <p><a href="index.html">Home /</a> artikel</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="blog_area section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mb-5 mb-lg-0">
                        <div class="blog_left_sidebar">
                            {articles}


                            <nav class="blog-pagination justify-content-center d-flex">
                                <ul class="pagination">
                                    <li class="page-item">
                                        <a href="#" class="page-link" aria-label="Previous">
                                            <i class="ti-angle-left"></i>
                                        </a>
                                    </li>
                                    <li class="page-item">
                                        <a href="#" class="page-link">1</a>
                                    </li>
                                    <li class="page-item active">
                                        <a href="#" class="page-link">2</a>
                                    </li>
                                    <li class="page-item">
                                        <a href="#" class="page-link" aria-label="Next">
                                            <i class="ti-angle-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="blog_right_sidebar">
                            <aside class="single_sidebar_widget search_widget">
                                <form action="#">
                                    <div class="form-group">
                                        <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder='Search Keyword'
                                                onfocus="this.placeholder = ''"
                                                onblur="this.placeholder = 'Search Keyword'"></input>
                                            <div class="input-group-append">
                                                <button class="btn" type="button"><i class="ti-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                        type="submit">Search</button>
                                </form>
                            </aside>

                            <aside class="single_sidebar_widget post_category_widget">
                                <h4 class="widget_title">Category</h4>
                                <ul class="list cat-list">
                                    <li>
                                        <a href="#" class="d-flex">
                                            <p>Resaurant food</p>
                                            <p>(37)</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="d-flex">
                                            <p>Travel news</p>
                                            <p>(10)</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="d-flex">
                                            <p>Modern technology</p>
                                            <p>(03)</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="d-flex">
                                            <p>Product</p>
                                            <p>(11)</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="d-flex">
                                            <p>Inspiration</p>
                                            <p>21</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="d-flex">
                                            <p>Health Care (21)</p>
                                            <p>09</p>
                                        </a>
                                    </li>
                                </ul>
                            </aside>

                            <aside class="single_sidebar_widget popular_post_widget">
                                <h3 class="widget_title">Recent Post</h3>
                                <div class="media post_item">
                                    <img src="img/post/post_1.png" alt="post"/>
                                    <div class="media-body">
                                        <a href="single-blog.html">
                                            <h3>From life was you fish...</h3>
                                        </a>
                                        <p>January 12, 2019</p>
                                    </div>
                                </div>
                                <div class="media post_item">
                                    <img src="img/post/post_2.png" alt="post"/>
                                    <div class="media-body">
                                        <a href="single-blog.html">
                                            <h3>The Amazing Hubble</h3>
                                        </a>
                                        <p>02 Hours ago</p>
                                    </div>
                                </div>
                                <div class="media post_item">
                                    <img src="img/post/post_3.png" alt="post"/>
                                    <div class="media-body">
                                        <a href="single-blog.html">
                                            <h3>Astronomy Or Astrology</h3>
                                        </a>
                                        <p>03 Hours ago</p>
                                    </div>
                                </div>
                                <div class="media post_item">
                                    <img src="img/post/post_4.png" alt="post"/>
                                    <div class="media-body">
                                        <a href="single-blog.html">
                                            <h3>Asteroids telescope</h3>
                                        </a>
                                        <p>01 Hours ago</p>
                                    </div>
                                </div>
                            </aside>
                            <aside class="single_sidebar_widget tag_cloud_widget">
                                <h4 class="widget_title">Tag Clouds</h4>
                                <ul class="list">
                                    <li>
                                        <a href="#">project</a>
                                    </li>
                                    <li>
                                        <a href="#">love</a>
                                    </li>
                                    <li>
                                        <a href="#">technology</a>
                                    </li>
                                    <li>
                                        <a href="#">travel</a>
                                    </li>
                                    <li>
                                        <a href="#">restaurant</a>
                                    </li>
                                    <li>
                                        <a href="#">life style</a>
                                    </li>
                                    <li>
                                        <a href="#">design</a>
                                    </li>
                                    <li>
                                        <a href="#">illustration</a>
                                    </li>
                                </ul>
                            </aside>


                            <aside class="single_sidebar_widget instagram_feeds">
                                <h4 class="widget_title">Instagram Feeds</h4>
                                <ul class="instagram_row flex-wrap">
                                    <li>
                                        <a href="#">
                                            <img class="img-fluid" src="img/post/post_5.png" alt=""/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img class="img-fluid" src="img/post/post_6.png" alt=""/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img class="img-fluid" src="img/post/post_7.png" alt=""/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img class="img-fluid" src="img/post/post_8.png" alt=""/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img class="img-fluid" src="img/post/post_9.png" alt=""/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img class="img-fluid" src="img/post/post_10.png" alt=""/>
                                        </a>
                                    </li>
                                </ul>
                            </aside>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        );
    }
}

export default Artikel;