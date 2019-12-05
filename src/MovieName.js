import React,{Component} from 'react';
import { BrowserRouter as Router ,Link, Route } from 'react-router-dom';

export default class MovieNameComponent extends Component{
  constructor(props){
    super(props)
  }
  render() {
    const element = (<h3>Movie Cards</h3>)
    const movies = [
       {"name": "The Holiday",
        "content":"Two girls from different countries swap homes for the holidays to get away from their relationship issues. However, their lives change unexpectedly when they meet and fall in love with two local guys.",
        "link":"https://en.wikipedia.org/wiki/The_Holiday"
      },
      {"name": "Avengers: Endgame",
        "content":"After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
        "link":"https://en.wikipedia.org/wiki/Avengers:_Endgame"
      },
      {"name": "Coco",
       "content":"Miguel pursues his love for singing in spite of his family's ban on music. He stumbles into the land of the dead where he learns about his great-great-grandfather who was a legendary singer.",
       "link":"https://en.wikipedia.org/wiki/Coco_(2017_film)",
       "image":"../images/1.jfif"
      },
      {"name": "Titanic",
       "content":"Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
       "link":"https://en.wikipedia.org/wiki/Titanic_(1997_film)"
      },
      {"name": "How to train your dragon",
       "content":"Hiccup, a Viking, must kill a dragon to mark his passage into manhood and be initiated into his tribe. However, he ends up doing the exact opposite by befriending a deadly Night Fury.",
      "link":"https://en.wikipedia.org/wiki/How_to_Train_Your_Dragon_(film)"
      },
      {"name": "Frozen2",
       "content":"Elsa the Snow Queen and her sister Anna embark on an adventure far away from the kingdom of Arendelle. They are joined by friends, Kristoff, Olaf, and Sven.",
       "link":"https://en.wikipedia.org/wiki/Frozen_II"
      },
   ];
   const bg = {
     background: 'black',
    };
    return (
      <div style={bg}>
        <h3 className="heading">
          {this.props.displaytext}
        </h3>
          {movies.map((value, index) => {
            return <div className="movie-card" key={index}>
              <img src="" />
                <h5>{value.name}</h5>
                <p>{value.content}</p>
                <a href={value.link} target="_blank">See More</a>
            </div>
          })}
      </div>
    );
  }
}
