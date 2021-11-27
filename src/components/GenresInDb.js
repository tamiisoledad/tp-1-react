import React, {Component} from "react";
import Genre from './Genre';

class GenresInDb extends Component{
    constructor(){
        super();
        this.state = {
            genresList : []
        }
    }

    cambioColor(){
            document.querySelector(".card-body").classList.toggle ="bg-secondary"
        console.log("Pase")
    }

    render(){
        return(
            <div className="col-lg-6 mb-4">						
			    <div className="card shadow mb-4">
					<div className="card-header py-3">
						<h5 className="m-0 font-weight-bold text-gray-800" onMouseOver={() => this.cambioColor()}>Genres in Data Base</h5>
					</div>
				    <div className="card-body">
					    <div className="row">
										
							{
								this.state.genresList.map((name, index)=>{
									return <Genre
										key={name.name + index}
										name = {name.name}
										/>
								})
							}
										

						</div>
					</div>
				</div>
			</div>
        );
    }
    async componentDidMount(){
        await this.apiCall('http://localhost:3001/api/genres',this.getGenres)
        console.log(this.state)
    }

    async apiCall(url, handler){
        try {
            let response = await fetch(url);
            let result = await response.json();
            handler(result)
        } catch (error) {
            console.log(error)
        }
    }
    getGenres = info => {
        this.setState({
            genresList: info.data
        })
    }
}



export default GenresInDb;