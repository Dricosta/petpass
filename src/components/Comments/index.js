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
                        <span className="Comments_info-name">{this.props.name}</span>
                        <span className="Comments_info-time">{this.props.hour}</span>
                    </div>
                    <StarRatings
                    className="Comments_stars"
                    rating={this.props.rate}
                    starRatedColor="gold"
                    // changeRating={this.changeRating}
                    numberOfStars={5}
                    name='rating'
                    />
                </div>
                <p className="Comments_data">{this.props.comments}</p>
            </div>
        );
    }
}

export default Comments;
