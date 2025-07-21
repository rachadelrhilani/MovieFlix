import React, {useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import MovieCard from '../components/Moviecard';
import CategorySelector from '../components/CategorySelector';
import SearchBar from '../components/SearchBar';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from '../components/Footer';

const Home = () => {
    const [category,setcategory] = useState("popular");
    const [search,setsearch] = useState("");
  return (
    <div>
        <Header/>
        <CategorySelector selectedCategory={category} onChangeCategory={setcategory}/>
        <SearchBar onSearch={setsearch}/>
        <MovieCard category={category} search={search}/>
        <Footer/>
    </div>
  );
};

export default Home;
