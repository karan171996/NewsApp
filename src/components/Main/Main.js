import React, { Component } from 'react';
import {
    MainContainer,
    NewsFeedContainer,
    ImageContainer,
    NewsContent,
    NewsImage,
    Button
} from './Main.style';
import {Flex} from '../../theme/globalStyle';
class Main extends Component {
    constructor(props){
        super(props);
        this.state ={
            data:[],
           country :'in',
        }
    }
    componentDidMount(){
        var url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2168698efa8b4571838a7d8aa85ceedc`;
           fetch(url)
           .then(res => res.json())
           .then(data => this.setState({
               data:data.articles
           }));
        }

        categorySelected =(val) =>{
            if(!this.state.country){
                let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${val}&apiKey=2168698efa8b4571838a7d8aa85ceedc`;
                   fetch(url)
                   .then(res => res.json())
                   .then(data => this.setState({
                       data:data.articles
                   },()=>{
                       console.log(this.state)
                   }));
            }
            else{
                let url =`https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${val}&apiKey=2168698efa8b4571838a7d8aa85ceedc`;
                fetch(url)
                .then(res => res.json())
                .then(data => this.setState({
                    data:data.articles
                },()=>{
                    console.log(this.state)
                }));
            }
            
        }
        categorySelectedCountry =(e) =>{
           
            if(!this.state.category){
                let url = `https://newsapi.org/v2/top-headlines?country=${e}&apiKey=2168698efa8b4571838a7d8aa85ceedc`;
                fetch(url)
                .then(res => res.json())
                .then(data => this.setState({
                    data:data.articles
                },()=>{
                    console.log(this.state)
                }));
            }
            else{
                let url = `https://newsapi.org/v2/top-headlines?country=${e}&category=${this.state.category}&apiKey=2168698efa8b4571838a7d8aa85ceedc`;
                       fetch(url)
                       .then(res => res.json())
                       .then(data => this.setState({
                           data:data.articles
                       },()=>{
                           console.log(this.state)
                       }));
            }
        }
       
    render() {
        console.log(this.state.data);
        return (
            <MainContainer>
                <Flex>
                  <Button onClick={()=>{this.categorySelected('business')}}><b>Business</b></Button> 
                  <Button onClick={()=>{this.categorySelected('entertainment')}}><b>Entertainment</b></Button>  
                  <Button onClick={()=>{this.categorySelected('general')}}><b>General</b></Button>  
                  <Button onClick={()=>{this.categorySelected('health')}}><b>Health</b></Button>  
                  <Button onClick={()=>{this.categorySelected('science')}}><b>Science</b></Button>  
                  <Button onClick={()=>{this.categorySelected('sports')}}><b>Sports</b></Button> 
                  <Button onClick={()=>{this.categorySelected('technology')}}><b>Technology</b></Button> 
                    <div style={{marginLeft:'30%'}}>
                        <select
                        value={this.state.country}
                        onChange={(e)=>{
                            this.setState({
                                country:e.target.value
                            },()=>{
                                this.categorySelectedCountry(this.state.country);
                            });
                            }}>
                        <option value="in">India</option>
                        <option value="ar">Argentina</option>
                        <option value="au">Australia</option>
                        <option value="br">Brazil</option>
                        <option value="bg">Bulgaria</option>

                        </select>
                    </div> 
                </Flex>
                
                    <NewsFeedContainer>
                            {
                                this.state.data &&
                            this.state.data.map((item)=>{
                                return(
                                    <Flex onClick={()=>{window.open(item.url ,"_blank")}} style={{boxShadow:' 0 4px 8px 0 rgba(0,0,0,0.2)',borderRadius:'30px',marginBottom:40,cursor:'pointer' ,width:'100%'}}>
                                        <ImageContainer>
                                            <NewsImage src={item.urlToImage ? item.urlToImage : " "}/>
                                        </ImageContainer>
                                        <NewsContent>
                                                <h1>{item.title}</h1>
                                                <p>{item.description}</p>
                                                <p><b>Source:</b>{item.source.name ? item.source.name :'Not Available'}</p>
                                                <p><b>Date:</b>{item.publishedAt.slice(0,9)}</p>
                                        </NewsContent>
                                    </Flex>
                                )
                            })
                            }
                    </NewsFeedContainer>
            </MainContainer>
        );
    }
}

export default Main;