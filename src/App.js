import styled from 'styled-components';
import './App.css';
import React,{useState, useEffect} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"

function App() {
  const [offsetY, setOffsetY]= useState(0);  
  const handlescroll = ()=> setOffsetY(window.pageYOffset);
  useEffect(() => {
    Aos.init();
    window.addEventListener('scroll', handlescroll);
    return () => {
      window.removeEventListener('scroll', handlescroll);
    }
  }, [])   


  return (


    <div className="App">
      <Nav>
        <a>Home</a>
        <a>About</a>
        <Signup>
          Sign Up
        </Signup>
        
      </Nav>
    <Main>
      <Title>
        <div style= {{transform: `translateY(${offsetY * 0.7}px)`}}>H</div>
        <div style= {{transform: `translateY(${offsetY * 0.6}px)`}}>U</div>
        <div style= {{transform: `translateY(${offsetY * 0.5}px)`}}>S</div>
        <div style= {{transform: `translateY(${offsetY * 0.7}px)`}}>T</div>
        <div style= {{transform: `translateY(${offsetY * 0.6}px)`}}>L</div>
        <div style= {{transform: `translateY(${offsetY * 0.6}px)`}}>E</div>
        <div style= {{transform: `translateY(${offsetY * 0.7}px)`}}>.</div>
        

      </Title>
      <Homeimg >
        <img src= "/images/pexels-victor-freitas-2261477.jpg" alt= ''/>
      </Homeimg>
    </Main>
    <Gallerytitle><span>Ultimate Fitness</span></Gallerytitle>
    <Imggallery1>
    
      <div data-aos="fade-down-right">
        <img src= "Images/pexels-binyamin-mellish-116077.jpg"></img>
      </div>
      
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-center"><img src= "Images/pexels-pixabay-260447.jpg"></img></div>
      <div data-aos="fade-down-left"><img src= "Images/1.png"></img></div>

    

    </Imggallery1>

    <Imggallery2>
    <div data-aos="fade-right"><img src= "Images/pexels-pixabay-416809.jpg"></img></div>
      <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"><img src= "Images/2.png"></img></div>
      <div data-aos="fade-left"><img src= "Images/pexels-andrea-piacquadio-3757943.jpg"/></div>
    </Imggallery2>


      
    </div>
  );
}

export default App;

const Nav = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: row;
  font-size: 1em;
  margin: 50px;
  justify-content: space-between;
  a{
    letter-spacing: 1px;
    &:hover{
      cursor: pointer;
    }
    &:active{
      font-size: 1.1em;
    }
  }
  
  

`
const Signup = styled.button`
background-color: transparent;
color: white;
outline: none;
border: 1px solid white;
border-radius: 5px;
height: 35px;
width: 80px;
font-size: 1em;
&:hover{
  background-color: teal;
  cursor: pointer;
}
&:active{
  background-color: #001514;
}

  
`
const Main = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;


  

`
const Homeimg = styled.div`
  height: 1000px;
  width: 1400px;
  /* margin-left: 50px; */
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`

const Title = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 10em;
  

`
const Gallerytitle = styled.div`
  font-size: 5em;
  text-align: center;
  

`
const Imggallery1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 50px;
  border-radius: 5px;
  
  div{
    height: 400px;
    width: 400px;
    margin: 50px;
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

`
const Imggallery2 = styled.div`
 display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 50px;
  border-radius: 5px;
  
  div{
    height: 400px;
    width: 400px;
    margin: 50px;
    
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    
  }

`

