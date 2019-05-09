import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import bgAdriano from '../../assets/bgAdriano.jpeg';
import StarRatings from 'react-star-ratings';
import './style.scss'

class Comments extends Component {
    constructor(){
        super()
        this.state = {
            rating: 0
        }
        this.changeRating = this.changeRating.bind(this)
    }


    changeRating( newRating, name ) {
        this.setState({
          rating: newRating
        }, () => {
            console.log('stars:', this.state.rating)
        });
      }


    render() {
        const stylesUser = {
            backgroundImage: 'url(' + bgAdriano + ')',
            backgroundSize: 'cover'
        }
        return (
            <div className="Comments">
                <div className="Comments_info-group">
                    <Avatar className="Comments_avatar" style={stylesUser}/>
                    <div className="Comments_info">
                        <span className="Comments_info-name">Adriano da Costa</span>
                        <span className="Comments_info-time">há 13 min</span>
                    </div>
                    <StarRatings
                    className="Comments_stars"
                    rating={this.state.rating}
                    starRatedColor="brown"
                    changeRating={this.changeRating}
                    numberOfStars={5}
                    name='rating'
                    />
                </div>
                <p className="Comments_data">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        );
    }
}

export default Comments;
