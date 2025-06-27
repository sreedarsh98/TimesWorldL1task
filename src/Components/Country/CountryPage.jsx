import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './CountryPage.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const filters = ['All', 'Asia', 'Europe'];

const allCountries = Array(20).fill({ name: 'Afghanistan', region: 'Asia' });

const CountryPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredCountries =
    selectedFilter === 'All'
      ? allCountries
      : allCountries.filter((c) => c.region === selectedFilter);

  const loadMore = () => setVisibleCount((prev) => prev + 4);

  return (
    <Container className="countries-page">
      {/* Header */}
      <Row className="align-items-center justify-content-between mb-3">
        <Col><h5 className="logo">Countries</h5></Col>
        <Col className="text-end">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant="link"
              className={`filter-btn ${selectedFilter === filter ? 'active' : ''}`}
              onClick={() => {
                setSelectedFilter(filter);
                setVisibleCount(8); // reset count on filter change
              }}
            >
              {filter}
            </Button>
          ))}
        </Col>
      </Row>

      {/* Welcome */}
      <h2 className="welcome-heading">WELCOME</h2>

      {/* Hero Section */}
      <Row className="mb-4" >
        <Col md={9} >
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
        </Col>

        <Col md={3} className="side-frame">
          <div className="frame-placeholder">Frame</div>
        </Col>
      </Row>


      {/* Country Cards */}
      <Row>
        {filteredCountries.slice(0, visibleCount).map((country, idx) => (
          <Col md={6} key={idx} className="mb-3">
            <Card className="country-card">
              <div className="flag-placeholder"></div>
              <Card.Body>
                <Card.Title>{country.name}</Card.Title>
                <Card.Text>{country.region}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Load More */}
      {visibleCount < filteredCountries.length && (
        <div className="text-center my-4">
          <Button className="load-more-btn" onClick={loadMore}>
            Load more
          </Button>
        </div>
      )}

      {/* Footer */}
      <footer className="footer text-center">
        <div className="social-icons my-3">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-linkedin"></i>
          <i className="bi bi-youtube"></i>
        </div>
        <p>Example@email.com</p>
        <p>Copyright © 2020 Name. All rights reserved.</p>
      </footer>
    </Container>
  );
};

export default CountryPage;
