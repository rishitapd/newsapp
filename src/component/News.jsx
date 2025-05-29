import React, { Component } from 'react'
import NewItem from './NewItem'

export class News extends Component {

 constructor() {
 super();
 console.log("hello");
  this.state={
  articles:[],
  loading:true,
  page:1
   }
  }
 
  async componentDidMount(){
    console.log("cdm");
    let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=be56c3a2182641918ed4fc09bbbe4e83&page=1&pageSize=${this.props.pageSize}`;
    let data =await fetch(url);
    let parsedData=await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults})
  }
   handlePrevClick=async()=>{
    console.log("prev")
     let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=be56c3a2182641918ed4fc09bbbe4e83&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    let data =await fetch(url);
    let parsedData=await data.json()
    console.log(parsedData);
    this.setState({
      page:this.state.page-1,
      articles: parsedData.articles
    })
  }
   handleNextClick=async()=>{
    console.log("next");
    if(this.state.page+1 >Math.ceil(this.state.totalResults/this.props.pageSize)){

    }else{
     let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=be56c3a2182641918ed4fc09bbbe4e83&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data =await fetch(url);
    let parsedData=await data.json()
    console.log(parsedData);
    this.setState({
      page:this.state.page+1,
      articles: parsedData.articles
    
    })
      }  }
  render() {
    return (
      <div className='container my-3 '> 
        <h2>NewsMonkey - Top Headlines </h2>
        <div className="row">
          {this.state.articles.map((Element)=>{
          return <div className='col-md-4' key={Element.url}>
        <NewItem  title={Element.title?Element.title.slice(0,40):""} description={Element.description?Element.description.slice(0,80):""} imageUrl={Element.urlToImage}
        newsUrl={Element.url}/>
        </div>
        })}
    </div>
    <div className='container d-flex justify-content-between'>
      <button disabled={this.state.page<=1}type="button" className="btn btn-outline-primary" onClick={this.handlePrevClick}> &larr; Previous</button>
      <button disabled={this.state.page+1 >Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-outline-primary" onClick={this.handleNextClick}>Next &rarr;</button>
       </div>
    </div>
    )
  }
}

export default News;
