import React, { Component } from 'react';
import logo from '../../logo.svg';
import { Button, Col, Alert ,Container, Form, InputGroup } from 'react-bootstrap';
import './index.css';

class Home extends Component{
  state = {
    search: '',
    pokemon: null,
    loading: false
  }

  bindField = () => ({
    value: this.state.search,
    onChange: (e) => this.setState({ search: e.target.value })
  })

  handleSubmit = (e) => {
    e.preventDefault()
    this.fetchPokemon(this.state.search)
  }

  async fetchPokemon(id) {
    this.setState({ loading: true })
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()
    this.setState({ pokemon: data, loading: false })
  }
  componentDidMount(){
  }
  render(){
    const { pokemon, loading } = this.state
    const fetched = !loading && pokemon && pokemon.id
    const notFound = !loading && pokemon && !pokemon.id
  

    return(
      <div>
    <header class="masthead text-white text-center">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-xl-9 mx-auto">
          <h1 class="mb-5">Selamat Datang di Halovet!</h1>
        </div>
      </div>
    </div>
  </header>
<section class="features-icons bg-light text-center">
<div class="container">
 <div class="row">
   <div class="col-lg-4">
     <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
       <div class="features-icons-icon d-flex">
         <i class="icon-people m-auto text-primary"></i>
       </div>
       <h3>Booking Dokter</h3>
       <p class="lead mb-0">Booking dokter hewan di wilayah anda!</p>
     </div>
   </div>
   <div class="col-lg-4">
     <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
       <div class="features-icons-icon d-flex">
         <i class="icon-note m-auto text-primary"></i>
       </div>
       <h3>Artikel</h3>
       <p class="lead mb-0">Artikel kesehatan dan perawatan hewan peliharaan anda!</p>
     </div>
   </div>
   <div class="col-lg-4">
     <div class="features-icons-item mx-auto mb-0 mb-lg-3">
       <div class="features-icons-icon d-flex">
         <i class="icon-support m-auto text-primary"></i>
       </div>
       <h3>Forum tanya-jawab</h3>
       <p class="lead mb-0">Tanya-jawab seputar hewan peliharaan anda!</p>
     </div>
   </div>
 </div>
</div>
</section>

<div class="welcome_docmed_area">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6">
                    <div class="welcome_thumb">
                        <div class="thumb_1">
                            <img src="img/huhe.jpg" alt=""/>
                        </div>
                        <div class="thumb_2">
                            <img src="img/huhe1.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="welcome_docmed_info">
                        <h2>Halovet</h2>
                        <h3>Konsultasi Kesehatan Hewan Peliharaan Anda</h3>
                        <p>Halovet merupakan tempat bagi anda untuk booking rumah sakit hewan, mencari artikel kesehatan hewan dan tanya jawab dengan dokter hewan terpercaya di forum Halovet .
                        </p>
                        <ul>
                            <li> <i class="flaticon-right"></i> Halovet sudah melayani lebih dari 5 tahun. </li>
                            <li> <i class="flaticon-right"></i> 10 ribu++ pengguna aktif.</li>
                            <li> <i class="flaticon-right"></i> Halovet memilki lebih dari 20 penghargaan. </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="testmonial_area">
        <div class="testmonial_active owl-carousel">
            <div class="single-testmonial testmonial_bg_1 overlay2">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-10 offset-xl-1">
                            <div class="testmonial_info text-center">
                                <div class="quote">
                                    <i class="flaticon-straight-quotes"></i>
                                </div>
                                <p>Terimakasih Halovet sudah membantu saya dalam booking dokter hewan, anjing saya bisa cepat ditangani tanpa antri di rumah sakit. </p>
                                <div class="testmonial_author">
                                    <h4>Mama Rara</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="single-testmonial testmonial_bg_2 overlay2">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-10 offset-xl-1">
                            <div class="testmonial_info text-center">
                                <div class="quote">
                                    <i class="flaticon-straight-quotes"></i>
                                </div>
                                <p>Halovet sudah menemani 'Kuki' kucing saya selama lebih dari 2 tahun, kucing saya jadi tidak rewel karena lama menunggu di rumah sakit.</p>
                                <div class="testmonial_author">
                                    <h4>Papa Gugum</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="single-testmonial testmonial_bg_1 overlay2">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-10 offset-xl-1">
                            <div class="testmonial_info text-center">
                                <div class="quote">
                                    <i class="flaticon-straight-quotes"></i>
                                </div>
                                <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor 
                                    sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.
                                    
                                    Fusce ac mattis nulla. Morbi eget ornare dui. </p>
                                <div class="testmonial_author">
                                    <h4>Asana Korim</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="business_expert_area">
        <div class="business_tabs_area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <ul class="nav" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"
                            aria-selected="true">Service Terbaik</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
                            aria-selected="false">Dokter Berpengalaman</a>
                            </li>


                            <li class="nav-item">
                                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact"
                            aria-selected="false">Emergency Departments</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        <div class="container">
            <div class="border_bottom">
                    <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                
                                    <div class="row align-items-center">
                                            <div class="col-xl-6 col-md-6">
                                                <div class="business_info">
                                                    <div class="icon">
                                                        <i class="flaticon-first-aid-kit"></i>
                                                    </div>
                                                    <h3>Coba Halovet sekarang juga!</h3>
                                                    <p>Daftarkan diri anda dan menjadi keluarga baru di Halovet.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-xl-6 col-md-6">
                                                <div class="business_thumb">
                                                    <img src="img/huhe.jpg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div class="row align-items-center">
                                            <div class="col-xl-6 col-md-6">
                                                <div class="business_info">
                                                    <div class="icon">
                                                        <i class="flaticon-first-aid-kit"></i>
                                                    </div>
                                                    <h3>Leading edge care for Your family</h3>
                                                    <p>Esteem spirit temper too say adieus who direct esteem.
                                                        It esteems luckily picture placing drawing. Apartments frequently or motionless on
                                                        reasonable projecting expression.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-xl-6 col-md-6">
                                                <div class="business_thumb">
                                                    <img src="img/about/business.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                            </div>
                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                    <div class="row align-items-center">
                                            <div class="col-xl-6 col-md-6">
                                                <div class="business_info">
                                                    <div class="icon">
                                                        <i class="flaticon-first-aid-kit"></i>
                                                    </div>
                                                    <h3>Leading edge care for Your family</h3>
                                                    <p>Esteem spirit temper too say adieus who direct esteem.
                                                        It esteems luckily picture placing drawing. Apartments frequently or motionless on
                                                        reasonable projecting expression.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-xl-6 col-md-6">
                                                <div class="business_thumb">
                                                    <img src="img/about/business.png" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                            </div>
                          </div>
            </div>
        </div>
    </div>

 
</div>

    );

  }
}
  


export default Home;
